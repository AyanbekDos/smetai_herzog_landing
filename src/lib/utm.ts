export interface UtmPayload {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_path?: string;
}

const UTM_KEYS: Array<keyof UtmPayload> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const STORAGE_KEY = "smetai-landing-utm";

let cachedPayload: UtmPayload | null = null;

const safeSessionStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.sessionStorage;
  } catch (error) {
    console.warn("Session storage is not available", error);
    return null;
  }
};

const readStoredPayload = (): UtmPayload => {
  const storage = safeSessionStorage();
  if (!storage) {
    return {};
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    return JSON.parse(raw) as UtmPayload;
  } catch (error) {
    console.warn("Failed to parse stored UTM payload", error);
    return {};
  }
};

const persistPayload = (payload: UtmPayload) => {
  const storage = safeSessionStorage();
  if (!storage) {
    return;
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("Failed to persist UTM payload", error);
  }
};

export const captureUtmPayload = (): UtmPayload => {
  if (cachedPayload) {
    return cachedPayload;
  }

  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  const incoming: UtmPayload = {};

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      incoming[key] = value;
    }
  });

  incoming.referrer = document.referrer || "direct";
  incoming.landing_path = window.location.pathname + window.location.hash;

  const stored = readStoredPayload();
  const merged: UtmPayload = {
    ...stored,
    ...incoming,
  };

  cachedPayload = merged;
  persistPayload(merged);

  return merged;
};
