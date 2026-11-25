import type { CollectionEntry } from "astro:content";
import { SERVICE_LINKS } from "./config";

export const BLOG_CATEGORIES = ["mobil", "travel", "properti", "bisnis"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

const labels = { mobil: "Mobil", travel: "Travel", properti: "Properti", bisnis: "Bisnis" };

/** Urutan default blog: terbaru dulu berdasarkan `date`; `order` hanya penentu seri. */
const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, mei: 4, may: 4, jun: 5, jul: 6,
  agu: 7, ags: 7, aug: 7, sep: 8, sept: 8, okt: 9, oct: 9, nov: 10, des: 11, dec: 11,
};

export function postTime(post: Pick<CollectionEntry<"blog">, "data">): number {
  const raw = post.data.date?.trim() ?? "";
  const m = raw.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (m) {
    const month = MONTHS[m[2].toLocaleLowerCase("id")];
    if (month !== undefined) return Date.UTC(Number(m[3]), month, Number(m[1]));
  }
  const t = Date.parse(raw);
  return Number.isNaN(t) ? 0 : t;
}

export function sortBlogNewest(
  a: Pick<CollectionEntry<"blog">, "data" | "id">,
  b: Pick<CollectionEntry<"blog">, "data" | "id">,
): number {
  const dt = postTime(b) - postTime(a);
  if (dt !== 0) return dt;
  const order = (a.data.order ?? 99) - (b.data.order ?? 99);
  if (order !== 0) return order;
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}

export const blogCategories = BLOG_CATEGORIES.map((id) => ({
  id,
  label: labels[id],
  href: `/blog/kategori/${id}`,
  service: SERVICE_LINKS.find((service) => service.key === id)!,
}));
