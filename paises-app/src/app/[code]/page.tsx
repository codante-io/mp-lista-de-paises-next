"use client";

import Link from "next/link";
import Header from "../components/header";
import { useParams } from "next/navigation";
import {
  useCountry,
  useCountryBorders,
} from "../../composable/query/useCountry";
import Loading from "../loading";
import { Country } from "@/app/@types/country";

function formatPopulation(pop: number): string {
  if (pop >= 1_000_000) return (pop / 1_000_000).toFixed(1) + "M";
  if (pop >= 1_000) return (pop / 1_000).toFixed(1) + "K";
  return pop.toString();
}

export default function CountryPage() {
  const params = useParams();
  const code = params?.code as string;

  const { data: country, isLoading } = useCountry(code);
  const { data: borders = [] } = useCountryBorders(country?.borders);

  if (isLoading || !country) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-[1200px] mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-1">
          {country.translations.por?.common || country.name.common}
        </h1>
        <Link
          href="/"
          className="mb-1 block text-lg text-black-600 hover:underline"
        >
          ← Voltar
        </Link>

        <div className="bg-white rounded-[21.5px] shadow-md p-6 flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex-1">
            <p className="mb-2">
              <span className="text-xl">🏙️</span> <strong>Capital:</strong>{" "}
              {country.capital?.[0]}
            </p>
            <p className="mb-2">
              <span className="text-xl">🌍</span> <strong>Continente:</strong>{" "}
              {country.continents?.[0]}
            </p>
            <p className="mb-2">
              <span className="text-xl">👨‍👩‍👧‍👦</span> <strong>População:</strong>{" "}
              {formatPopulation(country.population)}
            </p>
            <p className="mb-2">
              <span className="text-xl">🗣️</span>{" "}
              <strong>Línguas faladas:</strong>
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {Object.entries(country.languages || {}).map(([key, lang]) => (
                <span
                  key={key}
                  className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="rounded-[24px] object-cover w-full max-w-[458px] h-auto"
            />
          </div>
        </div>

        {borders.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6">
              Países que fazem fronteira
            </h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {borders.map((borderCountry: Country) => (
                <Link
                  key={borderCountry.cca3}
                  href={`/${borderCountry.cca3}`}
                  className="bg-white rounded-[21.5px] shadow-md p-4 w-[220px] flex flex-col items-center hover:shadow-lg transition"
                >
                  <img
                    src={borderCountry.flags.svg}
                    alt={borderCountry.name.common}
                    className="w-[120px] h-[72px] object-cover rounded-[16px] mb-3"
                  />
                  <span className="text-center text-base font-medium">
                    {borderCountry.translations.por?.common ||
                      borderCountry.name.common}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
