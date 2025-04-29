import { useQuery } from "@tanstack/react-query";

const fetchCountry = async (code: string) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data = await res.json();
  return data[0];
};

const fetchBorders = async (codes: string[]) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}`
  );
  return res.json();
};

export const useCountry = (code: string) => {
  return useQuery({
    queryKey: ["country", code],
    queryFn: () => fetchCountry(code),
    enabled: !!code,
  });
};

export const useCountryBorders = (codes: string[] | undefined) => {
  return useQuery({
    queryKey: ["borders", codes],
    queryFn: () => fetchBorders(codes || []),
    enabled: !!codes && codes.length > 0,
  });
};
