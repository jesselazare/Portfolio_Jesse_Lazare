// app/data/projects.ts


export type Project = {
  slug: string;              
  title: string;            
  description: string;       
  longDescription?: string;  
  techs: string[];           
  githubUrl: string;        
};

export const projects: Project[] = [
  {
    slug: "integration-scss",
    title: "Intégration SCSS",
    description: "Intégration SCSS fidèle d'une maquette Figma.",
    longDescription:
      "Projet d'intégration front-end à partir d'une maquette Figma. L'objectif était de respecter une maquette selectionnée au préalable tout en utilisant SCSS pour une meilleure organisation des styles et une personnalisation selon nos gouts.",
    techs: ["HTML", "CSS", "SCSS"],
    githubUrl: "https://github.com/jesselazare/SCSS",
    
  },
  {
    slug: "pixel-trader",
    title: "Pixel Trader",
    description: "Application web d'affichage de jeux rétro.",
    longDescription:
      "Projet réalisé en bootcamp. L'application consomme une API REST pour afficher une liste de jeux rétro avec filtres et recherche.",
    techs: ["JavaScript", "HTML", "CSS", "API REST", "Python"],
    githubUrl:
      "https://github.com/Bootcamp-PixelTrader-2025-2026/Pixel-Trader-group-Jesse-Gabriel",
  
  },
  {
    slug: "convertisseur-de-devises",
    title: "Convertisseur de devises",
    description: "Application web de conversion de devises en temps réel.",
    longDescription:
      "Application permettant de convertir différentes devises en temps réel grâce à une API externe. L'Interface est simple et responsive.",
    techs: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/EvaBouala/Convertisseur-de-devises",
  
  },
  {
    slug: "tailwind-css-page",
    title: "Page responsive avec Tailwind CSS",
    description: "Réalisation d'une page responsive avec Tailwind CSS.",
    longDescription:
      "Projet d'entraînement visant à maîtriser Tailwind CSS pour créer une interface moderne, responsive et maintenable.",
    techs: ["HTML", "Tailwind CSS"],
    githubUrl: "https://github.com/jesselazare/TailWind-IIM-A2",

  },
];
