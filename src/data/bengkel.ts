import bengkelJson from "./bengkel.json";

export type Bengkel = (typeof bengkelJson)[number];

export const BENGKEL = bengkelJson;

export const TANGERANG_RAYA_CITIES: string[] = [
  "Kota Tangerang Selatan",
  "Kota Tangerang",
  "Kab. Tangerang",
];

export const DKI_JAKARTA_CITIES: string[] = [
  "Jakarta Selatan",
  "Jakarta Barat",
  "Jakarta Pusat",
  "Jakarta Timur",
  "Jakarta Utara",
];

export const KATEGORI_LABEL: Record<string, string> = {
  Authorized: "Bengkel resmi",
  Umum: "Bengkel umum",
  Spesialis: "Spesialis",
};

export const ASURANSI_LABEL: Record<string, string> = {
  "Asuransi Astra (Garda Oto)": "Garda Oto",
  "Zurich Syariah": "Zurich Syariah",
  Sinarmas: "Sinarmas",
  ACA: "ACA",
};

export const BENGKEL_TANGERANG = BENGKEL.filter((b) => TANGERANG_RAYA_CITIES.includes(b.wilayah));
export const BENGKEL_JAKARTA = BENGKEL.filter((b) => DKI_JAKARTA_CITIES.includes(b.wilayah));

export const BENGKEL_RELEVAN = [...BENGKEL_TANGERANG, ...BENGKEL_JAKARTA];
