"use client";

import React, { useEffect, useState } from "react";
import ProdCard from "../components/ProdCard";

export default function Store() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {products?.map((e) => {
        return (
          <div>
            {" "}
            <ProdCard
              key={e.id}
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
