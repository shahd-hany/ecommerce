import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import {Helmet} from "react-helmet";

export default function Categories() {
  const {Data}=useFetch("https://ecommerce.routemisr.com/api/v1/categories")
  console.log(Data)
  return (
    <>
    <div className="flex p-6 gap-14 ">
      <div className="w-1/4 flex flex-col space-y-4">
      {Data?.data.data.map((category,index)=>( 
<Link to={`/Categories/subcategory/${category._id}`} className={`block max-w-sm p-6 categ-${index} border-gray-200 rounded-lg shadow-sm hover:bg-slate-400`} key={category._id}>
  <h5 className="p-2 text-2xl font-bold tracking-tight text-white dark:text-white">{category.name}</h5>
</Link>
    ))}
      </div>
      <div className="w-3/4">
      <Outlet/>
      </div>
   </div>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Categories</title>
            
            </Helmet>
    </>
  )
}
