
export const getAllCountrie = async () => {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,capital,cca3,subregion,languages,borders,population,flags,coatOfArms";

  try {
    const rs = await fetch(url, {
      method: "GET",
    });

    let resp = await rs.json();
    //console.log(resp)
    return resp;
  } catch (error) {
    console.warn(error);
  }
};

export const getBordersCountries = async (border: string) => {

  const url = `https://restcountries.com/v3.1/name/${border}`;

  try {
    const rs = await fetch(url, {
      method: "GET",
    });

    let resp = await rs.json();
    return resp;
  } catch (error) {
    console.warn(error);
  }
};

export const getAllBorders = async (border: string[]) => {
  let countries = "";

   let rs = border.map((code) => {
    return countries.concat(code);
  });
  const url = `https://restcountries.com/v3.1/alpha?codes=${rs}`;

  try {
    const rs = await fetch(url, {
      method: "GET",
    });

    let resp = await rs.json();
    return resp;
  } catch (error) {
    console.warn(error);
  }
};
