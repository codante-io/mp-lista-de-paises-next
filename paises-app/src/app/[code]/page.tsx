import Link from "next/link";

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

export default async function CountryPage({ params }) {
  const country = await getCountry(params.code);
  const borders = country.borders ? await getBorders(country.borders) : [];

  return (
    <div className="p-4">
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-64 mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">
        {country.translations.por?.common || country.name.common}
      </h1>
      <p>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>
      <p>
        <strong>População:</strong> {formatPopulation(country.population)}
      </p>
      <p>
        <strong>Continente:</strong> {country.continents?.[0]}
      </p>
      <p>
        <strong>Região:</strong> {country.region}
      </p>
      <p>
        <strong>Línguas:</strong>{" "}
        {Object.values(country.languages || {}).join(", ")}
      </p>

      {borders.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Faz fronteira com:</h2>
          <div className="flex flex-wrap gap-2">
            {borders.map((borderCountry: any) => (
              <Link
                key={borderCountry.cca3}
                href={`/${borderCountry.cca3}`}
                className="px-3 py-1 bg-blue-200 rounded"
              >
                {borderCountry.translations.por?.common ||
                  borderCountry.name.common}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
