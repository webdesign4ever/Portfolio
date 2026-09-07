import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://moazzam.dev"),
  title: { default: "Muhammad Moazzam | Front-End Developer", template: "%s | Muhammad Moazzam" },
  description: "Front-end developer building thoughtful, enterprise-grade web applications with Angular, React, and Next.js.",
  keywords: ["Muhammad Moazzam", "front-end developer", "Angular", "React", "Next.js", "Pakistan"],
  authors: [{ name: "Muhammad Moazzam" }],
  openGraph: { title: "Muhammad Moazzam | Front-End Developer", description: "Enterprise-ready web experiences, thoughtfully engineered.", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Muhammad Moazzam | Front-End Developer", description: "Enterprise-ready web experiences, thoughtfully engineered." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
