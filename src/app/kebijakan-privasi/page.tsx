import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan Privasi platform ujian online nilai.online",
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-7 h-7">
              <Image src="/icon/logo-no-bg-png-blue.png" alt="nilai.online" fill className="object-contain" priority />
            </div>
            <span className="text-sm font-bold tracking-tight text-gray-900">
              nilai<span className="text-[#F97316]">.online</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            &larr; Kembali
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Kebijakan Privasi</h1>
        <p className="text-sm text-gray-400 mb-10">Terakhir diperbarui: 21 Februari 2026</p>

        <div className="prose prose-gray prose-sm max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Pendahuluan</h2>
            <p>
              Kebijakan privasi ini menjelaskan bagaimana nilai.online mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan platform kami. Kami berkomitmen untuk menjaga privasi dan keamanan data Anda.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Informasi yang Kami Kumpulkan</h2>
            <p>Kami mengumpulkan informasi berikut saat Anda menggunakan platform:</p>
            <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-2">a. Informasi Pendaftaran</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Nama sekolah/institusi</li>
              <li>Nama admin</li>
              <li>Alamat email</li>
              <li>Alamat sekolah (opsional)</li>
              <li>Nomor telepon (opsional)</li>
            </ul>
            <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-2">b. Data Akademik</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Data guru dan siswa (nama, email, kelas)</li>
              <li>Soal ujian dan jawaban</li>
              <li>Nilai dan hasil ujian</li>
              <li>Data kehadiran</li>
            </ul>
            <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-2">c. Data Teknis</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Alamat IP</li>
              <li>Jenis browser dan perangkat</li>
              <li>Log aktivitas penggunaan platform</li>
              <li>Cookie dan data sesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Penggunaan Informasi</h2>
            <p>Informasi yang kami kumpulkan digunakan untuk:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Menyediakan dan mengelola layanan platform ujian online.</li>
              <li>Memproses pendaftaran dan autentikasi pengguna.</li>
              <li>Mengirimkan notifikasi terkait layanan.</li>
              <li>Meningkatkan kualitas dan fitur platform.</li>
              <li>Memberikan dukungan teknis.</li>
              <li>Memenuhi kewajiban hukum.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Isolasi Data (Multi-Tenant)</h2>
            <p>
              Platform kami menggunakan arsitektur multi-tenant di mana setiap sekolah/institusi memiliki data yang terisolasi sepenuhnya. Ini berarti:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Data sekolah Anda tidak dapat diakses oleh sekolah lain.</li>
              <li>Semua query data difilter berdasarkan identitas sekolah (schoolId).</li>
              <li>Pengguna hanya dapat mengakses data dari sekolah mereka sendiri.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Penyimpanan & Keamanan Data</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Data disimpan di server yang aman dengan enkripsi.</li>
              <li>File dan media disimpan di Cloudflare R2 dengan akses terkontrol.</li>
              <li>Autentikasi menggunakan JWT (JSON Web Token) dengan HTTP-only cookie.</li>
              <li>Password disimpan dalam bentuk hash, tidak pernah dalam teks biasa.</li>
              <li>Akses berbasis peran (Role-based Access Control): Admin, Guru, Siswa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Berbagi Data dengan Pihak Ketiga</h2>
            <p>Kami <strong>tidak menjual</strong> data pribadi Anda kepada pihak ketiga. Kami hanya membagikan data dalam situasi berikut:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Dengan penyedia layanan infrastruktur (hosting, penyimpanan) yang terikat perjanjian kerahasiaan.</li>
              <li>Jika diwajibkan oleh hukum atau perintah pengadilan.</li>
              <li>Untuk melindungi hak, properti, atau keselamatan kami dan pengguna lain.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Cookie</h2>
            <p>Kami menggunakan cookie untuk:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Menjaga sesi login Anda (HTTP-only cookie).</li>
              <li>Mengingat preferensi pengguna.</li>
              <li>Menganalisis penggunaan platform untuk peningkatan layanan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Hak Pengguna</h2>
            <p>Anda memiliki hak untuk:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li><strong>Mengakses</strong> — melihat data pribadi yang kami simpan tentang Anda.</li>
              <li><strong>Memperbaiki</strong> — memperbarui data yang tidak akurat.</li>
              <li><strong>Menghapus</strong> — meminta penghapusan data Anda (dengan menghubungi kami).</li>
              <li><strong>Mengunduh</strong> — meminta salinan data Anda dalam format yang dapat dibaca.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Perlindungan Data Anak</h2>
            <p>
              Karena platform kami digunakan di lingkungan pendidikan, kami memberikan perhatian khusus pada perlindungan data siswa. Data siswa hanya dapat diakses oleh admin dan guru yang berwenang di sekolah yang bersangkutan.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Retensi Data</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Data akun aktif disimpan selama akun masih aktif.</li>
              <li>Setelah penghentian layanan, data disimpan selama 30 hari sebelum dihapus permanen.</li>
              <li>Log teknis disimpan selama maksimal 90 hari.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">11. Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan signifikan akan diberitahukan melalui email atau notifikasi di platform. Tanggal pembaruan terakhir akan selalu ditampilkan di bagian atas halaman ini.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">12. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan atau permintaan terkait privasi data Anda, silakan hubungi kami:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Email: <a href="mailto:info@nilai.online" className="text-[#F97316] hover:underline">info@nilai.online</a></li>
              <li>WhatsApp: <a href="https://wa.me/6287748597957" className="text-[#F97316] hover:underline">+62 877-4859-7957</a></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
