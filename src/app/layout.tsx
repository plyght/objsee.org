import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a09" },
    { media: "(prefers-color-scheme: light)", color: "#f1ede4" },
  ],
};

export const metadata: Metadata = {
  title: "objsee",
  description: "objsee",
  metadataBase: new URL("https://objsee.org"),
  alternates: { canonical: "/" },
  openGraph: { title: "objsee", description: "objsee", url: "https://objsee.org", type: "website" },
  twitter: { card: "summary", title: "objsee", description: "objsee" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Vampiro+One&display=swap"
        />
      </head>
      <body className="min-h-[100dvh]">{children}</body>
    </html>
  );
}
