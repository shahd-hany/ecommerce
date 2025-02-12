import React from 'react'
import useFetch from '../../Hooks/useFetch'
import essentials from '../../assets/Kitchen Essentials.jpeg'
import smart from '../../assets/smartde.jpeg'
import tech from '../../assets/tech.jpeg'
import clothes from "../../assets/stylish.jpeg"
import bags from "../../assets/bags.jpeg"
import {Helmet} from "react-helmet";

export default function Brands() {
  const {Data}=useFetch("https://ecommerce.routemisr.com/api/v1/brands")
  console.log(Data)
  return (
   <>
   <div className="gridContainer container mx-auto pt-8 p-4 ">
  <div className="A grid-item"><img src={clothes} className='object-cover w-full '></img><div className="layer"></div></div>
  <div className="B grid-item"><img src={bags} className='object-cover w-full'></img><div className="layer"></div></div>
  <div className="C grid-item"><img src={essentials} className='object-cover w-full'></img><div className="layer"></div></div>
  <div className="D grid-item"><img src={tech} className='object-cover w-full'></img><div className="layer"></div></div>
  <div className="E grid-item"><img src={smart} className='object-cover w-full'></img><div className="layer"></div></div>
</div>
<div className="flex flex-wrap container mx-auto ">
  {Data?.data.data.map((brand) => (
    <div className=" w-1/3 p-3 product">
    <div key={brand._id} className="text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img src={brand.image}></img>
       <h5 className="p-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {brand.name}
      </h5>
    </div></div>
  ))}
</div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
            
            </Helmet>
   </>
  )
}
