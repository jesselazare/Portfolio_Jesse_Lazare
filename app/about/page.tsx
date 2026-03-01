"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3 / SCSS",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "Next.js",
        "React",
      ],
    },
    {
      title: "Backend & Data",
      skills: ["Python", "Anaconda", "MySQL", "ArgoUML"],
    },
    {
      title: "Design & Outils",
      skills: ["Figma", "UX/UI Design", "GitHub", "Agile (Scrum)"],
    },
  ];

  const experiences = [
    {
      date: "Septembre 2025 - Présent",
      title: "Bachelor Coding & Digital Innovation (A2)",
      location: "IIM Digital School - Nanterre",
      description:
        "Apprentissage approfondi du développement web fullstack, gestion de projet agile et algorithmique avancée.",
    },
    {
      date: "2023 - 2025",
      title: "Classe préparatoire",
      location: "JFN INSTITUT - Douala",
      description:
        "Conception d'interfaces modernes, manipulation de bases de données et algorithmique avancée.",
    },
    {
      date: "2023",
      title: "Baccalauréat D",
      location: "Collège Bilingue Laval - Douala",
      description: "Obtention du diplôme Baccalauréat D avec mention.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-fixed bg-[linear-gradient(to_bottom,#ffffff_0%,#7dd3fc_50%,#1e40af_75%,#000000_100%)]">
      <div className="w-full max-w-5xl mx-auto px-8 py-12 text-zinc-950">
        {/* NAV BAR */}
        <nav className="flex w-full items-center justify-between mb-16 animate-fadeIn">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter hover:text-blue-700 transition-colors"
          >
            JLKT<span className="text-blue-700">.</span>
          </Link>

          <div className="flex items-center space-x-6 sm:space-x-10 text-xs font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-blue-700 transition-colors">
              Accueil
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-700 transition-colors"
            >
              Projets
            </Link>
            <Link
              href="/about"
              className="text-blue-700 border-b-2 border-blue-700 pb-1"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* HERO SECTION*/}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32 animate-slideUp">
          <div className="flex-1 text-center md:text-left">
            {" "}
            <h1 className="font-black tracking-tighter text-5xl md:text-7xl uppercase leading-[0.9] mb-8">
              À PROPOS DE <br />
              <span className="text-blue-700">JESSÉ LAZARE</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl font-medium leading-relaxed opacity-90 italic border-l-4 border-blue-700 pl-6">
              "Passionné par le code et l'innovation numérique, je construis des
              solutions web modernes et performantes."
            </p>
          </div>

          <div className="flex-shrink-0 isolate">
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-xl overflow-hidden border-[6px] border-white shadow-2xl">
              <Image
                src="/IMG_2399.png"
                alt="Jessé Lazare KAMWA TSOBGNY"
                fill
                className="object-cover"
                style={{ mixBlendMode: "normal" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* SECTION EXPERTISE*/}
        <section className="w-full mb-32">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Expertise
            </h2>
            <div className="h-[2px] w-24 bg-blue-700"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((cat, index) => (
              <div key={index} className="space-y-4 text-center md:text-left">
                <h3 className="text-blue-700 font-bold uppercase tracking-widest text-[10px]">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-[10px] font-bold uppercase bg-white/40 backdrop-blur-md border border-white/60 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION PARCOURS */}
        <section className="w-full mb-32">
          <div className="flex flex-col items-center gap-4 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Parcours
            </h2>
            <div className="h-[2px] w-24 bg-blue-700"></div>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 border-l-4 border-blue-700/20"
              >
                <div className="absolute -left-[14px] top-0 h-6 w-6 rounded-full bg-blue-700 border-4 border-white shadow-md"></div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-blue-800 uppercase tracking-[0.3em]">
                    {exp.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-700 font-bold text-xs uppercase tracking-widest">
                    {exp.location}
                  </p>
                  <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-16 border-t border-black/10 flex justify-between items-center opacity-40 text-[10px] uppercase tracking-[0.3em] font-bold">
          <span>© {new Date().getFullYear()} Jesse Lazare</span>
          <span className="hidden sm:block">Innovation • Code • Design</span>
        </footer>
      </div>
    </main>
  );
}
