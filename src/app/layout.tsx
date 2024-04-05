import type { Metadata } from "next";

import "./globals.css";

import { Container } from "@/app/_layout/Container";
import { Header } from "./_layout/Header";
import { Main } from "./_layout/Main";
import { Footer } from "./_layout/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";
import { inter, notoSerifJp } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og/og.png",
      },
    ],
    locale: "ja-JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJp.variable}`}>
      <body className="font-notoJp">
        <Container>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
