"use client";
import Card from "@/components/card";
import { Root2 } from "@/interface/rootInterface";
import { getAllCountrie } from "@/service/countrieService";
import { useEffect, useState } from "react";

export default function App() {
  const [listCountries, setListCountries] = useState<Root2[]>();
  const [listRender, setListRender] = useState<Root2[]>();

  useEffect(() => {
    const get = async () => {
      const rs = await getAllCountrie();
      setListCountries(rs);
      setListRender(rs)
    };

    get();
  }, []);

  const FilterCountrie = (e:any)=>{

    const rs = listCountries?.filter((count)=>{
      return count.name.common.includes(e.target.value)
    })
    setListRender(rs)
    
  }



  return (
    <main className="bg-slate-300  ">
      <section >

        <div className="flex items-center p-5 justify-center gap-2 bg-green-200">
          <label>Pesquisar:</label>
          <input type="search" className="rounded-lg p-4 outline-blue-300 " onChange={(e)=>FilterCountrie(e)}/>
        </div>

        <div className="flex flex-row justify-center gap-8  flex-wrap py-6">
          {listRender?.map((countrie, index) => {
            return (
              <Card
                key={index}
                countrie={countrie.name.common}
                image={countrie.flags.png}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
