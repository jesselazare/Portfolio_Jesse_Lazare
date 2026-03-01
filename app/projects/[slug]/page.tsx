import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full px-6 py-20">
      <article className="max-w-4xl mx-auto text-adaptive">
        {/* Bouton Retour */}
        <Link
          href="/projects"
          className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] mb-12 hover:text-blue-500 transition-colors group"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">
            ←
          </span>{" "}
          Retour aux projets
        </Link>

        {/*En-tête*/}
        <header className="mb-12 animate-slideUp">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold border border-blue-500/40 text-blue-400 px-4 py-1.5 uppercase tracking-widest bg-blue-600/5 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Contenu Principal*/}
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-md animate-fadeIn">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-10 font-medium">
              {project.longDescription ?? project.description}
            </p>
          </div>

          {/* Lien GitHub */}
          <div className="flex pt-6 border-t border-white/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-10 py-4 bg-blue-600 text-white text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-blue-700 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Voir sur GitHub
                <svg
                  className="w-5 h-5 ml-3 transition-transform group-hover:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/*FOOTER*/}
        <footer className="mt-16 text-center opacity-30 text-[10px] uppercase tracking-[0.5em]">
          Digital Innovation Portfolio — {new Date().getFullYear()}
        </footer>
      </article>
    </main>
  );
}
