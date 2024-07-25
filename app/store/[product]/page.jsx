"use client"

import React, { useEffect, useState } from "react";

export default function page({ params }) {

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.product}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);


  return <div> 
     {products?.title}
  </div>;

}


