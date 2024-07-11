import Card from "@/components/card";
import { getAllCountrie } from "@/service/countrieService";
import { useEffect } from "react";

const Home = () => {



  return (
    <main className="bg-slate-300 h-screen ">
    
      <section className="flex flex-row justify-center gap-8  flex-wrap my-6 ">
        
          <Card countrie="Brasileiro" image="" />

      </section>
    </main>
  );
};

export default Home;
