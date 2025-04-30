import { useQuery } from "@tanstack/react-query";
import { Country } from "@/app/@types/country";

const fetchCountry = async (code: string): Promise<Country> => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data: Country[] = await res.json();
  return data[0];
};

const fetchBorders = async (codes: string[]): Promise<Country[]> => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}`
  );
  return res.json();
};

export const useCountry = (code: string) => {
  return useQuery<Country>({
    queryKey: ["country", code],
    queryFn: () => fetchCountry(code),
    enabled: !!code,
  });
};

export const useCountryBorders = (codes: string[] | undefined) => {
  return useQuery<Country[]>({
    queryKey: ["borders", codes],
    queryFn: () => fetchBorders(codes || []),
    enabled: !!codes && codes.length > 0,
  });
};
