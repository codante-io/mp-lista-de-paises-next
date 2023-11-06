import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de países",
  description: "Uma lista de países criada com NextJS",
  icons: "./favicon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={nunitoSans.className}>
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
          <nav className="flex h-16 w-full items-center justify-center bg-white">
            <section className="container flex ">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.svg" alt="" width={55} height={55} />
                <h1 className="text-2xl font-bold">Lista de Países</h1>
              </Link>
            </section>
          </nav>

          {children}
        </main>
      </body>
    </html>
  );
}
