
import Image from "next/image";
import Link from "next/link";

type Country = {
  name: {
    common: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
};

async function getCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export default async function Home() {
  const countries = await getCountries();
  return (
    <section className="container mt-16 grid h-full grid-cols-5 gap-2 ">
      {countries.map((country) => (
        <Link href={`/pais/${country.name.common}`} key={country.name.common}>
          <article className="h-64 w-full rounded-xl border-2 bg-white p-2 transition-all duration-300  ease-in-out hover:border-indigo-200 hover:shadow-xl">
            <div className="relative h-40 w-full overflow-hidden rounded-lg p-2 ">
              <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                fill
                objectFit="cover"
              />
            </div>
            <h1 className="mt-1 text-center text-xl font-bold">
              {country.translations.por.common}
            </h1>
          </article>
        </Link>
      ))}
    </section>
  );
}
