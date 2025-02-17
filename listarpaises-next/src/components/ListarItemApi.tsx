import Image from "next/image";
import frame from "../../public/Frame.svg"
import Link from "next/link";
import ListarBorders from "./ListarBorders";

interface PropsListarItemApi {
    name: string
}
interface DadosItemApi {
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    png: string;
  };
  capital: string[];
  continents: string[];
  population: number;
  languages: Record<string, string>
  borders: string[];
}

export default async function ListarItemApi({ name }: PropsListarItemApi){
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
  if(!response.ok) return ( 
    <div className="flex items-center justify-center flex-col gap-y-12 mt-48">
      <h1 className="text-center text-3xl font-bold">O pais não esta listado</h1>
      <Link 
          href={'/'} // () => history.go(-1) // isto é client component
          className="flex items-center text-2xl underline"
          > 
            <Image src={frame} width={30} height={30} alt="seta voltar" />
            Voltar
        </Link>
    </div>
  ) 

  const data: DadosItemApi[] = await response.json()  
  const contry = data[0]

  let populacaoLetra = 'm'
  let populacaoNumero = contry.population

  switch(true){
    case contry.population > 1_000_000_000: 
      populacaoLetra = 'B'
      populacaoNumero = populacaoNumero / 1_000_000_000
    break;
    case contry.population > 1_000_000: 
      populacaoLetra = 'M'
      populacaoNumero = populacaoNumero / 1_000_000
    break;
    case contry.population > 1_000: 
      populacaoLetra = 'M'
      populacaoNumero = populacaoNumero / 1_000
    break;
    
  }
     

  const populacaoAjustada = `${populacaoNumero.toFixed(1)}${populacaoLetra}`

  return (
    <div className="flex flex-col gap-y-12">
      <h1 className="text-center text-4xl font-bold mt-12">{contry?.translations?.por?.common || 'Desconhecido'}</h1>
      <div className="flex flex-col gap-y-1">
        <Link 
          href={'/'} // () => history.go(-1) // isto é client component
          className="flex"
          > 
            <Image src={frame} width={20} height={20} alt="seta voltar" />
            Voltar
        </Link>
        <div className="flex flex-col-reverse xl:flex-row xl:items-center justify-between w-full bg-white rounded-2xl p-16 gap-4 xl:gap-0">
          <div className="flex flex-col gap-y-4">
            <h2>🏙️ <strong>Capital:</strong> {contry.capital}</h2>
            <h2>🗺️ <strong>Continente:</strong> {contry.continents}</h2>
            <h2>👨‍👩‍👧‍👦 <strong>População:</strong> {populacaoAjustada}</h2>
            <h2>🗣️ <strong>Línguas faladas:</strong></h2>
            <ul className="flex flex-wrap gap-3">
              {Object.values(contry.languages).map((item, index) => (
                <li className="bg-indigo-700 px-3 py-0.5 text-white rounded-2xl" key={index}>{item}</li>
              ))}
            </ul>

            
          </div>
          <div className="">
            <Image className="rounded-2xl" src={contry.flags.png} width={360} height={200}  alt={`imagem da bandeira do ${contry.translations.por.common}`}/>
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold">Países que fazem fronteira</h1>
      <div className="grid grid-cols-2 xl:grid-cols-4 place-content-center place-items-center gap-8 p-4 xl:p-0">
        
        {
          contry?.borders?.length > 0 ? 
            contry.borders.map((item, index) => (
              <ListarBorders key={index} name={item} />
            ))
          : <h1>Nenhuma fronteira encontrada.</h1>
        }
      </div>    
    
    </div>
  )
}


