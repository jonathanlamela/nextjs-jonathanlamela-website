"use client";

import { IS_GTM_ENABLED } from "./config.tracking";

const logGAWarning = (message: string) => {
    console.warn(message);
};

const getGtag = () => {
    if (!IS_GTM_ENABLED) {
        logGAWarning("Google Analytics is not enabled");
        return null;
    }
    if (!window.gtag) {
        logGAWarning(`GTag does not exist`);
        throw new Error("GTag does not exist");
    }
    return window.gtag;
};

export const grantConsentForEverything = () => {
    const gtag = getGtag();
    if (!gtag) return;
    gtag("consent", "update", {
        analytics_storage: "granted",
    });
};

export const markFeatureUsage = (feature: string) => {
    performance.mark("mark_feature_usage", {
        detail: { feature },
    });
};

