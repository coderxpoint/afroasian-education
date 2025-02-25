import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | Visa",
  description: "this is visa page",
  keywords: "about, afroasian education visa page",
};

export default function LoanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
