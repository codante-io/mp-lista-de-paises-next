import Link from "next/link";

type Props = {
  countrie?: string;
  image: string;
};

const Card = ({ countrie, image }: Props) => {
  return (
    <div className="bg-white p-1 basis-1/3 md:basis-1/6 2xl:basis-1/4 rounded-lg">
      <Link
        href={{
          pathname: `/details/${countrie}` || "",
          query: { 'flag': `${image}` },
        }}
        className=" flex flex-col justify-between w-full h-full "
      >
        <img src={image} className="  rounded-lg w-max " />
        <h2 className="text-center font-bold p-2">{countrie || "outro"}</h2>
      </Link>
    </div>
  );
};

export default Card;
