export interface CountryName {
  common: string;
  official: string;
  nativeName?: Record<string, { official: string; common: string }>;
}

export interface CountryTranslations {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface CountryFlags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Country {
  cca3: string;
  name: CountryName;
  translations: CountryTranslations;
  flags: CountryFlags;
  borders?: string[];
}
