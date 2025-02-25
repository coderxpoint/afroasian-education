import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | About",
  description: "this is about page",
  keywords: "about, afroasian education about page",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
