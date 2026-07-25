/** Google Ads account tag ID (global site tag). */
export const GOOGLE_ADS_ID = "AW-16485934120";

/** Page view conversion — from Google Ads event snippet. */
export const GOOGLE_ADS_CONVERSION_SEND_TO = "AW-16485934120/gUF8CKLm_JkZEKjIjbU9";

/** Thank-you page path after successful registration. */
export const GOOGLE_ADS_LEAD_THANK_YOU_PATH = "/thank-you";

export function trackLeadConversion(source?: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "generate_lead", {
    currency: "CAD",
    lead_source: source ?? "registration",
  });

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "CAD",
  });
}
