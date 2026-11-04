"use client";

import Link from "next/link";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setStatus("error");
    setStatus("done");
    setEmail("");
  };

  return (
    <form onSubmit={submit} noValidate className="mx-auto mt-5 w-full max-w-[420px]">
      <div className="flex gap-2">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input id="email" type="email" value={email} placeholder="Your email address" autoComplete="email"
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
          aria-invalid={status === "error"}
          className="min-w-0 flex-1 rounded-[3px] border border-line/60 bg-white px-3 py-2 text-[11px] text-[#0b0e23] outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-accent" />
        <button type="submit"
          className="rounded-[3px] bg-accent px-4 py-2 text-[11px] font-medium text-white transition hover:brightness-110 active:scale-95">
          Subscribe
        </button>
      </div>
      <p role="status" className={`mt-2 text-[9px] ${status === "error" ? "text-red-400" : status === "done" ? "text-green-500" : "text-muted"}`}>
        {status === "error" && "Please enter a valid email address."}
        {status === "done" && "Thanks for subscribing! Check your inbox to confirm."}
        {status === "idle" && (<>We care about your data in our <Link href="/newsletter" className="underline">privacy policy</Link>.</>)}
      </p>
    </form>
  );
}
