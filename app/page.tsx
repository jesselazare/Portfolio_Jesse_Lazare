"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skills = [
    "HTML5",
    "CSS3 / SCSS",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Python",
    "Next.js",
    "GitHub",
    "Figma",
    "UX/UI Design",
    "MySQL",
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full max-w-5xl px-8 py-12 text-adaptive">
        {/* BARRE DE NAVIGATION HARMONISÉE */}
        <nav className="flex w-full items-center justify-between mb-24 animate-fadeIn">
          {/* LOGO JLKT */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter hover:text-blue-600 transition-colors"
          >
            JLKT<span className="text-blue-600">.</span>
          </Link>

          {/* LIENS DE NAVIGATION COMPLETS */}
          <div className="flex items-center space-x-6 sm:space-x-10 text-xs font-bold uppercase tracking-[0.2em]">
            {/* Lien Accueil Actif */}
            <Link
              href="/"
              className="text-blue-500 border-b-2 border-blue-500 pb-1"
            >
              Accueil
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projets
            </Link>
            {/* AJOUT DE L'ONGLET À PROPOS */}
            <Link
              href="/about"
              className="hover:text-blue-500 transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* SECTION HERO : PRÉSENTATION */}
        <section className="flex flex-col gap-12 mb-32">
          <div className="space-y-6 animate-slideUp">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.4em] text-sm">
              Bachelor Coding & Digital Innovation
            </h2>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              Jessé Lazare
              <br />
              <span className="text-blue-600">KAMWA TSOBGNY</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start animate-fadeIn delay-300">
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 relative z-10">
                <p className="text-lg md:text-xl leading-relaxed opacity-80">
                  Je suis un étudiant passionné par le développement et
                  l'innovation numérique. Curieux et motivé, j'aime transformer
                  des idées en solutions concrètes à travers le code. Mon
                  approche combine rigueur technique et créativité nourrie par
                  le sport et le design.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-blue-600/30 -z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>

            <div className="flex flex-col gap-8 justify-center h-full">
              <div className="h-[1px] w-full bg-gradient-to-r from-blue-600 to-transparent"></div>
              <p className="text-sm uppercase tracking-widest opacity-50">
                Basé à Nanterre — Disponible pour de nouveaux défis digitaux.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION COMPÉTENCES */}
        <section className="w-full mb-32">
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Compétences
            </h2>
            <div className="h-[2px] flex-grow bg-white/10"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 flex items-center justify-center text-center"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-blue-500">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-16 border-t border-white/10 flex justify-between items-center opacity-40 text-[10px] uppercase tracking-[0.3em]">
          <span>© {new Date().getFullYear()} Jesse Lazare</span>
          <span className="hidden sm:block">Innovation • Code • Design</span>
        </footer>
      </div>

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}</style>
    </main>
  );
}
