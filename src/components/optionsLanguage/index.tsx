import { getCountries } from "@/app/utils/getCountries";
import { memo } from "react";

async function getOptionsArray() {
  const countriesInfo = await getCountries();
  const optionsLanguageArray = countriesInfo.map((country) => {
    const languagesArray = Object.values(country.languages ?? []);
    return languagesArray;
  });
  const uniqueLanguages = [...new Set(optionsLanguageArray.flat())];
  return uniqueLanguages.sort();
}

const OptionsLanguage = memo(async function OptionsLanguage() {
  const uniqueLanguagesArray = await getOptionsArray();

  return (
    <>
      {uniqueLanguagesArray.map((r) => (
        <option key={r} value={r}>
          {r}
        </option>
      ))}
    </>
  );
});
export default OptionsLanguage;
