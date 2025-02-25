import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | University",
  description: "this is University page",
  keywords: "University, afroasian education University page",
};

export default function UniversityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
