import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Chi sono",
    hash: "#about",
  },
  {
    name: "Servizi",
    hash: "#services",
  },
  {
    name: "Progetti",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Esperienze",
    hash: "#experience",
  },
  {
    name: "Contattami",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Developer",
    location: "Piazza Armerina, Sicilia, Italia (Remote)",
    description:
      "Gestione di database relazionali con MySQL, automazione con Python e Go, pubblicazione su marketplace europei. Coordinamento di microservizi e web app distribuiti con Docker.",
    icon: React.createElement(CgWorkAlt),
    date: "gen 2023 - oggi",
  },
  {
    title: "Formatore di software",
    location: "Ibrida",
    description:
      "Formazione su Angular per lo sviluppo di app web e su Three.js per modelli 3D interattivi. Ho insegnato a un team di sviluppatori in ambito enterprise.",
    icon: React.createElement(CgWorkAlt),
    date: "nov 2022 - dic 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Canicattì, Sicilia, Italia",
    description:
      "Gestione di un e-commerce Prestashop e sviluppo di script di automazione del catalogo. Utilizzo di VueJS, Tailwind, SQL e AWS Lambda.",
    icon: React.createElement(FaReact),
    date: "ott 2021 - ott 2022",
  },
  {
    title: "Mobile Developer",
    location: "Adrano",
    description:
      "Sviluppo di app Flutter multipiattaforma e siti web WordPress. Creazione di componenti custom in VueJS e React per media e radio online.",
    icon: React.createElement(FaReact),
    date: "apr 2021 - set 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Canicattì",
    description:
      "Gestione e sviluppo e-commerce Prestashop. Automazione del catalogo prodotti e script di gestione.",
    icon: React.createElement(CgWorkAlt),
    date: "gen 2017 - set 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Canicattì",
    description:
      "Sviluppo di gestionali desktop con JavaFX e C++ (Qt SDK). Sviluppo di moduli custom per Prestashop.",
    icon: React.createElement(CgWorkAlt),
    date: "apr 2014 - dic 2016",
  },
  {
    title: "Segretario amministrativo",
    location: "Adrano",
    description:
      "Gestione dell'archivio informatico dei pazienti presso uno studio professionale.",
    icon: React.createElement(CgWorkAlt),
    date: "nov 2013 - apr 2014",
  },
  {
    title: "Diploma di istruzione superiore",
    location: "Belpasso",
    description:
      "Formazione in informatica e telecomunicazioni",
    icon: React.createElement(LuGraduationCap),
    date: "set 2008 - ago 2013",
  },
] as const;

export const projectsData = [
  {
    title: "Critto Util",
    description:
      "Applicazione Android demo realizzata con Flutter.",
    tags: ["Flutter"],

    link: "https://github.com/jonathanlamela/flutter-crittoutil"
  },
  {
    title: "Tonerfast24",
    description:
      "Piattaforma e-commerce sviluppata con PrestaShop per la vendita di consumabili per stampanti. Ho curato sia la gestione tecnica che l'automazione del catalogo.",
    tags: ["PrestaShop", "SQL", "VueJS", "Tailwind", "AWS Lambda"],
    link: "https://www.tonerfast24.it"
  },
  {
    title: "LDC Tech",
    description:
      "Portale aziendale sviluppato per LDC Tech, include sezioni dinamiche e backend personalizzato per la gestione dei contenuti.",
    tags: ["PHP", "MySQL", "Tailwind", "Docker", "Go"],
    link: "https://www.ldc.it"
  },
  {
    title: "4Deco",
    description:
      "Sito web vetrina per un brand di arredamento. Responsive design, animazioni moderne e contenuti gestibili facilmente dal cliente.",
    tags: ["PHP", "MySQL", "Tailwind", "Docker", "Go"],
    link: "https://www.4deco.it"
  },
  {
    title: "iMusicFun",
    description:
      "Portale dedicato alla musica pop e al mondo dello spettacolo. Ho contribuito allo sviluppo frontend con componenti personalizzati.",
    tags: ["WordPress", "Tailwind", "React", "VueJS"],
    link: "https://www.imusicfun.it"
  },
  {
    title: "Radio Flash",
    description:
      "Sito per una radio locale con player audio, programmazione, podcast e area news. Realizzato con un CMS custom e integrazione social.",
    tags: ["React", "Tailwind", "WordPress", "Flutter"],
    link: "https://www.radioflash.fm"
  },
] as const;

export const skillsData = [
  "Python",
  "C#",
  "Go",
  "Java",
  "C++",
  "Rust",
  "Visual Basic",
  "Ruby",
  "Laravel",
  "Spring Boot",
  "Tailwind",
  "Flutter",
  "Docker",
  "Kubernetes",
  "VueJs",
  "Angular",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Wordpress",
  "Prestashop",
  "Node.JS"
] as const;
