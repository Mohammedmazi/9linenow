import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "9LineNow | Software Development, AI & Digital Solutions",
  description:
    "9LineNow builds custom software, AI-powered solutions, web applications, mobile apps, automation systems, and digital transformation platforms that help businesses grow faster.",

  keywords: [
    "9LineNow",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "Artificial Intelligence",
    "Business Automation",
    "Digital Transformation",
    "Custom Software",
    "Cloud Solutions",
    "Analytics Dashboard",
    "Business Intelligence",
    "Enterprise Software",
  ],

  authors: [
    {
      name: "9LineNow",
    },
  ],

  creator: "9LineNow",

  publisher: "9LineNow",

  metadataBase: new URL("https://9linenow.com"),

  openGraph: {
    title: "9LineNow | Software Development & AI Solutions",

    description:
      "Helping businesses build, automate, and scale through modern software engineering, AI, automation, and digital transformation.",

    url: "https://9linenow.com",

    siteName: "9LineNow",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "9LineNow",

    description:
      "Software Development • AI Solutions • Automation • Digital Transformation",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}