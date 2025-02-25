import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | Brochure",
  description: "this is brochure page",
  keywords: "about, afroasian education brochure page",
};

export default function BrochureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
