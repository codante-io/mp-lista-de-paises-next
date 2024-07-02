import type { Metadata } from "next";
import {Nunito_Sans} from "next/font/google";
import "./globals.css";


const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de Países",
  description: "Uma lista de países criada com o Next.js",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main>
          <nav>
            <section>
              <h1>Lista de países</h1>
            </section>
          </nav>
        {children}
        </main>

      </body>
    </html>
  );
}
