import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | Loan",
  description: "this is loan page",
  keywords: "about, afroasian education loan page",
};

export default function LoanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
