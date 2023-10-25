import type { Country } from "@/app/page";
import Link from "next/link";
import Image from "next/image";

async function getCountriesByName(name: string): Promise<Country[]> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return (await response.json())[0];
}

export default async function Country({ params: { name } }: { params: { name: string } }) {

    const country = await getCountriesByName(name);

    return (
        <section className="flex flex-col container">
            <h1 className="text 5-xl text-center font-bold text-gray-800 my-16">{country.translations.por.common}</h1>;
            <Link className="flex items-center py-2" href="/">
                <Image src="/voltar.svg" alt="Icone seta de voltar" width={24} height={24}></Image>
                Voltar
            </Link>
            <article className="flex ustify-between min-w-full p-10 bg-white rounded-xl"></article>
            <section>
                <h2>Capital</h2>
                <h2>Continente</h2>
                <h2>População</h2>
                <h2>Linguas faladas</h2>
            </section>
        </section>

    );
}
