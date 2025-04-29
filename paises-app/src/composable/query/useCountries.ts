import { useQuery } from "@tanstack/react-query";

const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) throw new Error("Erro ao buscar países");
  return res.json();
};

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });
};
