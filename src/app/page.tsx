import Link from "next/link";
import { Presentation } from "lucide-react";

const presentations = [
  {
    title: "Lohnoptimo",
    description: "Strategischer Relaunch & Ausführungsplan",
    href: "/lohnoptimo",
  },
  {
    title: "Arinna Mosaik",
    description: "Handgefertigte Glaskunst — Website-Entwurf",
    href: "/arina-mosaik",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-12">
          Präsentationen Kai Namyslo
        </h1>


        <div className="grid gap-4">
          {presentations.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-sky-500/40 hover:bg-slate-900 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
                  <Presentation className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-slate-400">{p.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
