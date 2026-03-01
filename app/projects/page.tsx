"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = [
    "all",
    ...Array.from(new Set(projects.flatMap((p) => p.techs))),
  ];

  return (
    <main className="min-h-screen w-full px-6 py-12">
      <div className="max-w-6xl mx-auto text-adaptive">
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
              className="text-blue-500 border-b-2 border-blue-500 pb-1"
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
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>

        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 animate-slideUp uppercase tracking-tighter">
          Mes Projets
        </h1>

        {/* FILTRES */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === f ? "bg-blue-600 border-blue-600 text-white shadow-lg" : "bg-white/5 border-white/10 hover:bg-white/20"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRILLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          {projects
            .filter(
              (p) => activeFilter === "all" || p.techs.includes(activeFilter),
            )
            .map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2"
              >
                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h2>
                <p className="opacity-60 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
