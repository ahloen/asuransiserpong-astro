import { SERVICE_LINKS } from "./config";

export const BLOG_CATEGORIES = ["mobil", "travel", "properti", "bisnis"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

const labels = { mobil: "Mobil", travel: "Travel", properti: "Properti", bisnis: "Bisnis" };

export const blogCategories = BLOG_CATEGORIES.map((id) => ({
  id,
  label: labels[id],
  href: `/blog/kategori/${id}`,
  service: SERVICE_LINKS.find((service) => service.key === id)!,
}));
