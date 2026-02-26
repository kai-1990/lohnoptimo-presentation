import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lohnoptimo | Strategischer Relaunch & Ausführungsplan",
  description:
    "Ein visionäres internes Strategie-Deck, das die ersten 3 Monate als fokussierten Geschäfts-Ausführungsplan visualisiert.",
};

export default function LohnoptimoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
