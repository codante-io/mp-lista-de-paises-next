import CountryCard from "@/components/CountryCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Country = {
  languages?: {
    [key: string]: string;
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
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
  borders?: string[];
  cca3: string;
};

async function getCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}

export default async function Home() {
  const countries = await getCountries();
  return (
    <section className="container mt-16 grid h-full grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5 ">
      {countries.map((country) => (
        <React.Fragment key={country.name.common}>
          <CountryCard
            name={country.name.common}
            ptName={country.translations.por.common}
            flag={country.flags.svg}
            flagAlt={country.flags.alt}
          />
        </React.Fragment>
      ))}
    </section>
  );
}
