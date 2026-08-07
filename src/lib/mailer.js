import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });
  }
  return transporter;
}

export async function sendMail({ to, subject, html }) {
  try {
    await getTransporter().sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });
    return { ok: true };
  } catch (error) {
    console.error("sendMail failed:", error.message);
    return { ok: false, error: error.message };
  }
}

function formatDateTime(date) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(date);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";
const LOGO_URL = `${SITE_URL}/assets/images/logo.svg`;

const FORM_TYPE_LABELS = {
  CONTACT: "Contact Form",
  REQUEST_QUOTE: "Request a Quote",
};

/**
 * Shared, email-client-safe HTML shell (table-based layout, inline CSS)
 * used by every notification email so templates stay visually consistent.
 */
function renderEmailShell({ heading, preheader, rows }) {
  const rowsHtml = rows
    .filter((row) => row.value !== undefined && row.value !== null && row.value !== "")
    .map(
      (row) => `
        <tr>
          <td style="padding:14px 24px;border-bottom:1px solid #eef1f3;font:600 13px/1.4 Arial,Helvetica,sans-serif;color:#6b7b83;width:170px;vertical-align:top;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:14px 24px;border-bottom:1px solid #eef1f3;font:400 14px/1.6 Arial,Helvetica,sans-serif;color:#0b2530;vertical-align:top;">
            ${row.html ?? escapeHtml(row.value)}
          </td>
        </tr>`
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(heading)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f5f7;">
    <span style="display:none;font-size:1px;color:#f2f5f7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
      ${escapeHtml(preheader ?? heading)}
    </span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f5f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">

            <tr>
              <td style="background-color:#002b3b;padding:28px 32px;text-align:left;">
                <img src="${LOGO_URL}" alt="Precision Equipments" height="40" style="display:block;height:40px;width:auto;" />
              </td>
            </tr>

            <tr>
              <td style="padding:28px 32px 8px;">
                <h1 style="margin:0;font:700 20px/1.4 Arial,Helvetica,sans-serif;color:#002b3b;">${escapeHtml(heading)}</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 0 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rowsHtml}
                </table>
              </td>
            </tr>

            <tr>
              <td style="background-color:#f6f6f6;padding:24px 32px;">
                <p style="margin:0 0 6px;font:700 14px/1.5 Arial,Helvetica,sans-serif;color:#002b3b;">Precision Equipments (Chennai) Pvt Ltd</p>
                <p style="margin:0 0 4px;font:400 12px/1.6 Arial,Helvetica,sans-serif;color:#5b6b73;">
                  Unit-1: B-70/1, SIPCOT Industrial Park, Thandalam, Irungattukottai, Chennai-602 105, India.
                </p>
                <p style="margin:0;font:400 12px/1.6 Arial,Helvetica,sans-serif;color:#5b6b73;">
                  Phone: +91 44 - 4710 0603 &nbsp;|&nbsp; Email: sales@pecpl.com
                </p>
                <p style="margin:16px 0 0;font:400 11px/1.6 Arial,Helvetica,sans-serif;color:#98a4aa;">
                  &copy; ${new Date().getFullYear()} Precision Equipments (Chennai) Pvt Ltd. All Rights Reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildEnquiryEmail({ name, phone, email, location, message, formType, createdAt }) {
  const label = FORM_TYPE_LABELS[formType] ?? formType;

  const html = renderEmailShell({
    heading: `New ${label} Enquiry`,
    preheader: `${name} submitted a ${label.toLowerCase()} enquiry`,
    rows: [
      { label: "Form Type", value: label },
      { label: "Name", value: name },
      { label: "Phone", value: phone },
      { label: "Email", value: email },
      { label: "Location", value: location },
      { label: "Message", value: message || "-" },
      { label: "Submitted", value: formatDateTime(createdAt) },
    ],
  });

  return { subject: `New ${label} Enquiry from ${name}`, html };
}

export function buildCareerApplicationEmail({ name, phone, email, location, message, resumeName, createdAt }) {
  const html = renderEmailShell({
    heading: "New Career Application",
    preheader: `${name} submitted a career application`,
    rows: [
      { label: "Form Type", value: "Career Application" },
      { label: "Name", value: name },
      { label: "Phone", value: phone },
      { label: "Email", value: email },
      { label: "Location", value: location },
      { label: "Message", value: message || "-" },
      { label: "Resume", value: resumeName ? `${resumeName} (attached in admin panel)` : "-" },
      { label: "Submitted", value: formatDateTime(createdAt) },
    ],
  });

  return { subject: `New Career Application from ${name}`, html };
}

export function buildNewsletterEmail({ email, createdAt }) {
  const html = renderEmailShell({
    heading: "New Newsletter Subscription",
    preheader: `${email} subscribed to the newsletter`,
    rows: [
      { label: "Form Type", value: "Newsletter Subscription" },
      { label: "Subscriber Email", value: email },
      { label: "Submitted", value: formatDateTime(createdAt) },
    ],
  });

  return { subject: "New Newsletter Subscription", html };
}
