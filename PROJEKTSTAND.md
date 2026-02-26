# Projektstand — Lohnoptimo Business Plan Presentation

**Datum:** 2026-02-26
**Branch:** master
**Letzter Commit:** e4b4bb5 (pushed)
**Build:** ✅ Sauber (Next.js 16.1.6, Static, 2 Routen)

## Abgeschlossene Features

### Design & Content Polish (e4b4bb5) — Session 26.02.2026
- **Schriftgrößen:** Durchgehend erhöht — Überschriften `text-4xl md:text-5xl`, Body `text-lg`, Labels `text-sm`/`text-xs`
- **RoadmapSection komplett überarbeitet:**
  - Monat 1 = nur Setup/Planung, Monat 2 = erste Live-Aktivitäten, Monat 3 = konkrete Zahlen als Ziel
  - Timeline-Nodes farbig pro Monat (Emerald/Sky/Indigo mit Glow)
  - Checkmarks und Badges je Monat in passender Akzentfarbe
  - Letztes Item M3 mit Target-Icon hervorgehoben
- **ClosingSection:** Bento-Grid statt 3 gleicher Karten — Partnerschaft dominant (col-span-2, row-span-2) mit eingebetteten Equity-Meilensteinen
- **Sprache verbessert:** "Skin in the Game" → "Mein Anteil am Erfolg", "Die Perspektive" → "Anteilsmodell", "messbar abschließen" → "messbar wirksam", "Wir arbeiten wirtschaftlich sicher" → "Die Reihenfolge ist klar"
- **Umlaute korrigiert:** Praesentation, geschuetzt, pruefen, visionaeres, Ausfuehrungsplan
- **Branding:** "Antigravity Strategie-Decks" entfernt, Root-Titel → "Präsentationen Kai Namyslo"
- **Tooltip:** "SaaS MRR/Kumuliert" → "Software/Gesamt"

### Multi-Präsentation-Plattform (88fefa2)
- Root-Landingpage mit Übersichtskarten
- PasswordGate (SHA-256, sessionStorage) — Passwort: `lohnoptimo26!`
- Lohnoptimo-Route `/lohnoptimo` mit eigener Metadata

### Ordner-Struktur (90b2d9f)
- Section-Komponenten in `src/components/lohnoptimo_businessplan/`

## Offene TODOs
- [ ] Vercel Deployment verifizieren (auto-deploy nach Push)
- [ ] Mobile-Ansicht final testen
- [ ] Passwort-Gate im Browser testen

## Known Issues
- Recharts SSR-Warnung (width/height -1) bei Static Generation — harmlos
- Ordner `antigravity_businessplan_presentation` → `presentations` umbenennen (optional, manuell)

## Nächste Schritte
- Weitere Präsentationen: neuen Ordner in `src/components/`, neue Route in `src/app/`
- Ggf. Figma MCP aktivieren für zukünftige Design-Iteration

## Tech Stack
Next.js 16.1.6 · React 19 · TypeScript 5 · Tailwind CSS 4 · Framer Motion · Recharts · Lucide Icons

## Architektur
```
src/
  app/
    page.tsx                  — Root-Landingpage (Präsentationsübersicht)
    layout.tsx                — Root-Layout (Metadata: "Präsentationen | Kai Namyslo")
    lohnoptimo/
      layout.tsx              — Lohnoptimo-Metadata
      page.tsx                — PasswordGate + Präsentation
  components/
    PasswordGate.tsx          — SHA-256, sessionStorage, Eye-Toggle
    ScrollProgress.tsx        — Vertikale Dot-Navigation
    lohnoptimo_businessplan/
      HeroSection.tsx
      EcosystemSection.tsx
      StrategySection.tsx
      RoadmapSection.tsx
      GrowthChartSection.tsx
      CapitalLogicSection.tsx
      EquityChartSection.tsx
      ClosingSection.tsx
```
