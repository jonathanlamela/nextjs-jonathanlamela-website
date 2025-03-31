'use client';
import { trackingConfig } from "@/src/config.tracking";
import { grantConsentForEverything } from "@/src/util.tracking";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { CookieConsent } from "react-cookie-consent";


const CookieConsentBanner = () => {

    return <>
        <motion.div
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-x-0 bottom-0 z-50"
        >
            <CookieConsent
                disableStyles={true}
                cookieName={trackingConfig.cookieBannerCookieName}
                buttonText="Ok, concedo il consenso"
                onAccept={grantConsentForEverything}
                location="bottom"
                containerClasses="w-full px-6 py-4 bg-black text-white text-center flex justify-center items-center flex-wrap shadow gap-3 md:gap-8 shadow"
                buttonClasses="px-8 py-1.5 text-lg inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-black hover:bg-white/90 transition-colors ease-in-out duration-100"
            >
                <p>Quetso sito web fa uso di cookie per scopi statistici.</p>
                <Link className="btn btn-link" href={"/privacy-policy/web"}>Maggiori informazioni qui</Link>
            </CookieConsent>
        </motion.div >

    </>
};

export default CookieConsentBanner;
