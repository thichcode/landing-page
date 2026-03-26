'use client';

import { FormEvent, useState } from 'react';

type FormCopy = {
  name: string;
  company: string;
  phone: string;
  message: string;
  submit: string;
  success?: string;
};

export function ContactForm({ formCopy, successMessage }: { formCopy: FormCopy; successMessage?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error('Unable to send request');
      }
      setStatus('success');
      event.currentTarget.reset();
    } catch (err) {
      setStatus('idle');
      setError((err as Error).message);
    }
  }

  return (
    <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
      <label className="col-span-2">
        <span className="text-sm font-semibold text-slate-600">{formCopy.name}</span>
        <input
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </label>
      <label>
        <span className="text-sm font-semibold text-slate-600">{formCopy.company}</span>
        <input
          name="company"
          type="text"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </label>
      <label>
        <span className="text-sm font-semibold text-slate-600">{formCopy.phone}</span>
        <input
          name="phone"
          type="tel"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </label>
      <label className="col-span-2">
        <span className="text-sm font-semibold text-slate-600">{formCopy.message}</span>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </label>
      {error && <p className="col-span-2 text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="col-span-2 rounded-full bg-dark-blue px-6 py-3 text-base font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#0a1731] disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : formCopy.submit}
      </button>
      {status === 'success' && (
        <p className="col-span-2 text-sm text-green-600">{successMessage ?? 'Thank you! We will reply soon.'}</p>
      )}
    </form>
  );
}
