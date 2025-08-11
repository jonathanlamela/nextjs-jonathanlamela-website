"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contattami");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]  text-center  dark:bg-black p-4 rounded-4xl"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading >Contattami</SectionHeading>

      <div className="flex flex-col space-y-4">
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Contattami all&apos;indirizzo email{" "}
          <a className="underline" href="mailto:info@jonathanlamela.it">
            info@jonathanlamela.it
          </a>{" "}
        </p>
        <p>
          <a className="btn btn-lg btn-secondary p-4" href="https://calendly.com/jonathan-la-mela/30min" target="_blank">
            Prenota un call gratuita di 15 minuti
          </a>
        </p>
      </div>
    </motion.section>
  );
}
