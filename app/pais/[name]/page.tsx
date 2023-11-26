import type { Country } from "@/app/page";
import Link from 'next/link';
import Image from 'next/image';

async function getCountryByName(name: string): Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    return (await response.json())[0];
}

export default async function Country({
    params: { name },
}: {
    params: { name: string }
}) {

    const country = await getCountryByName(name);

    const formatter = Intl.NumberFormat('en', { notation: 'compact' });

    return (
        <section className="flex flex-col container">
            <h1 className="text 5-xl text-center font-bold text-gray-800 my-16">
                {country.translations.por.common}
            </h1>
            <Link className="flex items-center py-2" href="/">
                <Image src="/voltar.svg" alt="Icone seta de voltar" width={24} height={24} />
                Voltar
            </Link>
            <article className="flex ustify-between min-w-full p-10 bg-white rounded-xl">
                <section>
                    {country.capital && (
                        <h2 className="text-xl text-gray-800">
                            <b>🏙️ Capital:</b> {country.capital}
                        </h2>
                    )}
                    <h2 className="text-xl text-gray-800">
                        <b>🗺️ Continente:</b> {country.region} - {country.subregion && `${country.subregion}`}
                    </h2>
                    <h2 className="text-xl text-gray-800">
                        <b>👨‍👩‍👧‍👦 População:</b> {formatter.format(country.population)}
                    </h2>
                    {country?.languages && (

                        <h2 className="text-xl text-gray-800">
                            <b>🗣️Linguas faladas:</b>

                            {Object.values(country.languages).map((language) => (
                                <span key={language}
                                    className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-full">
                                    {language}
                                </span>
                            ))}
                        </h2>
                    )}
                </section>

                <div className="relative h-auto w-96 shadow-md">
                    <Image src={country.flags.svg} alt={country.flags.alt} fill className="object-cover" />
                </div>

            </article>
        </section>

    );
}
