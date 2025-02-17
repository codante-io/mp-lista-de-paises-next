import Image from "next/image"
import Link from "next/link"

interface DadosApi{
    name: {
        common: string
    }
    translations: {
        por: {
            common: string
        }
    }
    flags: {
        png: string
    }
    cca3: string
}

export default async function ListarApi() {

    const response = await fetch('https://restcountries.com/v3.1/all', {
        cache: "no-store",
    })
    const data: DadosApi[] = await response.json()

    const paisInicial = 10
    const paisFinal = paisInicial+12

    const initialCountries = data.slice(paisInicial,paisFinal)
    

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-12 place-items-center">
        {initialCountries.map((item, index) => (
            <Link href={`/info/${item.cca3}`}>
            <div key={'listarapi'+index} className="flex flex-col items-center justify-center gap-y-4">  
                <Image className="rounded-2xl" src={item.flags.png} width={180} height={100} alt="flag" />
                <h1 className="text-center">{item.translations.por.common || 'Nome não Disponivel'}</h1>
            </div>
            </Link>
        ))}
    </div>
  )
}
