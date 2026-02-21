"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Eye, EyeOff, Check, Loader2, School,
  Mail, Lock, User, MapPin, Phone, ArrowLeft, Sparkles,
  AlertCircle, CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "";

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

function formatLimit(value: number): string {
  if (value >= 99999) return "Unlimited";
  return new Intl.NumberFormat("id-ID").format(value);
}

function formatStorage(mb: number): string {
  if (mb >= 1000) return `${(mb / 1000).toFixed(0)} GB`;
  return `${mb} MB`;
}

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [freeTier, setFreeTier] = useState<TierFromDB | null>(null);
  const [loadingTier, setLoadingTier] = useState(true);

  const [form, setForm] = useState({
    namaSekolah: "",
    email: "",
    password: "",
    namaAdmin: "",
    alamat: "",
    noTelp: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/public/tiers")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          const free = data.data.find(
            (t: TierFromDB) => t.nama === "free" || t.harga === 0
          );
          if (free) setFreeTier(free);
        }
      })
      .catch(() => {})
      .finally(() => setLoadingTier(false));
  }, []);

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (error) setError("");
  }

  function validateStep1(): boolean {
    const errs: Record<string, string> = {};
    if (!form.namaSekolah.trim()) errs.namaSekolah = "Nama sekolah wajib diisi";
    if (!form.namaAdmin.trim()) errs.namaAdmin = "Nama admin wajib diisi";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateStep2(): boolean {
    const errs: Record<string, string> = {};
    if (!form.email.trim()) {
      errs.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Format email tidak valid";
    }
    if (!form.password) {
      errs.password = "Password wajib diisi";
    } else if (form.password.length < 6) {
      errs.password = "Password minimal 6 karakter";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleNext() {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  }

  function handleBack() {
    if (step === 2) setStep(1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep2()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/public/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          namaSekolah: form.namaSekolah.trim(),
          email: form.email.trim(),
          password: form.password,
          namaAdmin: form.namaAdmin.trim(),
          alamat: form.alamat.trim() || undefined,
          noTelp: form.noTelp.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || "Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch {
      setError("Tidak dapat terhubung ke server. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  const loginUrl = "https://app.nilai.online/";

  // Success state
  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Registrasi Berhasil!</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-2">
              Akun sekolah <strong className="text-gray-700">{form.namaSekolah}</strong> telah berhasil dibuat dengan paket <strong className="text-[#F97316]">Free</strong>.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              Silakan login menggunakan email <strong className="text-gray-600">{form.email}</strong> untuk mulai menggunakan platform.
            </p>
            <a
              href={loginUrl}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#F97316] text-white font-semibold text-sm hover:bg-[#ea6c0e] hover:shadow-lg hover:shadow-orange-200 transition-all"
            >
              Masuk ke Dashboard
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-1 w-full py-2.5 mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 flex flex-col">
      {/* Top bar */}
      <div className="w-full px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-7 h-7">
              <Image src="/icon/logo-no-bg-png-blue.png" alt="nilai.online" fill className="object-contain" priority />
            </div>
            <span className="text-sm font-bold tracking-tight text-gray-900">
              nilai<span className="text-[#F97316]">.online</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 hidden sm:inline">Sudah punya akun?</span>
            <a
              href={loginUrl}
              className="text-[13px] font-medium text-[#F97316] hover:text-[#ea6c0e] px-3.5 py-1.5 rounded-full border border-[#F97316]/20 hover:bg-orange-50/50 transition-all"
            >
              Masuk
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12 pt-4">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left side - Info */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F97316]/10 to-[#F97316]/5 border border-[#F97316]/20 text-xs font-semibold text-[#F97316] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Gratis — Tanpa Kartu Kredit
            </div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              Mulai Ujian Online
              <br />
              <span className="text-[#F97316]">
                dalam 5 Menit
              </span>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Daftarkan sekolah Anda dan langsung gunakan platform ujian online lengkap. Akses gratis 10 hari dengan semua fitur dasar.
            </p>

            {/* Free tier benefits */}
            {freeTier && (
              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Gratis 10 Hari Termasuk:</p>
                {[
                  `${formatLimit(freeTier.maxSiswa)} Siswa`,
                  `${formatLimit(freeTier.maxGuru)} Guru`,
                  `${formatLimit(freeTier.maxKelas)} Kelas`,
                  `${formatLimit(freeTier.maxUjian)} Ujian`,
                  `${formatStorage(freeTier.maxStorage)} Storage`,
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#F97316]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-3 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-8">
              {/* Mobile header */}
              <div className="lg:hidden mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#F97316]/10 to-[#F97316]/5 border border-[#F97316]/20 text-xs font-semibold text-[#F97316] mb-3">
                  <Sparkles className="w-3 h-3" />
                  Gratis
                </div>
                <h1 className="text-xl font-bold text-gray-900">Daftar Akun Sekolah</h1>
                <p className="text-sm text-gray-400 mt-1">Mulai ujian online dalam 5 menit</p>
              </div>

              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                    step >= 1
                      ? "bg-[#F97316] text-white shadow-md shadow-orange-200"
                      : "bg-gray-100 text-gray-400"
                  )}>
                    {step > 1 ? <Check className="w-4 h-4" /> : "1"}
                  </div>
                  <span className={cn("text-xs font-medium", step >= 1 ? "text-gray-700" : "text-gray-400")}>
                    Info Sekolah
                  </span>
                </div>
                <div className={cn("flex-1 h-0.5 rounded-full transition-all", step >= 2 ? "bg-[#F97316]" : "bg-gray-100")} />
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                    step >= 2
                      ? "bg-gradient-to-br from-[#F97316] to-[#fb923c] text-white shadow-md shadow-orange-200"
                      : "bg-gray-100 text-gray-400"
                  )}>
                    2
                  </div>
                  <span className={cn("text-xs font-medium", step >= 2 ? "text-gray-700" : "text-gray-400")}>
                    Akun Admin
                  </span>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-100 mb-6">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Step 1: School Info */}
                {step === 1 && (
                  <div className="space-y-4">
                    {/* Nama Sekolah */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Nama Sekolah <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input
                          type="text"
                          value={form.namaSekolah}
                          onChange={(e) => updateField("namaSekolah", e.target.value)}
                          placeholder="contoh: SMA Negeri 1 Jakarta"
                          className={cn(
                            "w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 transition-all",
                            errors.namaSekolah
                              ? "border-red-200 focus:ring-red-200 bg-red-50/30"
                              : "border-gray-200 focus:ring-[#F97316]/20 focus:border-[#F97316]/40"
                          )}
                        />
                      </div>
                      {errors.namaSekolah && <p className="text-xs text-red-500 mt-1">{errors.namaSekolah}</p>}
                    </div>

                    {/* Nama Admin */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Nama Admin <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input
                          type="text"
                          value={form.namaAdmin}
                          onChange={(e) => updateField("namaAdmin", e.target.value)}
                          placeholder="Nama lengkap admin"
                          className={cn(
                            "w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 transition-all",
                            errors.namaAdmin
                              ? "border-red-200 focus:ring-red-200 bg-red-50/30"
                              : "border-gray-200 focus:ring-[#F97316]/20 focus:border-[#F97316]/40"
                          )}
                        />
                      </div>
                      {errors.namaAdmin && <p className="text-xs text-red-500 mt-1">{errors.namaAdmin}</p>}
                    </div>

                    {/* Alamat */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Alamat Sekolah <span className="text-gray-300 font-normal">(opsional)</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-gray-300" />
                        <input
                          type="text"
                          value={form.alamat}
                          onChange={(e) => updateField("alamat", e.target.value)}
                          placeholder="Alamat lengkap sekolah"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316]/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* No Telp */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        No. Telepon <span className="text-gray-300 font-normal">(opsional)</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input
                          type="tel"
                          value={form.noTelp}
                          onChange={(e) => updateField("noTelp", e.target.value)}
                          placeholder="contoh: 021-1234567"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316]/40 transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F97316] text-white font-semibold text-sm hover:bg-[#ea6c0e] hover:shadow-lg hover:shadow-orange-200 transition-all mt-2"
                    >
                      Lanjutkan
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Step 2: Admin Account */}
                {step === 2 && (
                  <div className="space-y-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Email Admin <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="admin@sekolah.sch.id"
                          className={cn(
                            "w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 transition-all",
                            errors.email
                              ? "border-red-200 focus:ring-red-200 bg-red-50/30"
                              : "border-gray-200 focus:ring-[#F97316]/20 focus:border-[#F97316]/40"
                          )}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Password <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={form.password}
                          onChange={(e) => updateField("password", e.target.value)}
                          placeholder="Minimal 6 karakter"
                          className={cn(
                            "w-full pl-10 pr-11 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 transition-all",
                            errors.password
                              ? "border-red-200 focus:ring-red-200 bg-red-50/30"
                              : "border-gray-200 focus:ring-[#F97316]/20 focus:border-[#F97316]/40"
                          )}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                      {form.password && !errors.password && (
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <div className={cn("h-1 rounded-full flex-1", form.password.length >= 6 ? "bg-emerald-400" : "bg-gray-200")} />
                          <div className={cn("h-1 rounded-full flex-1", form.password.length >= 8 ? "bg-emerald-400" : "bg-gray-200")} />
                          <div className={cn("h-1 rounded-full flex-1", form.password.length >= 10 ? "bg-emerald-400" : "bg-gray-200")} />
                        </div>
                      )}
                    </div>

                    {/* Summary */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-orange-50/30 border border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 mb-2">Ringkasan Pendaftaran</p>
                      <div className="space-y-1.5 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Sekolah</span>
                          <span className="text-gray-700 font-medium">{form.namaSekolah}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Admin</span>
                          <span className="text-gray-700 font-medium">{form.namaAdmin}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Paket</span>
                          <span className="text-[#F97316] font-semibold">Free</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-2">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl border border-gray-200 text-gray-500 font-medium text-sm hover:bg-gray-50 transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#F97316] to-[#fb923c] text-white font-semibold text-sm hover:shadow-lg hover:shadow-orange-200 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Mendaftar...
                          </>
                        ) : (
                          <>
                            Daftar Sekarang
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>

              {/* Footer note */}
              <p className="text-center text-[11px] text-gray-300 mt-6">
                Dengan mendaftar, Anda menyetujui{" "}
                <a href="/syarat-ketentuan" target="_blank" className="text-gray-400 hover:text-gray-500 underline">Syarat & Ketentuan</a>{" "}
                dan{" "}
                <a href="/kebijakan-privasi" target="_blank" className="text-gray-400 hover:text-gray-500 underline">Kebijakan Privasi</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
