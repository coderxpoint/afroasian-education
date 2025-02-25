import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | Contact",
  description: "this is contact page",
  keywords: "contact, afroasian education contact page",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
