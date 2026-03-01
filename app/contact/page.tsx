"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Message envoyé !");
  };

  return (
    <main className="min-h-screen w-full px-6 py-12">
      <div className="max-w-xl mx-auto text-adaptive flex flex-col items-center">
        {/* NAV BAR*/}
        <nav className="flex w-full items-center justify-between mb-20 animate-fadeIn">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter hover:text-blue-600 transition-colors"
          >
            JLKT<span className="text-blue-600">.</span>
          </Link>
          <div className="flex items-center space-x-6 sm:space-x-8 text-xs font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Accueil
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projets
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-500 transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-blue-500 border-b-2 border-blue-500 pb-1"
            >
              Contact
            </Link>
          </div>
        </nav>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-10 text-center animate-slideUp uppercase tracking-tighter">
          Contact
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-6 animate-fadeIn"
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest ml-1">
              Nom
            </label>
            <input
              type="text"
              placeholder="Votre nom"
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-white/20"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-white/20"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest ml-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Dites-moi tout..."
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-white/20 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 py-4 rounded-2xl font-bold text-white hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-600/20 uppercase tracking-widest text-sm"
          >
            Envoyer
          </button>
          {status && (
            <p className="text-center text-blue-400 font-bold animate-fadeIn">
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
