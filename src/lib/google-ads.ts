export const GOOGLE_ADS_TAG_ID = "AW-11021338226";
export const GOOGLE_ANALYTICS_TAG_ID = "G-4S8Z34M8KX";
export const GOOGLE_TAG_MANAGER_ID = "GTM-5RJRPNDV";

export const GOOGLE_ADS_CONVERSIONS = {
  phoneCall: "AW-11021338226/th2ACIiZ3YYYEPKMsYcp",
  contactForm: "AW-11021338226/opr1CJqZ3YYYEPKMsYcp",
  whatsappMessage: "AW-11021338226/eFIlCKCQ9qUYEPKMsYcp",
} as const;

type GtagFunction = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export function trackGoogleAdsConversion(sendTo: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
    transport_type: "beacon",
  });
}
