# SVU Developers – Next.js website with Google Sheets enquiries

The original corporate page styling and existing information are retained. Clicking the Arbitration or Legal Services action navigates to a dedicated page (`/arbitration` or `/legal-services`) containing the relevant service request page. On submit, the browser sends the data to the Next.js API route and the server appends it to your Google Sheet. The visitor is not redirected to Google Sheets.

## 1. Create the Google Sheet

1. Create a Google Sheet in your Google account.
2. Rename the first tab to `Enquiries`.
3. Put these headings in row 1, in this exact order:

   `Submitted At | Service Type | Full Name | Phone | Email | Property / Location | Requirement | Description | Document Name | Source`

4. Copy the spreadsheet ID from its URL. It is the text between `/d/` and `/edit`.

## 2. Create Google Cloud service-account access

1. Open https://console.cloud.google.com/ and select or create a Google Cloud project.
2. Enable **Google Sheets API** for that project.
3. Create a service account under **IAM & Admin → Service Accounts**.
4. Create a JSON key for the service account and download it.
5. Open your Google Sheet and share it with the service account's `client_email` address from the JSON key. Give it **Editor** access. This is essential: the API cannot write to a sheet that has not been shared with the service account.

## 3. Configure this project

1. Copy `.env.local.example` to `.env.local` in the project root.
2. Set `GOOGLE_SHEETS_SPREADSHEET_ID` to your spreadsheet ID.
3. Set `GOOGLE_SERVICE_ACCOUNT_JSON` to the complete service-account JSON on one line. Preserve the private key's `\\n` sequences. Never commit `.env.local` or expose the service-account key in frontend code.
4. Install dependencies and run:

   ```bash
   npm install
   npm run dev
   ```

5. Submit a test request from each service card and confirm that a new row appears in the `Enquiries` tab.

## 4. Deploying

Add the same two environment variables to your hosting provider's server-side environment settings, then redeploy. Keep the service-account JSON secret. Do not use a `NEXT_PUBLIC_` prefix for either variable.

## Form behaviour

- Arbitration and Legal Services have separate form headings and requirement choices.
- The form is displayed on its own website page and submits within the website.
- Success or error feedback appears in the form; no Google Sheets redirect occurs.
- The backend writes the request timestamp, service type and submitted details to the sheet.
- The optional document field currently records a document name only; it does not upload file contents. Secure file upload/storage can be added separately.

## Notes

- Google Sheets stores the request records; it does not create downloadable Excel files automatically. You can use **File → Download → Microsoft Excel (.xlsx)** in Google Sheets whenever needed.
- Do not share the service-account JSON or commit `.env.local` to Git.
