import { useQuery } from "@tanstack/react-query";
import { Country } from "@/app/@types/country";

const fetchCountries = async (): Promise<Country[]> => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) throw new Error("Erro ao buscar países");
  return res.json();
};

export const useCountries = () => {
  return useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });
};
