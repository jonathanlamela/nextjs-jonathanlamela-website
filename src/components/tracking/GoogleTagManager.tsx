'use client'

import { Suspense, useEffect, useState } from 'react'
import { getCookieConsentValue } from 'react-cookie-consent'
import { GoogleTagManagerScripts } from './GoogleTagManagerScripts'
import { trackingConfig } from '@/src/config.tracking'
import { grantConsentForEverything } from '@/src/util.tracking'

export const GoogleTagManager = () => {
    const [isGtagLoaded, setIsGtagLoaded] = useState(false)
    const [hasSetConsent, setHasSetConsent] = useState(false)

    // Handle Consent
    useEffect(() => {
        if (isGtagLoaded && !hasSetConsent) {

            console.log(trackingConfig)
            // Get historic consent value
            const consent = getCookieConsentValue(
                trackingConfig.cookieBannerCookieName
            )


            if (consent === 'true') {
                grantConsentForEverything()
            }

            setHasSetConsent(true)
        }
    }, [isGtagLoaded, hasSetConsent])

    return (
        <>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${trackingConfig.gtmId}`}
                    height="0"
                    width="0"
                    style={{
                        display: 'none',
                        visibility: 'hidden',
                    }}
                ></iframe>
            </noscript>

            <Suspense>
                <GoogleTagManagerScripts
                    gaId={trackingConfig.gtmId}
                    onLoadCallback={() => setIsGtagLoaded(true)}
                />
            </Suspense>
        </>
    )
}
