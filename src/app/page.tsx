"use client";

import SearchInputs from "@/components/SearchInputs";
import CountryCards from "@/components/CountryCards";
import useCustomHook from "@/hooks/useCustomHook";

export default function Home() {
  const {
    setData,
    countries,
    search,
    searchByLanguage,
    searchByContinent,
    setSearch,
    setSearchByLanguage,
    setSearchByContinent,
    data,
  } = useCustomHook();

  return (
    <>
      <SearchInputs
        countries={countries}
        search={search}
        searchByLanguage={searchByLanguage}
        searchByContinent={searchByContinent}
        setData={setData}
        setSearch={setSearch}
        setSearchByLanguage={setSearchByLanguage}
        setSearchByContinent={setSearchByContinent}
      />

      <CountryCards data={data} />
    </>
  );
}
