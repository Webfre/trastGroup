const getEnv = (key: string) => {
  const value = import.meta.env[key];
  return typeof value === "string" ? value.trim() : "";
};

const defaults = {
  companyName: "ООО \"ТрастГрупп Контракт\"",
  companyTagline: "От доверия - к результату",
  phoneDisplay: "+7(902)282-74-50",
  phoneHref: "tel:+79022827450",
  email: "tgcontract@yandex.ru",
  city: "г. Санкт-Петербург",
  telegram: "https://t.me/trustgroupcontract",
  whatsapp: "https://wa.me/79000000000",
  vk: "https://vk.com/trastgroupcontract",
  instagram: "https://instagram.com/trastgroupcontract",
};

export const company = {
  name: getEnv("NEXT_PUBLIC_COMPANY_NAME") || defaults.companyName,
  tagline: getEnv("NEXT_PUBLIC_COMPANY_TAGLINE") || defaults.companyTagline,
  siteUrl: getEnv("NEXT_PUBLIC_SITE_URL"),
};

export const contacts = {
  phoneDisplay: getEnv("NEXT_PUBLIC_PHONE_DISPLAY") || defaults.phoneDisplay,
  phoneHref: getEnv("NEXT_PUBLIC_PHONE_HREF") || defaults.phoneHref,
  email: getEnv("NEXT_PUBLIC_EMAIL") || defaults.email,
  city: getEnv("NEXT_PUBLIC_CITY") || defaults.city,
  address: getEnv("NEXT_PUBLIC_ADDRESS"),
  workingHours: getEnv("NEXT_PUBLIC_WORKING_HOURS"),
  telegram: getEnv("NEXT_PUBLIC_TELEGRAM_URL") || defaults.telegram,
  whatsapp: getEnv("NEXT_PUBLIC_WHATSAPP_URL") || defaults.whatsapp,
  vk: getEnv("NEXT_PUBLIC_VK_URL") || defaults.vk,
  instagram: getEnv("NEXT_PUBLIC_INSTAGRAM_URL") || defaults.instagram,
  support: getEnv("NEXT_PUBLIC_SUPPORT_URL"),
};

export const socialLinks = [
  { label: "Telegram", value: contacts.telegram },
  { label: "WhatsApp", value: contacts.whatsapp },
  { label: "VK", value: contacts.vk },
  { label: "Instagram", value: contacts.instagram },
  { label: "Техподдержка", value: contacts.support },
].filter((link) => link.value);
