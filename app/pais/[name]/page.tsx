import type { Country } from "@/app/page";

async function getCountriesByName(name: string): Promise<Country[]> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return (await response.json())[0];
}

export default async function Country({ params: { name } }: { params: { name: string } }) {

    const country = await getCountriesByName(name);

    return (
        <section className="flex flex-col container">
            <h1 className="text 5-xl text-center font-bold text-gray-800 mt-16">{country.translations.por.common}</h1>;
        </section>
    );
}
