/**
 * Nomor WhatsApp Aditya (AsuransiSerpong). Dua nilai ini harus nomor yang SAMA:
 * - WA_NUMBER: format internasional tanpa "+" dan tanpa spasi (dipakai link wa.me & QR).
 * - WA_NUMBER_DISPLAY: format yang ditampilkan dan disalin di pop-up desktop.
 */
export const WA_NUMBER = "628170826886";
export const WA_NUMBER_DISPLAY = "0817-0826-886";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

/** QR untuk pop-up desktop: mengarah ke URL wa.me lengkap beserta pesan prefill-nya. */
export const qrLink = (waUrl: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(waUrl)}`;

/**
 * Pesan pembuka WA — tiap tombol sengaja berbeda supaya Aditya tahu
 * dari bagian mana pengunjung datang.
 */
export const MESSAGES = {
  /** Header */
  header: "Halo Aditya, saya ingin bertanya soal asuransi. Bisa dibantu?",
  /** Hero */
  banjir: "Halo Aditya, polis mobil saya mau habis. Banjir ikut dijamin atau tidak ya?",
  /** Sticky bar mobile */
  sticky: "Halo Aditya, saya ingin bertanya soal asuransi. Bisa dibantu?",
  /** Di bawah contoh balasan */
  contoh: "Halo Aditya, saya ingin minta penawaran asuransi mobil. Data mobil dan wilayah pelat bisa saya kirim setelah ini.",
  /** Sudah punya tawaran dealer/bank */
  dealer: "Halo Aditya, saya sudah dapat penawaran asuransi dari dealer atau bank. Bisa bantu cek manfaat, biaya sendiri, dan pilihan bengkelnya? Penawarannya saya kirim setelah ini.",
  /** Setelah 3 kartu risiko */
  cekTiga: "Halo Aditya, saya mau minta cek polis mobil saya (fotonya saya kirim setelah ini). Tolong cek: banjir, masa berlaku all risk, dan bengkel rekanannya.",
  mobil: "Halo Aditya, saya ingin minta estimasi premi asuransi mobil. Data mobil dan wilayah pelat bisa saya kirim setelah ini.",
  properti: "Halo Aditya, saya ingin cek estimasi premi asuransi properti. Jenis bangunan dan area lokasinya bisa saya kirim setelah ini.",
  travel: "Halo Aditya, saya ingin cek premi asuransi perjalanan. Tujuan, tanggal berangkat dan pulang, serta jumlah peserta bisa saya kirim setelah ini.",
  travelVisa: "Halo Aditya, saya sedang menyiapkan pengajuan visa Schengen. Bisa bantu cek pilihan polis dan dokumennya sesuai persyaratan visa saya?",
  bisnis: "Halo Aditya, saya ingin berkonsultasi tentang asuransi bisnis. Saya bisa ceritakan jenis usaha dan perlindungan yang saya butuhkan.",
  /** Dari bagian profil */
  profil: "Halo Aditya, saya mau tanya-tanya dulu soal asuransi.",
  /** Dari FAQ */
  faq: "Halo Aditya, saya punya pertanyaan yang belum tercantum di FAQ. Bisa dibantu?",
  /** CTA penutup */
  penutup: "Halo Aditya, saya ingin cek apakah polis mobil saya mencakup banjir, berapa biaya sendiri, dan bengkel mana yang bisa dipilih.",
  /** Chip di kartu mobil */
  allRisk: "Halo Aditya, bedanya All Risk dan TLO apa ya? Mana yang cocok untuk mobil saya?",
  cakupan: "Halo Aditya, di asuransi mobil all risk, apa saja yang tercakup dan tidak?",
  derek: "Halo Aditya, asuransi mobil yang sudah termasuk derek dan road assistance itu yang mana ya?",
  bengkel: "Halo Aditya, bengkel rekanan terdekat di area saya ada di mana? Saya bisa kirim nama area atau lokasi setelah ini.",
} as const;

/**
 * Social proof: pakai angka & testimoni yang ASLI (dengan izin klien).
 * Jangan tampilkan foto/avatar stok. Ganti dengan foto klien yang sudah memberi izin.
 */
export const SOCIAL_PROOF = {
  count: "140+",
  countLabel: "pemilik mobil di Serpong sudah dibantu cek polisnya",
  testimonial: {
    quote: "Ternyata polis lama saya belum termasuk banjir. Untung dicek sebelum perpanjang.",
    name: "Bu Rina",
    detail: "Xpander · BSD",
  },
} as const;

/** Daftar nomor darurat */
export const EMERGENCY_NUMBER_LINKS = {
  zurich: "/nomor-darurat-zurich",
  aca: "/nomor-darurat-aca",
  gardaOto: "/nomor-darurat-garda-oto",
} as const;

/** Tautan langsung di header; layanan tampil sebagai dropdown tersendiri. */
export const TOP_LINKS = {
  artikel: { href: "/blog", label: "Artikel" },
} as const;

/** Sub-menu Layanan: masing-masing ke halaman produknya. */
export const SERVICE_LINKS = [
  { key: "mobil", href: "/asuransi-mobil", label: "Asuransi Mobil" },
  { key: "properti", href: "/asuransi-properti", label: "Asuransi Properti" },
  { key: "travel", href: "/asuransi-travel", label: "Asuransi Perjalanan" },
  { key: "bisnis", href: "/asuransi-bisnis", label: "Asuransi Bisnis" },
] as const;

/** Tautan informasi umum di footer; tautan section khusus homepage tidak ditampilkan global. */
export const FOOTER_LINKS = [
  { href: "/#tentang", label: "Siapa di balik ini" },
] as const;

export const BLOG_LINK = { href: "/blog", label: "Artikel" } as const;

export const WORKING_HOURS =
  "Jam kerja: Senin sampai Jumat 09.00 sampai 18.00, Sabtu 09.00 sampai 14.00. Chat di luar jam itu tetap boleh, saya balas pada jam kerja berikutnya.";

/** Versi ringkas untuk hero, CTA penutup, dan bawah tombol. */
export const RESPONSE_TIME =
  "Dibalas langsung oleh Aditya, maks. 1–2 jam kerja (Senin–Sabtu).";
