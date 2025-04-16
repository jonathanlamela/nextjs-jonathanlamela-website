"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Chi sono");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Chi sono</SectionHeading>
      <p className="mb-3">Ciao, sono Jonathan, uno sviluppatore full-stack con la passione per la creazione di soluzioni innovative.</p>
      <p className="mb-3">🛠️ Il mio percorso nel mondo della programmazione è iniziato con Visual Basic e C++. Successivamente ho imparato durante il mio percorso di studi Java, PHP, SQL. La mia curiosità per i vari linguaggi e framework mi ha spinto a voler esplorare altri mondi come Python, C#, Ruby, Golang, Rust, TypeScript/JavaScript.</p>
      <p className="mb-3">💻 Dopo gli studi ho iniziati i miei primi lavori sviluppando siti web in Joomla e Wordpress. Principalmente negli anni mi sono occupato dello sviluppo di e-commerce con Prestashop e lo sviluppo di automazioni e script in Python e Golang che è diventato il mio linguaggio preferito.</p>
      <p className="mb-3">🚀 Nel corso degli anni, ho affinato le mie competenze nello sviluppo di applicazioni web e mobile, acquisendo conoscendo di framework come React, Angular, Vue, Next.js, oltre allo sviluppo mobile con Dart e Flutter.</p>
      <p className="mb-3">📊 La mia esperienza si estende alla creazione di solidi sistemi di gestione web-based utilizzando framework come Django, Laravel e .NET. Tuttavia, non sono un fan di un unico stack tecnologico; preferisco invece imparare continuamente e adattarmi a nuovi strumenti e metodologie.</p>
      <p className="mb-3">🛒 Negli ultimi anni, mi sono dedicato allo sviluppo e-commerce, sfruttando piattaforme come PrestaShop per creare store online performanti e ottimizzare l&apos;esperienza di acquisto digitale.</p>
      <p className="mb-3">🔍 Sono fermamente convinto che il valore di un grande sviluppatore non risieda nel numero di linguaggi o framework che conosce, ma nella capacità di utilizzare efficacemente gli strumenti a sua disposizione per risolvere problemi reali.</p>


    </motion.section >
  );
}
