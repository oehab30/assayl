"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe2, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@assayllogistics.com");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email.trim() && password.trim()) {
        if (typeof window !== "undefined") {
          localStorage.setItem("assayel_admin_auth", "true");
          localStorage.setItem("assayel_admin_email", email);
        }
        router.push("/admin");
      } else {
        setError("Please enter valid admin credentials.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#051428] px-4 py-12 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F0908]/20 blur-[140px]" />

      <div className="relative w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A96E]/30 bg-[#4F0908] shadow-[0_8px_30px_rgba(79,9,8,0.4)]">
            <Globe2 size={28} className="text-[#C9A96E]" />
          </div>

          <h1 className="mt-5 font-jakarta text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Aseel Administration
          </h1>

          <p className="mt-2 text-xs text-white/50">
            Sign in to access the logistics control center and website CMS.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-xs font-semibold text-red-300">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
              Admin Email / Username
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@assayllogistics.com"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.05] pl-10 pr-4 text-sm text-white outline-none transition focus:border-[#C9A96E] focus:bg-white/10"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.05] pl-10 pr-4 text-sm text-white outline-none transition focus:border-[#C9A96E] focus:bg-white/10"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-6 text-sm font-bold text-white shadow-lg transition hover:bg-[#380605] disabled:opacity-60"
          >
            {loading ? (
              "Authenticating..."
            ) : (
              <>
                Sign In to Dashboard
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Footer */}
        <div className="border-t border-white/10 pt-5 text-center text-[11px] leading-5 text-white/40">
          <div className="flex items-center justify-center gap-1.5 text-[#C9A96E]">
            <ShieldCheck size={14} />
            <span className="font-semibold">Secured Admin Access</span>
          </div>
          <p className="mt-1">Demo Access Credentials pre-filled for convenience.</p>
        </div>
      </div>
    </div>
  );
}
