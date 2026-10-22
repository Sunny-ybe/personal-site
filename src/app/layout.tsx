import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Starfield } from "@/components/Starfield";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Sashikant Kumar | Computer Science & Mathematics @ ASU";
const description =
  "Sashikant Kumar builds AI products, developer tools, and automation systems. Computer Science & Mathematics at Arizona State University, open to Spring and Summer 2027 software engineering and AI internships.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sashikantkumar.com"),
  title,
  description,
  authors: [{ name: "Sashikant Kumar" }],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Sashikant Kumar",
    images: [{ url: "/me.webp", width: 800, height: 800, alt: "Sashikant Kumar" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/me.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Starfield />
        {children}
      </body>
    </html>
  );
}
