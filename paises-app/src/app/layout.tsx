import "../../src/app/globals.css";

export const metadata = {
  title: "Lista de Países",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="bg-gray-100 min-h-screen font-sans">{children}</body>
    </html>
  );
}
