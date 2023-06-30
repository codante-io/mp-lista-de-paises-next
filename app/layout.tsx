import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Lista de países",
  description: "Projeto que gera uma lista de países",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
