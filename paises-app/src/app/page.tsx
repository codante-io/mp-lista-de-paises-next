import Link from "next/link";
import Header from "../app/header/header";

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export default async function HomePage() {
  const countries = await getCountries();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {countries.map((country: any) => (
          <Link
            key={country.cca3}
            href={`/${country.cca3}`}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="w-24 h-16 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">
              {country.translations.por?.common || country.name.common}
            </h2>
          </Link>
        ))}
      </main>
    </div>
  );
}
