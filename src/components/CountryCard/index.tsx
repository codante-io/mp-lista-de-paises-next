import Image from "next/image";
import Link from "next/link";

type CountryCardProps = {
  name: string;
  ptName: string;
  flag: string;
  flagAlt: string;
};
export default function CountryCard({
  name,
  ptName,
  flag,
  flagAlt,
}: CountryCardProps) {
  return (
    <>
      <Link href={`/pais/${name}`} key={name} className="">
        <article className=" mx-auto h-64 max-w-xs rounded-xl  border-2 bg-white p-2 transition-all duration-300  ease-in-out hover:border-indigo-200 hover:shadow-xl">
          <div className="relative h-40 w-full overflow-hidden rounded-lg p-2 ">
            <Image src={flag} alt={flagAlt} fill  className="object-cover"/>
          </div>
          <h1 className="mt-1 text-center text-xl font-bold">{ptName}</h1>
        </article>
      </Link>
    </>
  );
}
