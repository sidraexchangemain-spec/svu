"use client";
import { useState } from "react";
import Link from "next/link";

type ModalId = "directors" | "corporate" | "location";

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalId | null>(null);
  const openModal = (id: ModalId) => setActiveModal(id);
  const closeModal = (_id?: ModalId) => setActiveModal(null);
  return (
    <>
<header>
        <h1>SVU DEVELOPERS PVT LTD COMPANY</h1>
        <p className="sub-heading">
            Corporate Identification Number<br />
            <span className="cin">U45205AP2022PTC121016</span>
        </p>
    </header>

    <div className="services-container">
        <div className="service-box">
            <img src="https://thumbs.dreamstime.com/b/arbitration-blue-gradient-concept-icon-arbitration-blue-gradient-concept-icon-employment-contract-time-management-productivity-335021685.jpg" alt="Arbitration" />
            <div className="service-title">Arbitration</div>
            <Link className="service-action" href="/arbitration">Submit Arbitration Enquiry</Link>
        </div>
        <div className="service-box">
            <img src="https://static.vecteezy.com/system/resources/previews/023/518/558/non_2x/legal-service-icon-judge-gavel-and-open-law-book-vector.jpg" alt="Legal Services" />
            <div className="service-title">Legal Services</div>
            <Link className="service-action" href="/legal-services">Request Free Legal Service</Link>
        </div>
    </div>

    {/* FOOTER ICONS */}
    <footer>
        {/* Board of Directors */}
        <div className="footer-icon" onClick={() => openModal("directors")} title="Board of Directors">
            <svg viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        </div>

        {/* Corporate Information (now includes Registered Office) */}
        <div className="footer-icon" onClick={() => openModal("corporate")} title="Corporate Information">
            <svg viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
        </div>

        {/* Company Location */}
        <div className="footer-icon" onClick={() => openModal("location")} title="Company Location">
            <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
        </div>

        {/* Gmail → Direct */}
        <a className="footer-icon" href="mailto:svudeveloperspvtltd04@gmail.com" title="Email">
            <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        </a>

        {/* Phone → Direct */}
        <a className="footer-icon" href="tel:+919652135836" title="Call">
            <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
        </a>

        {/* WhatsApp → Direct */}
        <a className="footer-icon whatsapp" href="https://wa.me/919652135836" target="_blank" title="WhatsApp">
            <svg viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        </a>
    </footer>

    {/* ===== MODAL: Board of Directors ===== */}
    <div className={`modal-overlay ${activeModal === "directors" ? "active" : ""}`} id="directors" onClick={(event) => event.target === event.currentTarget && closeModal("directors")}>
        <div className="modal-box">
            <div className="modal-header">
                Board of Directors
                <button className="close-btn" onClick={() => closeModal("directors")}>×</button>
            </div>
            <div className="modal-body">
                <div className="directors-grid">
                    <div className="director-card">SAI SRI LASYAA JAGUPILLA</div>
                    <div className="director-card">Ramakrishna Mullu</div>
                    <div className="director-card">Sivareddy Talakola</div>
                    <div className="director-card">Anuradha Korikani</div>
                    <div className="director-card">Raju Gadi</div>

                </div>
            </div>
        </div>
    </div>

    {/* ===== MODAL: Corporate Information (includes Registered Office) ===== */}
    <div className={`modal-overlay ${activeModal === "corporate" ? "active" : ""}`} id="corporate" onClick={(event) => event.target === event.currentTarget && closeModal("corporate")}>
        <div className="modal-box">
            <div className="modal-header">
                Corporate Information
                <button className="close-btn" onClick={() => closeModal("corporate")}>×</button>
            </div>
            <div className="modal-body">
                {/* Corporate Details */}
                <div className="section-title">Company Details</div>
                <div className="corp-grid">
                    <div className="corp-card">
                        <div className="corp-label">Corporate Identification Number</div>
                        <div className="corp-value">U45205AP2022PTC121016</div>
                    </div>
                    <div className="corp-card">
                        <div className="corp-label">Date of Incorporation</div>
                        <div className="corp-value">09 March 2022</div>
                    </div>
                    <div className="corp-card">
                        <div className="corp-label">Authorized Share Capital</div>
                        <div className="corp-value">₹10,00,000</div>
                    </div>
                    <div className="corp-card">
                        <div className="corp-label">Paid-up Share Capital</div>
                        <div className="corp-value">₹1,00,000</div>
                    </div>
                </div>

                {/* Registered Office (moved here) */}
                <div className="section-title">Registered Office</div>
                <div className="office-name">SVU DEVELOPERS PRIVATE LIMITED</div>
                <div className="office-address">
                    43-107/1-56A, Andhra Patrika Colony,<br />
                    Pipula Road, Vijayawada,<br />
                    Andhra Pradesh, India – 520015.
                </div>
                <div className="reg-authority">
                    <strong>Registration Authority:</strong> Registrar of Companies, Vijayawada.
                </div>
            </div>
        </div>
    </div>

    {/* ===== MODAL: Company Location ===== */}
    <div className={`modal-overlay ${activeModal === "location" ? "active" : ""}`} id="location" onClick={(event) => event.target === event.currentTarget && closeModal("location")}>
        <div className="modal-box">
            <div className="modal-header">
                Company Location
                <button className="close-btn" onClick={() => closeModal("location")}>×</button>
            </div>
            <div className="modal-body">
                <div className="location-box">
                    <div className="office-name">SVU DEVELOPERS PRIVATE LIMITED</div>
                    <div className="office-address">
                        3-107/1-56A, Andhra Patrika Colony,<br />
                        Pipula Road, Vijayawada,<br />
                        Andhra Pradesh, India – 520015.
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}
