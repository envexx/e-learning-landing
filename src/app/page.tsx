"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ClipboardList, BarChart3, Shield, Sparkles, ArrowRight, Check,
  ChevronRight, Menu, X, Brain, Star, Quote, Globe,
  UserCheck, FileText, MessageCircle, Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/magicui/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/magicui/stagger-children";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { PulseBadge } from "@/components/magicui/pulse-badge";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "";

const WA_NUMBER = "6287748597957";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo, saya tertarik dengan platform ujian online nilai.online. Mohon info lebih lanjut.")}`;

const NAV_LINKS = [
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Ujian Online (CBT)",
    desc: "Buat ujian online dengan berbagai tipe soal: pilihan ganda, essay, isian singkat, benar/salah, dan pencocokan. Dilengkapi auto-grading otomatis dan timer ujian.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: UserCheck,
    title: "Kehadiran Online",
    desc: "Butuh presensi digital? Gunakan platform kehadiran.online — sistem absensi online terintegrasi untuk siswa dan guru.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    link: "https://kehadiran.online/",
  },
  {
    icon: Brain,
    title: "AI Generate Soal",
    desc: "Asisten AI yang bisa membuat soal ujian otomatis. Cukup deskripsikan materi, soal langsung jadi lengkap dengan kunci jawaban.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: BarChart3,
    title: "Analitik Nilai Real-time",
    desc: "Dashboard analitik untuk memantau hasil ujian, statistik nilai per siswa, per kelas, dan per mata pelajaran secara real-time.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: FileText,
    title: "Bank Soal & Export PDF",
    desc: "Simpan dan kelola bank soal untuk digunakan kembali. Export hasil ujian dan rapor ke format PDF dengan mudah.",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
  {
    icon: Shield,
    title: "Multi-Tenant & Aman",
    desc: "Setiap sekolah memiliki data terpisah dan terisolasi. Keamanan data terjamin. Cocok untuk SD, SMP, SMA, dan SMK.",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

const TESTIMONIALS = [
  {
    name: "Budi Santoso, S.Pd.",
    role: "Kepala Sekolah, SMPN 1 Surabaya",
    text: "Ujian online di nilai.online mengubah cara kami mengelola PTS dan PAS. Proses yang dulu memakan waktu berhari-hari kini selesai dalam hitungan jam. Koreksi otomatis sangat membantu!",
    avatar: "BS",
  },
  {
    name: "Siti Rahayu, M.Pd.",
    role: "Guru Matematika, SMAN 3 Bandung",
    text: "Fitur AI generate soal sangat membantu saya membuat soal ujian online. Tinggal deskripsikan materi, soal langsung jadi! Sangat praktis dan efisien.",
    avatar: "SR",
  },
  {
    name: "Ahmad Fauzi",
    role: "Admin IT, SMK Telkom Jakarta",
    text: "Setup ujian online-nya sangat mudah dan cepat. Dalam sehari semua guru dan siswa sudah bisa menggunakan platform ini untuk ujian.",
    avatar: "AF",
  },
];

const FAQS = [
  {
    q: "Apakah platform ujian online ini bisa dicoba gratis?",
    a: "Ya! Kami menyediakan paket Trial gratis selama 14 hari dengan akses ke semua fitur dasar ujian online. Tidak perlu kartu kredit.",
  },
  {
    q: "Tipe soal apa saja yang didukung untuk ujian online?",
    a: "Kami mendukung pilihan ganda, essay, isian singkat, benar/salah, dan pencocokan. Semua tipe soal dilengkapi auto-grading kecuali essay yang perlu koreksi manual.",
  },
  {
    q: "Bagaimana cara mendaftar dan membuat akun sekolah?",
    a: "Hubungi tim kami via WhatsApp untuk proses pendaftaran dan pembayaran. Setelah pembayaran dikonfirmasi, akun sekolah Anda akan langsung aktif dan siap digunakan.",
  },
  {
    q: "Apakah bisa digunakan untuk PTS, PAS, dan ujian semester?",
    a: "Tentu! Platform kami dirancang untuk semua jenis ujian: ulangan harian, kuis, PTS, PAS, ujian semester, hingga ujian sekolah. Dilengkapi timer dan pengacakan soal.",
  },
  {
    q: "Bagaimana dengan sistem presensi/kehadiran?",
    a: "Untuk presensi online, kami menyediakan platform terpisah di kehadiran.online yang terintegrasi dengan sistem kami. Kunjungi kehadiran.online untuk info lebih lanjut.",
  },
  {
    q: "Apakah bisa upgrade atau downgrade paket?",
    a: "Tentu! Anda bisa mengubah paket kapan saja. Hubungi tim kami via WhatsApp untuk proses perubahan paket.",
  },
];

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface LandingMediaItem {
  id: string;
  tipe: string;
  judul: string;
  url: string;
  aspectRatio: string;
  urutan: number;
}

interface TierFromDB {
  id: string;
  nama: string;
  label: string;
  harga: number;
  maxSiswa: number;
  maxGuru: number;
  maxKelas: number;
  maxMapel: number;
  maxUjian: number;
  maxStorage: number;
  fipitur: Record<string, boolean> | null;
  urutan: number;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/
  );
  return match ? match[1] : null;
}

function formatRupiah(amount: number): string {
  if (amount === 0) return "Gratis";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatStorage(mb: number): string {
  if (mb >= 1000) return `${(mb / 1000).toFixed(0)} GB`;
  return `${mb} MB`;
}

function formatLimit(value: number): string {
  if (value >= 99999) return "Unlimited";
  return new Intl.NumberFormat("id-ID").format(value);
}

const FEATURE_LABEL_MAP: Record<string, string> = {
  ujianOnline: "Ujian Online (CBT)",
  bankSoal: "Bank Soal",
  autoGrading: "Auto-Grading",
  exportPdf: "Export PDF",
  bulkImport: "Bulk Import Data",
  aiChatbot: "AI Generate Soal",
  dashboardAnalitik: "Dashboard Analitik",
  prioritySupport: "Priority Support",
  customBranding: "Custom Branding",
  apiAccess: "API Access",
};

function getTierFeatures(tier: TierFromDB): string[] {
  if (!tier.fipitur) return ["Ujian Online (CBT)"];
  return Object.entries(tier.fipitur)
    .filter(([, v]) => v)
    .map(([k]) => FEATURE_LABEL_MAP[k] || k);
}

function getWaLinkForTier(tierLabel: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo, saya tertarik dengan paket ${tierLabel} untuk ujian online di nilai.online. Mohon info pembayaran dan pembuatan akun.`)}`;
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const loginUrl = APP_URL ? `${APP_URL}/admin-guru` : "/admin-guru";

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative w-7 h-7">
            <Image src="/icon/logo-no-bg-png-blue.png" alt="Ujian Online nilai.online" fill className="object-contain" priority />
          </div>
          <span className="text-sm font-bold tracking-tight text-gray-900">
            nilai<span className="text-[#4f6df5]">.online</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-gray-500 hover:text-gray-900 px-3.5 py-1.5 rounded-full hover:bg-gray-50 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href={loginUrl}
            className="text-[13px] font-medium text-gray-500 hover:text-gray-900 px-3.5 py-1.5 rounded-full hover:bg-gray-50 transition-all"
          >
            Masuk
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-full bg-[#4f6df5] text-white hover:bg-[#3b5ef5] transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-0.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-100 space-y-1.5">
              <a href={loginUrl} className="block w-full text-center px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                Masuk
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#4f6df5] rounded-xl hover:bg-[#3b5ef5] transition-colors">
                <MessageCircle className="w-4 h-4" />
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-100/80 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:shadow-gray-200/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm font-medium text-gray-900 pr-4">{q}</span>
        <ChevronRight className={cn("w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200", open && "rotate-90")} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", open ? "max-h-40 pb-4" : "max-h-0")}>
        <p className="px-5 text-sm text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function LandingPage() {
  const [tiers, setTiers] = useState<TierFromDB[]>([]);
  const [loadingTiers, setLoadingTiers] = useState(true);
  const [media, setMedia] = useState<LandingMediaItem[]>([]);

  useEffect(() => {
    const apiBase = API_URL;

    fetch(`${apiBase}/api/public/tiers`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setTiers(data.data);
        }
      })
      .catch((err) => console.error("Error fetching tiers:", err))
      .finally(() => setLoadingTiers(false));

    fetch(`${apiBase}/api/public/landing-media`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setMedia(data.data);
        }
      })
      .catch((err) => console.error("Error fetching media:", err));
  }, []);

  const previewImages = media.filter((m) => m.tipe === "image");
  const previewVideos = media.filter((m) => m.tipe === "video");
  const popularTierNama = "basic";

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn delay={0.1} blur>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#4f6df5] text-xs font-semibold mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Platform Ujian Online #1 di Indonesia
              </div>
            </FadeIn>

            <FadeIn delay={0.2} blur>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Ujian Online
                <br />
                <span className="text-[#4f6df5]">Mudah & Cepat</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4} blur>
              <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Platform ujian online (CBT) lengkap untuk sekolah SD, SMP, SMA, dan SMK. Auto-grading, AI generate soal, analitik nilai real-time.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#4f6df5] text-white font-semibold text-sm hover:bg-[#3b5ef5] transition-colors shadow-lg shadow-blue-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Daftar via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#harga"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-gray-700 font-semibold text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Lihat Harga
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12">
                {[
                  { value: "500+", label: "Sekolah" },
                  { value: "50rb+", label: "Ujian Dibuat" },
                  { value: "99.9%", label: "Uptime" },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8 sm:gap-12">
                    {i > 0 && <div className="w-px h-10 bg-gray-200 -ml-8 sm:-ml-12" />}
                    <div className="text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                        <NumberTicker value={s.value} />
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Dashboard Preview Image */}
          <FadeIn delay={1} className="mt-16 lg:mt-20 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-200/60 bg-white">
              <Image
                src="/Screenshot 2026-02-16 220053.png"
                alt="Dashboard Ujian Online nilai.online"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section id="fitur" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[#4f6df5] tracking-wide uppercase mb-3">Fitur Unggulan</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Platform Ujian Online Lengkap untuk Sekolah
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Semua yang dibutuhkan sekolah untuk ujian online dan manajemen nilai — dalam satu platform.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {FEATURES.map((f) => {
              const isLink = !!(f as any).link;
              const Tag = isLink ? "a" : "div";
              const linkProps = isLink ? { href: (f as any).link, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <StaggerItem key={f.title}>
                  <Tag
                    {...linkProps}
                    className="group relative p-7 rounded-2xl bg-white border border-gray-100/80 shadow-sm hover:shadow-md hover:shadow-gray-200/50 transition-all duration-300 h-full block"
                  >
                    <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-5", f.iconBg)}>
                      <f.icon className={cn("w-5 h-5", f.iconColor)} />
                    </div>
                    <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    {isLink && (
                      <p className="text-xs text-[#4f6df5] font-medium mt-4 group-hover:underline">Kunjungi kehadiran.online →</p>
                    )}
                  </Tag>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <FadeIn className="text-center mt-12" delay={0.4}>
            <p className="text-sm text-gray-500 mb-4">Tertarik dengan fitur kami? Hubungi tim kami untuk demo dan pembuatan akun.</p>
            <ShimmerButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white text-sm shadow-lg shadow-green-500/20"
              background="#25D366"
              shimmerColor="rgba(255,255,255,0.2)"
            >
              <MessageCircle className="w-4 h-4" />
              Tanya via WhatsApp
            </ShimmerButton>
          </FadeIn>
        </div>
      </section>

      {/* ==================== PREVIEW GALLERY ==================== */}
      {previewImages.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#4f6df5] tracking-wide uppercase mb-3">Preview Platform</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Lihat Tampilan Ujian Online Kami
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Berikut tampilan platform ujian online yang akan Anda gunakan.
              </p>
            </div>

            <div className={cn(
              "grid gap-6",
              previewImages.length === 1 ? "grid-cols-1 max-w-3xl mx-auto" :
              previewImages.length === 2 ? "grid-cols-1 md:grid-cols-2" :
              "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            )}>
              {previewImages.map((img) => {
                const aspectClass = img.aspectRatio === "9:16" ? "aspect-[9/16]" : img.aspectRatio === "1:1" ? "aspect-square" : "aspect-video";
                return (
                  <div key={img.id} className="group">
                    <div className={cn(
                      "relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white",
                      aspectClass,
                      img.aspectRatio === "9:16" && "max-w-[280px] mx-auto"
                    )}>
                      <Image
                        src={img.url}
                        alt={img.judul}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    {img.judul && (
                      <p className="text-sm text-gray-500 text-center mt-3 font-medium">{img.judul}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[#4f6df5] tracking-wide uppercase mb-3">Cara Memulai</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              3 Langkah Mudah untuk Ujian Online
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {[
              { step: "01", title: "Hubungi Kami", desc: "Chat via WhatsApp untuk konsultasi, pilih paket, dan proses pembayaran. Akun sekolah langsung dibuatkan." },
              { step: "02", title: "Setup Sekolah", desc: "Import data guru, siswa, dan kelas. Bisa manual atau bulk import via Excel. Selesai dalam hitungan menit." },
              { step: "03", title: "Mulai Ujian Online", desc: "Buat ujian online dan pantau hasil nilai siswa secara real-time dari dashboard." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="bg-white rounded-2xl border border-gray-100/80 shadow-sm p-7 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#4f6df5] text-lg font-bold flex items-center justify-center mx-auto mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== VIDEO TUTORIAL ==================== */}
      {previewVideos.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#4f6df5] tracking-wide uppercase mb-3">Video Tutorial</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Lihat Demo & Tutorial Ujian Online
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Tonton video tutorial cara menggunakan platform ujian online kami.
              </p>
            </div>

            <div className={cn(
              "grid gap-6",
              previewVideos.length === 1 ? "grid-cols-1 max-w-3xl mx-auto" :
              previewVideos.length === 2 ? "grid-cols-1 md:grid-cols-2" :
              "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            )}>
              {previewVideos.map((vid) => {
                const videoId = getYouTubeId(vid.url);
                const aspectClass = vid.aspectRatio === "9:16" ? "aspect-[9/16]" : vid.aspectRatio === "1:1" ? "aspect-square" : "aspect-video";
                if (!videoId) return null;
                return (
                  <div key={vid.id} className="group">
                    <div className={cn(
                      "relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-black",
                      aspectClass,
                      vid.aspectRatio === "9:16" && "max-w-[280px] mx-auto"
                    )}>
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={vid.judul}
                      />
                    </div>
                    {vid.judul && (
                      <p className="text-sm text-gray-500 text-center mt-3 font-medium">{vid.judul}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ==================== PRICING (from API) ==================== */}
      <section id="harga" className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[#4f6df5] tracking-wide uppercase mb-3">Harga Paket Tahunan</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Paket Ujian Online untuk Setiap Sekolah
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Pilih paket sesuai kebutuhan sekolah Anda. Semua harga berlaku per tahun. Hubungi kami via WhatsApp untuk pembayaran dan pembuatan akun.
            </p>
          </FadeIn>

          {loadingTiers ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[#4f6df5]" />
              <span className="ml-3 text-gray-500">Memuat data paket...</span>
            </div>
          ) : tiers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Paket belum tersedia. Hubungi kami untuk info lebih lanjut.</p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1fb855] transition-colors">
                <MessageCircle className="w-4 h-4" />
                Hubungi Kami
              </a>
            </div>
          ) : (
            <>
              <div className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-6",
                tiers.length >= 4 ? "lg:grid-cols-4" : tiers.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
              )}>
                {tiers.map((tier) => {
                  const isPopular = tier.nama === popularTierNama;
                  const yearlyPrice = tier.harga * 12;
                  const features = getTierFeatures(tier);

                  return (
                    <div
                      key={tier.id}
                      className={cn(
                        "relative flex flex-col rounded-2xl bg-white p-7 transition-all duration-300",
                        isPopular
                          ? "border-2 border-[#4f6df5] shadow-md shadow-blue-100/50"
                          : "border border-gray-100/80 shadow-sm hover:shadow-md hover:shadow-gray-200/50"
                      )}
                    >
                      {isPopular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                          <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#4f6df5] text-white text-[11px] font-semibold">
                            <Star className="w-3 h-3" /> Populer
                          </span>
                        </div>
                      )}

                      <div className="mb-5">
                        <h3 className="text-lg font-semibold text-gray-900">{tier.label}</h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {tier.nama === "trial" ? "Coba gratis selama 14 hari" : `Paket ${tier.label} untuk sekolah`}
                        </p>
                      </div>

                      <div className="mb-6">
                        {tier.harga === 0 ? (
                          <>
                            <span className="text-3xl font-extrabold text-gray-900">Gratis</span>
                            <span className="text-sm text-gray-400 ml-1">14 hari</span>
                          </>
                        ) : (
                          <>
                            <span className="text-3xl font-extrabold text-gray-900">{formatRupiah(yearlyPrice)}</span>
                            <span className="text-sm text-gray-400 ml-1">/tahun</span>
                            <p className="text-xs text-gray-400 mt-1">({formatRupiah(tier.harga)}/bulan)</p>
                          </>
                        )}
                      </div>

                      <div className="space-y-2 mb-6 pb-6 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4f6df5]/60" />
                          {formatLimit(tier.maxSiswa)} Siswa
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4f6df5]/60" />
                          {formatLimit(tier.maxGuru)} Guru
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4f6df5]/60" />
                          {formatLimit(tier.maxKelas)} Kelas
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4f6df5]/60" />
                          {formatLimit(tier.maxUjian)} Ujian
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4f6df5]/60" />
                          {formatStorage(tier.maxStorage)} Storage
                        </div>
                      </div>

                      <div className="space-y-2 mb-8 flex-1">
                        {features.map((f) => (
                          <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            {f}
                          </div>
                        ))}
                      </div>

                      <a
                        href={getWaLinkForTier(tier.label)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-colors",
                          isPopular
                            ? "bg-[#25D366] text-white hover:bg-[#1fb855] shadow-lg shadow-green-500/20"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        )}
                      >
                        <MessageCircle className="w-4 h-4" />
                        {tier.harga === 0 ? "Coba Gratis" : `Pilih ${tier.label}`}
                      </a>
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-xs text-gray-400 mt-8">
                Semua harga sudah termasuk setup akun dan support. Hubungi kami untuk paket custom.{" "}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#4f6df5] hover:underline font-medium">
                  Chat WhatsApp
                </a>
              </p>
            </>
          )}
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonial" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[#4f6df5] tracking-wide uppercase mb-3">Testimonial</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Dipercaya Sekolah untuk Ujian Online
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative p-7 rounded-2xl bg-white border border-gray-100/80 shadow-sm hover:shadow-md hover:shadow-gray-200/50 transition-all duration-300 h-full">
                  <Quote className="w-7 h-7 text-[#4f6df5]/15 mb-4" />
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#4f6df5] text-xs font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-semibold text-[#4f6df5] tracking-wide uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Pertanyaan Umum Ujian Online
            </h2>
          </FadeIn>

          <StaggerChildren className="space-y-3" staggerDelay={0.08}>
            {FAQS.map((f) => (
              <StaggerItem key={f.q}>
                <FAQItem q={f.q} a={f.a} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b5ef5] via-[#4f6df5] to-[#6b8cff]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <FadeIn className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Siap Mulai Ujian Online di Sekolah Anda?
              </h2>
              <p className="mt-4 text-blue-100/80 max-w-xl mx-auto">
                Hubungi kami sekarang via WhatsApp untuk konsultasi gratis, pilih paket, dan langsung mulai ujian online di sekolah Anda.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <ShimmerButton
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 text-white text-sm shadow-xl"
                  background="#25D366"
                  shimmerColor="rgba(255,255,255,0.2)"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp Sekarang
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </ShimmerButton>
                <a
                  href="#harga"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Lihat Paket Harga
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="flex items-center gap-2.5 mb-4">
                <div className="relative w-7 h-7">
                  <Image src="/icon/logo-no-bg-png-blue.png" alt="Ujian Online nilai.online" fill className="object-contain" />
                </div>
                <span className="text-lg font-bold tracking-tight text-gray-900">
                  nilai<span className="text-[#3b82f6]">.online</span>
                </span>
              </a>
              <p className="text-sm text-gray-400 leading-relaxed">
                Platform ujian online (CBT) untuk sekolah SD, SMP, SMA, dan SMK di Indonesia.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Produk</h4>
              <ul className="space-y-2">
                {[
                  { label: "Ujian Online", href: "#fitur" },
                  { label: "Kehadiran Online", href: "https://kehadiran.online/" },
                  { label: "Harga", href: "#harga" },
                  { label: "FAQ", href: "#faq" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Kontak</h4>
              <ul className="space-y-2">
                <li>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">WhatsApp</a>
                </li>
                <li>
                  <a href="mailto:info@nilai.online" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Email</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2">
                {["Kebijakan Privasi", "Syarat & Ketentuan"].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} nilai.online — Platform Ujian Online Sekolah Indonesia
            </p>
            <div className="flex items-center gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== JSON-LD Structured Data ==================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "nilai.online - Platform Ujian Online Sekolah",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web",
            description: "Platform ujian online (CBT) terbaik untuk sekolah SD, SMP, SMA, dan SMK di Indonesia. Dilengkapi auto-grading, AI generate soal, bank soal, dan analitik nilai real-time.",
            url: "https://nilai.online",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "IDR",
              lowPrice: "0",
              highPrice: "18000000",
              offerCount: tiers.length || 5,
            },
            featureList: [
              "Ujian Online (CBT)",
              "Bank Soal",
              "Auto-Grading",
              "AI Generate Soal",
              "Analitik Nilai Real-time",
              "Export PDF",
              "Multi-Tenant",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "nilai.online",
            url: "https://nilai.online",
            description: "Platform ujian online (CBT) terbaik untuk sekolah di Indonesia",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-877-4859-7957",
              contactType: "customer service",
              availableLanguage: "Indonesian",
            },
          }),
        }}
      />
    </div>
  );
}
