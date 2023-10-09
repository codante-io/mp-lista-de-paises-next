import { get } from "http";

type Country = {
  name: {
    common: string;
  }
}

//fetch de dados - next 13 lida com isso (cache)
async function getCountries(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all');
  return response.json();
}

//componente funciona pq está rodando no servidor
export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="flex w-full container">
      {countries.map((country) => (
        <h1 key={country.name.common}>{country.name.common}</h1>
      ))}
    </section>
  );
}
