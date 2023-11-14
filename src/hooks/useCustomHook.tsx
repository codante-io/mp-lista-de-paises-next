import { getCountries } from "@/app/utils/getCountries";

import { Country } from "@/types";
import { useState, useEffect } from "react";

export default function useCustomHook() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [data, setData] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [searchByLanguage, setSearchByLanguage] = useState("");
  const [searchByContinent, setSearchByContinent] = useState("");

  useEffect(() => {
    (async () => {
      const countriesInfo = await getCountries();
      setCountries(countriesInfo);
      setData(countriesInfo);
    })();
  }, []);

  return {
    countries,
    setCountries,
    data,
    setData,
    search,
    setSearch,
    searchByLanguage,
    setSearchByLanguage,
    searchByContinent,
    setSearchByContinent,
  };
}
