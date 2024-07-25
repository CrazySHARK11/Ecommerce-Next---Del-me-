


async function getData( params ){
  const res = await fetch(`https://fakestoreapi.com/products/${params}`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Store({ params }) {

  const data = await getData(params.product)

  return <div> 
     {data?.title}
  </div>;

}


