import localFont from "next/font/local";
import "styles/globals.css";
import Header from "components/layout/header/header";
import Footer from "components/layout/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    tempalte: "%s | mid corporation",
    default: "mid corporation",
  },
  description: "mid corporation is a company that does things.",
  openGraph: {
    title: "mid corporation",
    description: "mid corporation is a company that does things.",
    type: "website",
    images: ["/logo.png"],
    locale: "ja_JP",
    url: "https://mid-corporation.com",
    site_name: "mid corporation",
    alternates: {
      canonical: "https://mid-corporation.com",
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
