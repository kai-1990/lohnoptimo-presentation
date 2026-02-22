"use client";

import { useState, useEffect, type ReactNode } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordGateProps {
  children: ReactNode;
  passwordHash: string;
  storageKey: string;
  title?: string;
}

// SHA-256 Hash clientseitig berechnen
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function PasswordGate({
  children,
  passwordHash,
  storageKey,
  title = "Zugang geschuetzt",
}: PasswordGateProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Beim Laden pruefen ob Session bereits autorisiert
  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored === "authorized") {
      setIsAuthorized(true);
    }
    setIsLoading(false);
  }, [storageKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    const hash = await hashPassword(password);

    if (hash === passwordHash) {
      sessionStorage.setItem(storageKey, "authorized");
      setIsAuthorized(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  // Ladescreen verhindert Flash
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
            <Lock className="w-8 h-8 text-sky-400" />
          </div>
        </div>

        {/* Titel */}
        <h1 className="text-xl font-semibold text-slate-100 text-center mb-8">
          {title}
        </h1>

        {/* Formular */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Passwort eingeben"
              autoFocus
              className={`w-full px-4 py-3 pr-12 bg-slate-900 border rounded-xl text-slate-100 placeholder-slate-500 outline-none transition-colors ${
                error
                  ? "border-red-500/50 focus:border-red-400"
                  : "border-slate-700 focus:border-sky-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">
              Falsches Passwort
            </p>
          )}

          <button
            type="submit"
            disabled={!password}
            className="w-full py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-medium rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            Entsperren
          </button>
        </form>
      </div>
    </div>
  );
}
