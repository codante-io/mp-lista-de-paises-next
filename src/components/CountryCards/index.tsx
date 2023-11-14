import CountryCard from "../CountryCard";
import React from "react";

import { Country } from "@/types";

type CountryCardsProps = {
  data: Country[];
};
export default function CountryCards({ data }: CountryCardsProps) {
  return (
    <>
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
                  `Bandeira do pais ${country?.translations.por.common}`
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
