const getEnv = (key: string) => {
  const value = import.meta.env[key];
  return typeof value === "string" ? value.trim() : "";
};

export const company = {
  name: getEnv("NEXT_PUBLIC_COMPANY_NAME") || "ТрастГрупп Контракт",
  tagline: getEnv("NEXT_PUBLIC_COMPANY_TAGLINE") || "От доверия - к результату",
  siteUrl: getEnv("NEXT_PUBLIC_SITE_URL"),
};

export const contacts = {
  phoneDisplay: getEnv("NEXT_PUBLIC_PHONE_DISPLAY"),
  phoneHref: getEnv("NEXT_PUBLIC_PHONE_HREF"),
  email: getEnv("NEXT_PUBLIC_EMAIL"),
  city: getEnv("NEXT_PUBLIC_CITY"),
  address: getEnv("NEXT_PUBLIC_ADDRESS"),
  workingHours: getEnv("NEXT_PUBLIC_WORKING_HOURS"),
  telegram: getEnv("NEXT_PUBLIC_TELEGRAM_URL"),
  whatsapp: getEnv("NEXT_PUBLIC_WHATSAPP_URL"),
  vk: getEnv("NEXT_PUBLIC_VK_URL"),
  avito: getEnv("NEXT_PUBLIC_AVITO_URL"),
  instagram: getEnv("NEXT_PUBLIC_INSTAGRAM_URL"),
  support: getEnv("NEXT_PUBLIC_SUPPORT_URL"),
};

export const socialLinks = [
  { label: "Telegram", value: contacts.telegram },
  { label: "WhatsApp", value: contacts.whatsapp },
  { label: "VK", value: contacts.vk },
  { label: "Avito", value: contacts.avito },
  { label: "Instagram", value: contacts.instagram },
  { label: "Техподдержка", value: contacts.support },
].filter((link) => link.value);
