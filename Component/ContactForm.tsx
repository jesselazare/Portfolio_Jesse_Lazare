// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const data = await res.json();

    setLoading(false);
    setMessage(data.message);

    if (res.ok) {
      e.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        type="text"
        placeholder="Nom"
        required
        className="border p-3 rounded"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border p-3 rounded"
      />

      <textarea
        name="message"
        placeholder="Votre message"
        required
        rows={5}
        className="border p-3 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
      >
        {loading ? "Envoi..." : "Envoyer"}
      </button>

      {message && <p className="text-center mt-2">{message}</p>}
    </form>
  );
}
