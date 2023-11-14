"use client";
import CountryCard from "@/components/CountryCard";
import OptionsLanguage from "@/components/optionsLanguage";

import React, { useCallback, useEffect, useState } from "react";
import textCleaner from "./utils/textCleaner";
import { Country } from "@/types";
import { getCountries } from "./utils/getCountries";
import OptionsContinent from "@/components/optionsContinent";
import Loading from "./loading";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [data, setData] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [searchByLanguage, setSearchByLanguage] = useState("");
  const [searchByContinent, setSearchByContinent] = useState("");

  /*  TODO:  cria um controlador e coloca no return se nao for possível fazer SSR */
  /*  TODO:  fazer logica DE FILTRAGEM FAZENDO CALLBACKS DE FILTERS  */

  //  GET INITIAL DATA
  useEffect(() => {
    (async () => {
      const countriesInfo = await getCountries();
      setCountries(countriesInfo);
      setData(countriesInfo);
    })();
  }, []);
  //  GET INITIAL DATA */

  // const handleFilterSearch = useCallback(
  //   (value: string) => {
  //     setData(
  //       countries.filter((country: Country) =>
  //         textCleaner(country.translations.por.common).includes(
  //           textCleaner(value.trim()),
  //         ),
  //       ),
  //     );
  //   },
  //   [countries],
  // );
  // const handleFilterSearchByLanguage = useCallback(
  //   (value: string) => {
  //     if (value === "") return;
  //     let filteredByLanguage = countries.filter((country: Country) => {
  //       let valorData = Object.values(country.languages ?? []);
  //       return valorData.indexOf(value) !== -1;
  //     });
  //     setData(filteredByLanguage);
  //   },
  //   [countries],
  // );

  const handleFilterSearch = (value: string) => {
    if (value === "") return countries;
    const filtedInfo = countries.filter((country: Country) =>
      textCleaner(country.translations.por.common).includes(
        textCleaner(value.trim()),
      ),
    );
    return filtedInfo;
  };

  const handleFilterSearchByLanguage = (info: Country[], value: string) => {
    if (value === "") return info;
    let filteredByLanguage = info.filter((country: Country) => {
      let valorData = Object.values(country.languages ?? []);
      return valorData.indexOf(value) !== -1;
    });
    return filteredByLanguage;
  };

  const handleFilterContinent = (info: Country[], value: string) => {
    if (value === "") return info;
    const filtedInfo = info.filter((country: Country) => {
      return textCleaner(country.region).includes(textCleaner(value.trim()));
    });
    return filtedInfo;
  };
  function handleFilter() {
    const filtedSearch = handleFilterSearch(search);
    const filtedLanguage = handleFilterSearchByLanguage(
      filtedSearch,
      searchByLanguage,
    );
    const filtedContinent = handleFilterContinent(
      filtedLanguage,
      searchByContinent,
    );

    setData(filtedContinent);
  }

  const resetSearch = () => {
    setSearch("");
    setSearchByLanguage("");
    setSearchByContinent("");
    setData(countries);
  };
  return (
    <>
      <div className="mt-3 flex items-center gap-5">
        <span>Filtrar por:</span>
        <form
          className="flex items-center gap-5"
          onSubmit={(e) => {
            {
              e.preventDefault();
              handleFilter();
            }
          }}
        >
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-100 p-2 text-black"
          />
          <label htmlFor="language">Idioma:</label>
          <input
            className="p-2"
            list="languages"
            id="language"
            value={searchByLanguage}
            onChange={(e) => setSearchByLanguage(e.target.value)}
          />
          <datalist id="languages">
            <OptionsLanguage />
          </datalist>
          <label htmlFor="continent">Continente:</label>
          <select
            id="continent"
            className="p-2"
            value={searchByContinent}
            onChange={(e) => setSearchByContinent(e.target.value)}
          >
            <option value="">Select an Option</option>
            <OptionsContinent />
          </select>
          <input type="submit" value="Submit" onClick={() => "s"} />
          <input type="reset" value="Reset" onClick={resetSearch} />
        </form>
      </div>
      {/* <filterInputs /> */}

      {data.length !== 0 ? (
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
      ) : (
        <h3 className="mt-6 ">NENHUM PAIS ENCONTRADO</h3>
      )}
    </>
  );
}
