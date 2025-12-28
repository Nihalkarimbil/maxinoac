"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  serviceType: "Installation",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function RequestServiceForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);

    if (!form.name || !form.phone || !form.address) {
      setResult({ ok: false, message: "Please fill name, phone, and address." });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed");
      setResult({ ok: true, message: "Thanks! We received your request." });
      setForm(initialState);
    } catch (err: any) {
      setResult({ ok: false, message: err.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm max-w-2xl">
      <div className="grid gap-1">
        <label className="text-sm font-medium">Full Name *</label>
        <input value={form.name} onChange={(e) => update("name", e.target.value)} required className="rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium">Phone *</label>
        <input value={form.phone} onChange={(e) => update("phone", e.target.value)} required className="rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium">Email</label>
        <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium">Address *</label>
        <input value={form.address} onChange={(e) => update("address", e.target.value)} required className="rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Street, City, ZIP" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium">Service Type</label>
        <select value={form.serviceType} onChange={(e) => update("serviceType", e.target.value)} className="rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
          <option>Installation</option>
          <option>Repair</option>
          <option>Maintenance</option>
          <option>Inspection</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid gap-1">
          <label className="text-sm font-medium">Preferred Date</label>
          <input type="date" value={form.preferredDate} onChange={(e) => update("preferredDate", e.target.value)} className="rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium">Preferred Time</label>
          <input type="time" value={form.preferredTime} onChange={(e) => update("preferredTime", e.target.value)} className="rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-medium">Additional Details</label>
        <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={4} className="rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about the issue or needs" />
      </div>

      {result && (
        <div className={`rounded-md border px-3 py-2 text-sm ${result.ok ? "border-green-300 bg-green-50 text-green-800" : "border-red-300 bg-red-50 text-red-800"}`}>
          {result.message}
        </div>
      )}

      <button disabled={submitting} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 disabled:opacity-60">
        {submitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}


