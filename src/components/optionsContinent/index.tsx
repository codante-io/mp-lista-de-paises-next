import { getCountries } from "@/app/utils/getCountries";
import { memo } from "react";

async function getOptionsContinentArray() {
  const countriesInfo = await getCountries();
  const optionsContinentArray = countriesInfo.map((country) => {
    const continentArray = country?.region;
    return continentArray;
  });
  const uniqueContinent = [...new Set(optionsContinentArray)];
  return uniqueContinent.sort();
}

// export default async function OptionsLanguage() {
//   const uniqueLanguagesArray =await getOptionsArray();
//   // console.log(uniqueLanguagesArray);

//   return (
//     <>
//       {uniqueLanguagesArray.map((r) => (
//         <option key={r} value={r}>
//           {r}
//         </option>
//       ))}
//     </>
//   );
// }

const OptionsContinent = memo(async function OptionsContinent() {
  const uniqueContinentArray = await getOptionsContinentArray();

  return (
    <>
      {uniqueContinentArray.map((r) => {
        if (!r) return null;
        return (
          <option key={r} value={r}>
            {r}
          </option>
        );
      })}
    </>
  );
});
export default OptionsContinent;
