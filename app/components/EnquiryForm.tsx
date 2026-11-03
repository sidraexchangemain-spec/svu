"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type ServiceType = "Arbitration" | "Legal Services";

export default function EnquiryForm({ serviceType }: { serviceType: ServiceType }) {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setSubmitting(true);
    setMessage("");
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, serviceType }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to submit your enquiry.");
      setIsError(false);
      setMessage("Your enquiry has been submitted successfully. Our team will contact you.");
      form.reset();
    } catch (error) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="enquiry-page">
      <section className="enquiry-page-card">
        <div className="enquiry-page-top">
          <Link href="/" className="back-link">← Back to Home</Link>
          <div className="enquiry-brand">SVU DEVELOPERS PVT LTD</div>
          <h1>{serviceType} Enquiry</h1>
          <p>
            {serviceType === "Arbitration"
              ? "Share the details of your dispute. Our team will review your enquiry and contact you."
              : "Tell us what legal guidance you need. Submit your details to request free legal assistance."}
          </p>
        </div>

        <form className="enquiry-form enquiry-page-form" onSubmit={handleSubmit}>
          <label>Full name *<input name="fullName" required maxLength={120} autoComplete="name" placeholder="Enter your full name" /></label>
          <div className="enquiry-two-col">
            <label>Mobile number *<input name="phone" required type="tel" pattern="[0-9+() -]{7,20}" autoComplete="tel" placeholder="Enter mobile number" /></label>
            <label>Email address<input name="email" type="email" maxLength={160} autoComplete="email" placeholder="Enter email address" /></label>
          </div>
          <label>Property / Location<input name="propertyLocation" maxLength={250} placeholder="Enter property or location details" /></label>
          <label>{serviceType === "Arbitration" ? "Dispute type *" : "Legal service required *"}
            <select name="requirement" required defaultValue="">
              <option value="" disabled>Select an option</option>
              {serviceType === "Arbitration" ? <>
                <option>Land / Property Dispute</option>
                <option>Agreement / Contract Dispute</option>
                <option>Construction Dispute</option>
                <option>Business / Partnership Dispute</option>
                <option>Other</option>
              </> : <>
                <option>Land Legal Advice</option>
                <option>Property Document Verification</option>
                <option>Sale / Purchase Legal Guidance</option>
                <option>Title / Ownership Issue</option>
                <option>Other</option>
              </>}
            </select>
          </label>
          <label>Describe your requirement *<textarea name="description" required minLength={10} maxLength={5000} rows={5} placeholder="Briefly explain your requirement..." /></label>
          <label>Document reference (optional)<input name="documentName" maxLength={200} placeholder="Enter document name, if applicable" /></label>
          <button className="enquiry-submit" type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Enquiry"}
          </button>
          {message && <p className={`form-message ${isError ? "error" : "success"}`} role="status">{message}</p>}
          <p className="privacy-note">Your enquiry will be securely submitted to SVU Developers. You will remain on this website.</p>
        </form>
      </section>
    </main>
  );
}
