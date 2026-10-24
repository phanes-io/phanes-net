import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://phanes.net"),
  title: "phanes.net — Jannik Schröder",
  description:
    "Personal project showcase by Jannik Schröder. Building tools for a more private, open web.",
  keywords: ["Jannik Schröder", "phanes", "privacy", "open source", "infrastructure"],
  authors: [{ name: "Jannik Schröder", url: "https://phanes.net" }],
  openGraph: {
    title: "phanes.net — Jannik Schröder",
    description: "Building tools for a more private, open web.",
    url: "https://phanes.net",
    siteName: "phanes.net",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}<Script
          src="https://rybbit.scpx.de/api/script.js"
          data-site-id="11"
          data-skip-patterns={"[\"/api/**\", \"/auth/**\", \"/callback/**\", \"/verify/**\", \"/reset-password/**\"]"}
          data-mask-patterns={"[\"/domains/*/**\", \"/customers/*/**\", \"/tickets/*/**\", \"/servers/*/**\", \"/users/*/**\"]"}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
