import ListarItemApi from "@/components/ListarItemApi";
// interface CountryPageProps {
//   params: { country: string };
// }

export default function Country({ params }: {params: { country: string}}) {
  return <ListarItemApi key="item01" name={params?.country} />;
}
