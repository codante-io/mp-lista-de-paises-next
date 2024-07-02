import Image from 'next/image';
import Link from "next/link";
import CountryCard from '@/components/country-card';

export type Country = {
  translations: any;
  name: {
    common: string;
  };

  translation: {
    por: {
      common: string;
    };
  };

  flags: {
    svg: string;
    alt: string;
  }
  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages?: {
    [key: string]: string;
  };

  borders?: string[];
  cca3: string;
}

async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();
  return (
    <section className="grid grid-cols-5 justify-center w-full container gap-2 mt-16">
      {countries.map((country) => (
        <CountryCard
         key={country.name.common}
         name={country.name.common}
         ptName={country.translations.por.common}
         flag={country.flags.svg} 
         flagAlt={country.flags.alt}/>
      ))}
    </section>
  );
}
