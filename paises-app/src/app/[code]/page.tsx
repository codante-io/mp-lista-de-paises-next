import Link from "next/link";
import Header from "../header/header";

function formatPopulation(pop: number) {
  if (pop >= 1_000_000) return (pop / 1_000_000).toFixed(1) + "M";
  if (pop >= 1_000) return (pop / 1_000).toFixed(1) + "K";
  return pop.toString();
}

async function getCountry(code: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data = await res.json();
  return data[0];
}

async function getBorders(codes: string[]) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}`
  );
  return res.json();
}

export default async function CountryPage({
  params,
}: {
  params: { code: string };
}) {
  const country = await getCountry(params.code);
  const borders = country.borders ? await getBorders(country.borders) : [];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="max-w-[1200px] mx-auto p-4">
        <Link href="/" className="text-blue-600 text-sm flex items-center mb-4">
          ← Voltar
        </Link>

        <h1 className="text-4xl font-bold text-center mb-6">
          {country.translations.por?.common || country.name.common}
        </h1>

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
              {Object.values(country.languages || {}).map((lang: any) => (
                <span
                  key={lang}
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

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {borders.map((borderCountry: any) => (
                <Link
                  key={borderCountry.cca3}
                  href={`/${borderCountry.cca3}`}
                  className="bg-white rounded-[21.5px] shadow-md p-4 w-[220px] sm:w-[220px] flex flex-col items-center hover:shadow-lg transition"
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
