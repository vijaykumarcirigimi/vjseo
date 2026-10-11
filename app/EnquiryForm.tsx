"use client";

import { useActionState } from "react";
import { sendEnquiry, type FormState } from "./actions";
import { cities } from "@/lib/cities";

export function EnquiryForm({ type, showWebsite = true }: { type: string; showWebsite?: boolean }) {
  const [state, action, pending] = useActionState<FormState, FormData>(sendEnquiry, null);

  if (state?.ok) return <p className="notice">{state.message}</p>;

  return (
    <form action={action} className="form">
      <input type="hidden" name="form_type" value={type} />
      <input type="text" name="company_url" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label>
        Your name *
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Phone / WhatsApp
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" />
      </label>
      {showWebsite && (
        <label>
          Website (if you have one)
          <input name="website" type="text" inputMode="url" placeholder="example.com" />
        </label>
      )}
      <label>
        City
        <select name="city" defaultValue="">
          <option value="">Select your city</option>
          {cities.map((c) => <option key={c.slug}>{c.name}</option>)}
          <option>Other city in AP</option>
          <option>Outside AP</option>
        </select>
      </label>
      <label>
        Type of business
        <input name="business" placeholder="e.g. dental clinic, real estate, restaurant" />
      </label>
      <label>
        Message
        <textarea name="message" rows={4} />
      </label>
      {state && !state.ok && <p className="notice error">{state.message}</p>}
      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
