"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "./components/header";
import { useCountries } from "../composable/query/useCountries";
import Loading from "./loading";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const { data: countries = [], isLoading } = useCountries();

  const filteredCountries = countries.filter((country: any) => {
    const name = country.translations?.por?.common || country.name.common;
    return name.toLowerCase().includes(search.toLowerCase());
  });

  if (isLoading || !countries) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="w-full max-w-[1361px] mx-auto p-6">
        <input
          type="text"
          placeholder="Pesquisar por país..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-8 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
        />
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredCountries.map((country: any) => (
            <Link
              key={country.cca3}
              href={`/${country.cca3}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
              style={{ width: "241px", height: "226.5px" }}
            >
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-full h-24 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">
                {country.translations.por?.common || country.name.common}
              </h2>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
