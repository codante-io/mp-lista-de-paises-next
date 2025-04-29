"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./components/header";

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export default function HomePage() {
  const [countries, setCountries] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const countryName =
      country.translations?.por?.common || country.name.common;
    return countryName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="w-full max-w-[1361px] mx-auto p-6">
        <input
          type="text"
          placeholder="Pesquisar por pais..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-8 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
        />

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredCountries.map((country) => (
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
