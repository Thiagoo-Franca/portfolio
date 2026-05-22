import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Thaigo Repositorio",
  description: "Repositorio de Thaigo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Header />
        {children}</body>
      <Footer />
    </html>
  );
}
