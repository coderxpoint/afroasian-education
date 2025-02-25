import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afroasian Education | Blogs",
  description: "this is blogs page",
  keywords: "Blogs, afroasian education blogs page",
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
