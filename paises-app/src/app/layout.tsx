import "../../src/app/globals.css";
import { ReactNode } from "react";
import Providers from "./provider/ReactQueryProvider";

export const metadata = {
  title: "Lista de Países",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-gray-100 min-h-screen font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
