import { WORKING_HOURS } from "./config";

export const homeFaqs = [
  {
    question: "Apakah konsultasinya gratis?",
    answer: "Gratis. Cek polis, penawaran, dan penjelasannya tidak dipungut biaya. Kalau Anda akhirnya beli lewat saya, komisi dibayar perusahaan asuransi dan premi Anda tidak berubah.",
  },
  {
    question: "Apakah banjir otomatis dijamin?",
    answer: "Belum tentu. Ada polis yang sudah memasukkan banjir, ada yang harus ditambah. Menerobos genangan juga bisa membuat klaim ditolak. Kirim foto polisnya, saya cek bagian banjirnya.",
  },
  {
    question: "Apa bedanya All Risk dan TLO?",
    answer: "All Risk menjamin kerusakan sebagian maupun total, sesuai ketentuan polis. TLO (Total Loss Only) hanya berlaku kalau kerusakannya total, atau mobil hilang. Premi TLO lebih murah, tapi lecet dan penyok biasanya tidak ditanggung.",
  },
  {
    question: "Biaya sendiri itu apa?",
    answer: "Bagian yang Anda tanggung setiap kali klaim (di polis sering tertulis “risiko sendiri”). Misalnya Rp300 rb per kejadian, seperti di contoh balasan di atas. Besarnya berbeda tiap polis dan bisa berubah saat perpanjangan, jadi perlu dicek sebelum bayar.",
  },
  {
    question: "Sudah ada tawaran dari dealer atau bank. Masih perlu dicek?",
    answer: "Perlu, dan gratis. Kirim saja tawarannya ke saya. Saya bandingkan banjir, biaya sendiri, nilai pertanggungan, dan bengkelnya. Kalau memang sudah bagus, saya bilang bagus.",
  },
  {
    question: "Perlu KTP/STNK atau ketemu langsung?",
    answer: "Untuk konsultasi awal, belum perlu. Cukup ceritakan kebutuhannya. Jika mengirim foto polis, tutupi data yang tidak relevan. Perusahaan dapat meminta dokumen atau survei tambahan sebelum pengajuan.",
  },
  {
    question: "Kapan chat saya dibalas?",
    answer: WORKING_HOURS,
  },
  {
    question: "Bagaimana kalau terjadi keadaan darurat di jalan?",
    answer: "Utamakan keselamatan Anda, lalu langsung hubungi nomor darurat 24 jam perusahaan asuransi yang tertera di polis (misalnya untuk layanan derek atau bantuan di lokasi). Setelah situasi aman dan Anda sudah tenang, hubungi saya lewat WA untuk mulai proses pengajuan klaimnya.",
  },
  {
    question: "Kalau nanti perlu klaim, bagaimana?",
    answer: "Saya dampingi lewat WA (chat/call), dari awal sampai ada keputusan. Kirim foto kejadiannya, lalu saya bantu siapkan formulir dan pengajuan klaimnya. Setelah pengajuan masuk, saya arahkan ke bengkel rekanan terdekat di Serpong dan pantau prosesnya. Pendampingan dilakukan lewat WA, saya tidak datang ke lokasi kejadian dan tidak mengurus laporan polisi. Persetujuan dan kecepatan klaim tetap ditentukan perusahaan asuransi.",
  },
] as const;
