"use server";

import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type FormState = { ok: boolean; message: string } | null;

const FIELDS = ["name", "phone", "email", "website", "city", "business", "message"] as const;

export async function sendEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real users never fill this hidden field.
  if (formData.get("company_url")) return { ok: true, message: "Thanks! I'll be in touch soon." };

  const data = Object.fromEntries(
    FIELDS.map((f) => [f, String(formData.get(f) ?? "").trim().slice(0, 2000)])
  ) as Record<(typeof FIELDS)[number], string>;
  const formType = String(formData.get("form_type") ?? "Enquiry").slice(0, 50);

  if (!data.name || (!data.phone && !data.email)) {
    return { ok: false, message: "Please enter your name and a phone number or email." };
  }

  const password = process.env.SMTP_PASSWORD;
  if (!password) {
    console.error("SMTP_PASSWORD is not set — enquiry not emailed:", data);
    return { ok: false, message: "Sorry, the form isn't working right now. Please contact me on WhatsApp or email instead." };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: { user: process.env.SMTP_USER ?? site.email, pass: password },
  });

  const body = FIELDS.filter((f) => data[f]).map((f) => `${f}: ${data[f]}`).join("\n");

  try {
    await transporter.sendMail({
      from: `"${site.name} Website" <${process.env.SMTP_USER ?? site.email}>`,
      to: site.email,
      replyTo: data.email || undefined,
      subject: `${formType}: ${data.name}${data.city ? ` (${data.city})` : ""}`,
      text: body,
    });
    return { ok: true, message: "Thanks! I've received your request and will reply within one working day." };
  } catch (err) {
    console.error("Failed to send enquiry email:", err);
    return { ok: false, message: "Sorry, something went wrong. Please contact me on WhatsApp or email instead." };
  }
}
