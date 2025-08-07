"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsArrowRight } from "react-icons/bs";

export default function Services() {
  const { ref } = useSectionInView("Servizi");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="services"
    >
      <SectionHeading>I miei servizi</SectionHeading>
      <ul>
        <li>Consulenza e sviluppo software personalizzato</li>
        <li>Creazione di applicazioni web, desktop e mobile</li>
        <li>Formazione e supporto tecnico</li>
      </ul>
      <div className="flex justify-center">
        <Link
          href="#contact"
          className="mt-4 bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contattami");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contattami{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </div>

    </motion.section >
  );
}
