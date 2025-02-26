import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | Admissions",
  description: "this is blogs page",
  keywords: "Admission, afroasian education blogs page",
};

export default function AdmissionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
