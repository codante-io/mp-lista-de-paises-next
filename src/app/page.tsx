"use client";
import CountryCard from "@/components/CountryCard";

import React, { useCallback, useEffect, useState } from "react";

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

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [data, setData] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  /*  TODO:  cria um controlador e coloca no return se nao for possível fazer SSR */

  //  GET INITIAL DATA
  useEffect(() => {
    (async () => {
      const countries = await getCountries();
      setCountries(countries);
    })();
  }, []);
  //  GET INITIAL DATA */

  const textCleaner = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleFilter = useCallback(
    (value: string) => {   
      setData(
        countries.filter((country: Country) =>
          textCleaner(country.translations.por.common).includes(
            textCleaner(value),
          ),
        ),
      );
    },
    [countries],
  );

  useEffect(() => {
    handleFilter(search);
  }, [handleFilter, search]);
  // console.log(data);

  return (
    <>
      <input
        type="search"
        name=""
        id=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-500 p-2 text-white"
      />
      <section className="container mt-16 grid h-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
        {data?.map((country) => (
          <React.Fragment key={country?.name.common}>
            <CountryCard
              name={country?.name.common}
              ptName={country?.translations.por.common}
              flag={country?.flags.svg}
              flagAlt={
                country?.flags?.alt ??
                `Bandeira do pais ${country?.name.common}`
              }
            />
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
