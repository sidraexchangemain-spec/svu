import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

function getSheetsClient() {
  const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!credentialsJson || !process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
    throw new Error("Google Sheets is not configured. Set GOOGLE_SERVICE_ACCOUNT_JSON and GOOGLE_SHEETS_SPREADSHEET_ID.");
  }
  const credentials = JSON.parse(credentialsJson);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["fullName", "phone", "requirement", "description", "serviceType"];
    for (const key of required) {
      if (typeof body[key] !== "string" || !body[key].trim()) {
        return NextResponse.json({ error: `Please provide ${key}.` }, { status: 400 });
      }
    }
    if (!["Arbitration", "Legal Services"].includes(body.serviceType)) {
      return NextResponse.json({ error: "Invalid enquiry type." }, { status: 400 });
    }
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Enquiries!A:J",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          new Date().toISOString(),
          body.serviceType,
          String(body.fullName).trim(),
          String(body.phone).trim(),
          String(body.email || "").trim(),
          String(body.propertyLocation || "").trim(),
          String(body.requirement).trim(),
          String(body.description).trim(),
          String(body.documentName || "").trim(),
          "Website",
        ]],
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission failed:", error);
    const message = error instanceof Error ? error.message : "Unable to save enquiry.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
