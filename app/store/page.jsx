
import React from "react";
import ProdCard from "../components/ProdCard";

async function getData(){
    const res = await fetch('https://fakestoreapi.com/products')
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Store() {

    const data = await getData()

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {data?.map((e) => {
        return (
          <div key={e.id}>
            {" "}
            <ProdCard
            
              id={e.id}
              title={e.title}
              price={e.price}
              rating={e.rating.rate}
              image={e.image}
            />{" "}
          </div>
        );
      })}
    </div>
  );
}
