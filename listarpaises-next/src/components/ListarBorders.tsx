import Image from "next/image";
import Link from "next/link";

interface PropsListarBorders {
  name: string;
}

interface DadosApi {
    translations: {
      por: {
        common: string;
      };
    };
    flags: {
      png: string;
    };
    cca3: string;
  }

export default async function ListarBorders({ name }: PropsListarBorders) {
  let dataFinal: DadosApi | null = null;
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
    if (!response.ok) {
      throw new Error("Failed to fetch country data");
    }
    const data: DadosApi[] = await response.json();
    dataFinal = data[0];
  } catch (error) {
    console.error(error);
  }

  if (!dataFinal) {
    return <div>Unable to load country information</div>; // Display a fallback if no data is available
  }

  return (
    <Link href={`/info/${dataFinal.cca3}`}>
      <div className="bg-white p-4 h-full flex flex-col gap-y-5 justify-between rounded-lg">
        <Image
          src={dataFinal.flags.png || '/fallback-image.png'} // Fallback image if flag is unavailable
          width={400}
          height={460}
          alt={`Flag of ${dataFinal.translations.por.common || 'Unknown country'}`}
        />
        <h1 className="text-center text-lg">
          {dataFinal.translations.por.common || 'Nome não disponível'}
        </h1>
      </div>
    </Link>
  );
}
