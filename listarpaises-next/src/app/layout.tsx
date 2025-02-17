import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Logo from "../../public/Logo.svg"
import Link from "next/link";


export const metadata: Metadata = {
  title: "Paises do Mundo",
  description: "App criado pelo Arthur Juwer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-lg mr-auto ml-auto my-5 flex flex-col gap-y-16">
          <Link href={'/'}>
          <header className="flex items-center gap-x-4">
                <Image className="ml-4" src={Logo} width={36} height={36} alt="logo" />
                <h1 className="text-lg">Países do Mundo</h1>
            </header>
          </Link>
          
        </div>
        <div className="bg-gray-200 w-full min-h-dvh">
        <div className="max-w-screen-lg mr-auto ml-auto xl:my-5 flex flex-col gap-y-16">
          {children}
        </div>

        </div>
      </body>
    </html>
  );
}
