import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lohnoptimo | Strategischer Relaunch & Ausfuehrungsplan",
  description:
    "Ein visionaeres internes Strategie-Deck, das die ersten 3 Monate als fokussierten Geschaefts-Ausfuehrungsplan visualisiert.",
};

export default function LohnoptimoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
