export type Country = {
  languages?: {
    [key: string]: string;
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  name: {
    common: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
  borders?: string[];
  cca3: string;
};
