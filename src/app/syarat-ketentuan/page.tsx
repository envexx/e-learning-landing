import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan Ketentuan penggunaan platform ujian online nilai.online",
};

export default function SyaratKetentuanPage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Syarat & Ketentuan</h1>
        <p className="text-sm text-gray-400 mb-10">Terakhir diperbarui: 21 Februari 2026</p>

        <div className="prose prose-gray prose-sm max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Penerimaan Syarat</h2>
            <p>
              Dengan mengakses dan menggunakan platform nilai.online, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak menyetujui syarat ini, mohon untuk tidak menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Definisi</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>&quot;Platform&quot;</strong> merujuk pada aplikasi web nilai.online beserta seluruh fitur dan layanan yang disediakan.</li>
              <li><strong>&quot;Pengguna&quot;</strong> merujuk pada individu atau institusi yang mendaftar dan menggunakan platform.</li>
              <li><strong>&quot;Tenant&quot;</strong> merujuk pada sekolah atau institusi pendidikan yang terdaftar sebagai entitas terpisah di platform.</li>
              <li><strong>&quot;Admin&quot;</strong> merujuk pada pengguna dengan hak akses administratif untuk mengelola tenant.</li>
              <li><strong>&quot;Konten&quot;</strong> merujuk pada semua data, soal, jawaban, dan materi yang diunggah ke platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Pendaftaran Akun</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Anda harus memberikan informasi yang akurat dan lengkap saat mendaftar.</li>
              <li>Setiap sekolah/institusi hanya boleh memiliki satu akun tenant.</li>
              <li>Anda bertanggung jawab menjaga kerahasiaan kredensial akun Anda.</li>
              <li>Anda harus segera memberitahu kami jika terjadi penggunaan tidak sah atas akun Anda.</li>
              <li>Pendaftaran melalui halaman registrasi akan otomatis mendapatkan paket Free.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Paket Layanan & Batasan</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Setiap paket memiliki batasan jumlah siswa, guru, kelas, mata pelajaran, ujian, dan penyimpanan.</li>
              <li>Paket Free tersedia gratis selama 10 hari dengan fitur dan kapasitas terbatas.</li>
              <li>Upgrade paket dapat dilakukan dengan menghubungi tim kami.</li>
              <li>Kami berhak mengubah fitur dan batasan paket dengan pemberitahuan sebelumnya.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Penggunaan yang Diperbolehkan</h2>
            <p>Anda setuju untuk menggunakan platform hanya untuk tujuan pendidikan yang sah, termasuk:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Membuat dan mengelola ujian online untuk siswa.</li>
              <li>Mengelola data akademik sekolah.</li>
              <li>Menggunakan fitur analitik untuk evaluasi pembelajaran.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Penggunaan yang Dilarang</h2>
            <p>Anda dilarang untuk:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Menggunakan platform untuk tujuan ilegal atau tidak sah.</li>
              <li>Mengunggah konten yang melanggar hukum, bersifat ofensif, atau melanggar hak pihak ketiga.</li>
              <li>Mencoba mengakses data tenant/sekolah lain.</li>
              <li>Melakukan reverse engineering, decompile, atau membongkar kode platform.</li>
              <li>Menggunakan bot, scraper, atau alat otomatis untuk mengakses platform tanpa izin.</li>
              <li>Membagikan akses akun kepada pihak yang tidak berwenang.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Hak Kekayaan Intelektual</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Platform nilai.online dan seluruh komponen teknologinya adalah milik kami.</li>
              <li>Konten yang Anda unggah tetap menjadi milik Anda atau institusi Anda.</li>
              <li>Anda memberikan kami lisensi terbatas untuk menyimpan dan menampilkan konten Anda sesuai fungsi platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Pembatasan Tanggung Jawab</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Platform disediakan &quot;sebagaimana adanya&quot; tanpa jaminan apapun.</li>
              <li>Kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan atau ketidakmampuan menggunakan platform.</li>
              <li>Kami berupaya menjaga ketersediaan platform namun tidak menjamin uptime 100%.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Penghentian Layanan</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Kami berhak menangguhkan atau menghentikan akun yang melanggar syarat dan ketentuan ini.</li>
              <li>Anda dapat menghentikan penggunaan layanan kapan saja dengan menghubungi tim kami.</li>
              <li>Setelah penghentian, data Anda akan disimpan selama 30 hari sebelum dihapus permanen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Perubahan Syarat</h2>
            <p>
              Kami dapat mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan melalui platform atau email. Penggunaan berkelanjutan setelah perubahan dianggap sebagai persetujuan Anda terhadap syarat yang diperbarui.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">11. Hukum yang Berlaku</h2>
            <p>
              Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui musyawarah terlebih dahulu, dan jika tidak tercapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di Indonesia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">12. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami melalui:
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
