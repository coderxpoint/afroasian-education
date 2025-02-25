import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | Dashboard",
  description: "this is Dashboard page",
  keywords: "Dashboard, afroasian education Dashboard page",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
