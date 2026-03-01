"use client";

import { ArrowLeft, Calendar, Clock, Lightbulb, Target, Zap, Brain, FileQuestion, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cara Membuat Soal Ujian Online yang Efektif dan Berkualitas 2026",
  description: "Panduan lengkap membuat soal ujian online berkualitas. Tips menulis soal pilihan ganda, essay, dan menggunakan AI untuk generate soal ujian CBT yang efektif.",
  keywords: [
    "cara membuat soal ujian online",
    "membuat soal CBT",
    "tips membuat soal ujian",
    "soal ujian berkualitas",
    "AI generate soal",
    "bank soal online",
    "menulis soal pilihan ganda",
    "soal essay online",
  ],
  openGraph: {
    title: "Cara Membuat Soal Ujian Online yang Efektif dan Berkualitas",
    description: "Panduan lengkap membuat soal ujian online berkualitas dengan tips praktis dan best practices.",
    url: "https://nilai.online/blog/cara-membuat-soal-ujian-online",
    type: "article",
    publishedTime: "2026-03-01T00:00:00.000Z",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              1 Maret 2026
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              10 menit baca
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cara Membuat Soal Ujian Online yang Efektif dan Berkualitas
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Membuat soal ujian online yang berkualitas adalah kunci kesuksesan CBT. Pelajari teknik menulis soal yang efektif, tips menggunakan AI, dan best practices dari guru-guru berpengalaman.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
            <h3 className="text-lg font-semibold text-orange-900 mb-2 mt-0">Kenapa Kualitas Soal Penting?</h3>
            <p className="text-orange-800 mb-0">
              Soal ujian yang berkualitas tidak hanya mengukur pemahaman siswa dengan akurat, tapi juga mendorong pembelajaran yang lebih mendalam. Soal yang buruk justru bisa misleading dan menurunkan motivasi belajar.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-orange-500" />
            Prinsip Dasar Soal Ujian Berkualitas
          </h2>
          
          <p>
            Sebelum mulai membuat soal, pahami dulu 5 prinsip fundamental soal ujian yang baik:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong className="text-gray-900">Valid</strong> - Soal mengukur apa yang seharusnya diukur sesuai tujuan pembelajaran
              </li>
              <li>
                <strong className="text-gray-900">Reliabel</strong> - Hasil konsisten jika diujikan berulang kali
              </li>
              <li>
                <strong className="text-gray-900">Objektif</strong> - Tidak bias dan dapat dinilai secara konsisten
              </li>
              <li>
                <strong className="text-gray-900">Praktis</strong> - Mudah dibuat, dikelola, dan dinilai
              </li>
              <li>
                <strong className="text-gray-900">Diskriminatif</strong> - Bisa membedakan siswa yang paham dan tidak paham
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <FileQuestion className="w-8 h-8 text-orange-500" />
            Cara Membuat Soal Pilihan Ganda yang Efektif
          </h2>

          <p>
            Soal pilihan ganda adalah tipe paling populer dalam ujian online karena bisa auto-grading. Berikut cara membuatnya dengan benar:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Tulis Stem (Pertanyaan) yang Jelas</h3>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <strong className="text-red-900">❌ Contoh Buruk:</strong>
              </div>
              <p className="text-red-800 text-sm mb-0">
                "Fotosintesis adalah..."
              </p>
              <p className="text-xs text-red-600 mt-2 mb-0">
                Terlalu umum dan tidak spesifik
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <strong className="text-green-900">✅ Contoh Baik:</strong>
              </div>
              <p className="text-green-800 text-sm mb-0">
                "Proses fotosintesis menghasilkan zat apa yang dilepaskan ke udara?"
              </p>
              <p className="text-xs text-green-600 mt-2 mb-0">
                Spesifik dan langsung ke poin
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Buat Distractor (Pengecoh) yang Masuk Akal</h3>
          
          <p>
            Distractor adalah pilihan jawaban yang salah tapi terlihat masuk akal. Jangan membuat distractor yang terlalu jelas salah:
          </p>

          <div className="bg-gray-50 p-5 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Contoh Soal dengan Distractor Baik:</p>
            <p className="text-gray-800 mb-3">
              <strong>Soal:</strong> Ibu kota Indonesia sebelum Jakarta adalah...
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>A. Bandung</li>
              <li>B. Yogyakarta ✓ (Jawaban benar)</li>
              <li>C. Surabaya</li>
              <li>D. Semarang</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3 mb-0">
              Semua pilihan adalah kota besar di Jawa, membuat siswa harus benar-benar tahu jawabannya.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Hindari Pola Jawaban yang Dapat Ditebak</h3>
          
          <ul className="space-y-2">
            <li>❌ Jangan selalu menempatkan jawaban benar di pilihan C</li>
            <li>❌ Hindari membuat jawaban benar selalu yang paling panjang</li>
            <li>❌ Jangan gunakan kata "selalu" atau "tidak pernah" di pilihan salah</li>
            <li>✅ Randomize posisi jawaban benar</li>
            <li>✅ Buat semua pilihan panjangnya seimbang</li>
          </ul>

          <p>
            Platform seperti <a href="https://nilai.online" className="text-orange-500 hover:text-orange-600 font-medium">nilai.online</a> memiliki fitur randomize otomatis untuk mengacak urutan pilihan jawaban setiap siswa.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-orange-500" />
            Membuat Soal Essay yang Efektif
          </h2>

          <p>
            Soal essay mengukur kemampuan berpikir kritis dan analisis siswa. Tips membuatnya:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Gunakan Kata Kerja Operasional yang Jelas</h3>
          
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-blue-900 mb-3">Kata Kerja Berdasarkan Level Kognitif:</p>
            <ul className="space-y-2 text-blue-800">
              <li><strong>C1 (Mengingat):</strong> Sebutkan, tuliskan, identifikasi</li>
              <li><strong>C2 (Memahami):</strong> Jelaskan, uraikan, bandingkan</li>
              <li><strong>C3 (Menerapkan):</strong> Terapkan, gunakan, demonstrasikan</li>
              <li><strong>C4 (Menganalisis):</strong> Analisis, bedakan, kategorikan</li>
              <li><strong>C5 (Mengevaluasi):</strong> Evaluasi, kritisi, berikan pendapat</li>
              <li><strong>C6 (Mencipta):</strong> Rancang, ciptakan, kembangkan</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Sediakan Rubrik Penilaian</h3>
          
          <p>
            Buat rubrik penilaian yang jelas agar koreksi objektif dan konsisten:
          </p>

          <div className="bg-gray-50 p-5 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Contoh Rubrik Essay (Skor 0-10):</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>9-10:</strong> Jawaban lengkap, analisis mendalam, contoh relevan</li>
              <li><strong>7-8:</strong> Jawaban baik, analisis cukup, ada contoh</li>
              <li><strong>5-6:</strong> Jawaban cukup, analisis kurang, contoh minimal</li>
              <li><strong>3-4:</strong> Jawaban kurang lengkap, tanpa analisis</li>
              <li><strong>0-2:</strong> Jawaban tidak relevan atau kosong</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Brain className="w-8 h-8 text-orange-500" />
            Menggunakan AI untuk Generate Soal
          </h2>

          <p>
            Di era 2026, AI telah menjadi asisten powerful untuk membuat soal ujian. Berikut cara memanfaatkannya:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Keuntungan AI Generate Soal:</h3>
          
          <ul className="space-y-2">
            <li>⚡ <strong>Hemat waktu</strong> - Buat puluhan soal dalam hitungan menit</li>
            <li>🎯 <strong>Variasi tinggi</strong> - AI bisa generate berbagai variasi soal dari satu topik</li>
            <li>📚 <strong>Sesuai kurikulum</strong> - AI dilatih dengan standar kurikulum Indonesia</li>
            <li>✅ <strong>Lengkap dengan kunci</strong> - Jawaban dan pembahasan otomatis tersedia</li>
          </ul>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 p-6 rounded-lg my-8">
            <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Cara Menggunakan AI Generate Soal di nilai.online:
            </h4>
            <ol className="space-y-2 text-purple-800">
              <li>1. Pilih mata pelajaran dan tingkat kelas</li>
              <li>2. Deskripsikan materi yang ingin diujikan (contoh: "Sistem Pernapasan Manusia kelas 8")</li>
              <li>3. Tentukan jumlah soal dan tipe (pilihan ganda/essay)</li>
              <li>4. AI akan generate soal lengkap dengan kunci jawaban</li>
              <li>5. Review dan edit jika perlu, lalu simpan ke bank soal</li>
            </ol>
          </div>

          <p>
            Fitur <strong>AI Generate Soal</strong> di <a href="https://nilai.online" className="text-orange-500 hover:text-orange-600 font-medium">nilai.online</a> menggunakan teknologi GPT-4 yang telah disesuaikan dengan kurikulum Indonesia.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-orange-500" />
            Checklist Kualitas Soal
          </h2>

          <p>
            Sebelum menggunakan soal untuk ujian, pastikan lolos checklist ini:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-gray-900 mb-4">✓ Checklist Soal Berkualitas:</h4>
            <ul className="space-y-2">
              <li>☑ Soal sesuai dengan indikator pembelajaran</li>
              <li>☑ Bahasa jelas, tidak ambigu, dan sesuai level siswa</li>
              <li>☑ Tidak ada petunjuk ke jawaban benar (clue)</li>
              <li>☑ Pilihan jawaban homogen dan masuk akal</li>
              <li>☑ Tidak ada soal yang jawabannya ada di soal lain</li>
              <li>☑ Tingkat kesulitan bervariasi (mudah, sedang, sulit)</li>
              <li>☑ Sudah direview oleh guru lain</li>
              <li>☑ Diuji coba pada sampel siswa jika memungkinkan</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mengelola Bank Soal</h2>

          <p>
            Bank soal yang terorganisir dengan baik akan sangat membantu efisiensi jangka panjang:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Tips Mengelola Bank Soal:</h3>
          
          <ul className="space-y-2">
            <li><strong>Kategorisasi jelas</strong> - Kelompokkan per mata pelajaran, bab, dan tingkat kesulitan</li>
            <li><strong>Tag dengan metadata</strong> - Tambahkan tag seperti "HOTS", "Literasi", "Numerasi"</li>
            <li><strong>Update berkala</strong> - Review dan update soal setiap semester</li>
            <li><strong>Kolaborasi tim</strong> - Biarkan guru lain contribute dan review</li>
            <li><strong>Analisis performa</strong> - Lihat statistik soal mana yang terlalu mudah/sulit</li>
          </ul>

          <p>
            Platform <a href="https://nilai.online" className="text-orange-500 hover:text-orange-600 font-medium">nilai.online</a> menyediakan fitur bank soal dengan sistem tagging, pencarian advanced, dan analitik per soal.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tipe Soal Lain yang Bisa Digunakan</h2>

          <p>
            Selain pilihan ganda dan essay, variasikan dengan tipe soal lain:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Isian Singkat</h4>
              <p className="text-sm text-gray-600 mb-0">
                Siswa mengisi jawaban pendek (1-3 kata). Cocok untuk fakta, rumus, atau istilah.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Benar/Salah</h4>
              <p className="text-sm text-gray-600 mb-0">
                Siswa menentukan pernyataan benar atau salah. Efisien untuk cakupan materi luas.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Menjodohkan</h4>
              <p className="text-sm text-gray-600 mb-0">
                Mencocokkan item dari dua kolom. Baik untuk menguji hubungan antar konsep.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Urutan</h4>
              <p className="text-sm text-gray-600 mb-0">
                Menyusun item dalam urutan yang benar. Cocok untuk prosedur atau kronologi.
              </p>
            </div>
          </div>

          <p>
            Semua tipe soal ini tersedia di <a href="https://nilai.online" className="text-orange-500 hover:text-orange-600 font-medium">nilai.online</a> dengan auto-grading otomatis.
          </p>

          <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg my-8">
            <h4 className="font-semibold text-orange-900 mb-3">💡 Pro Tips dari Guru Berpengalaman:</h4>
            <ul className="space-y-2 text-orange-800">
              <li>• Buat soal lebih banyak dari yang dibutuhkan, lalu pilih yang terbaik</li>
              <li>• Gunakan gambar/diagram untuk soal yang membutuhkan visualisasi</li>
              <li>• Hindari double negative dalam pertanyaan (membingungkan)</li>
              <li>• Test soal pada rekan guru sebelum digunakan untuk siswa</li>
              <li>• Simpan soal yang bagus untuk digunakan tahun depan</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kesimpulan</h2>

          <p>
            Membuat soal ujian online yang berkualitas membutuhkan skill dan latihan. Dengan mengikuti prinsip-prinsip di atas, soal Anda akan lebih valid, reliabel, dan efektif mengukur pemahaman siswa.
          </p>

          <p>
            Manfaatkan teknologi seperti AI generate soal untuk efisiensi, tapi tetap review dan sesuaikan dengan konteks kelas Anda. Bank soal yang terkelola baik akan menjadi aset berharga untuk pembelajaran jangka panjang.
          </p>

          <p className="font-medium">
            Siap membuat soal ujian online berkualitas? <a href="https://app.nilai.online/register" className="text-orange-500 hover:text-orange-600 font-semibold">Coba nilai.online gratis</a> dengan fitur AI Generate Soal dan Bank Soal unlimited.
          </p>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-xl my-12">
            <h3 className="text-2xl font-bold mb-3">Buat Soal Ujian dengan AI</h3>
            <p className="mb-6 text-orange-50">
              Hemat waktu hingga 80% dengan fitur AI Generate Soal di nilai.online. Buat soal berkualitas dalam hitungan menit, lengkap dengan kunci jawaban dan pembahasan.
            </p>
            <a 
              href="https://app.nilai.online/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
            >
              Coba Gratis 10 Hari
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">Artikel Terkait:</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blog/panduan-ujian-online-sekolah" className="text-orange-500 hover:text-orange-600 font-medium">
                → Panduan Lengkap Ujian Online untuk Sekolah 2026
              </a>
            </li>
            <li>
              <a href="/blog/keuntungan-cbt-sekolah-modern" className="text-orange-500 hover:text-orange-600 font-medium">
                → 10 Keuntungan CBT untuk Sekolah Modern di Era Digital
              </a>
            </li>
            <li>
              <a href="https://www.kemdikbud.go.id" className="text-orange-500 hover:text-orange-600 font-medium" target="_blank" rel="noopener noreferrer">
                → Standar Penilaian Kurikulum Merdeka - Kemdikbud
              </a>
            </li>
          </ul>
        </div>
      </article>

      <footer className="border-t bg-gray-50 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">
            © 2026 <a href="https://nilai.online" className="text-orange-500 hover:text-orange-600">nilai.online</a> - Platform Ujian Online Terbaik untuk Sekolah Indonesia
          </p>
        </div>
      </footer>
    </div>
  );
}
