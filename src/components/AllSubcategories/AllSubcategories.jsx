import React from 'react'
import useFetch from '../../Hooks/useFetch'
export default function AllSubcategories() {
  const{Data}=useFetch("https://ecommerce.routemisr.com/api/v1/subcategories")
  console.log(Data,"sub")
  return (
    <>
  <div className="flex flex-wrap ">
  {Data?.data.data.map((sub) => (
    <div className=" w-1/3 p-3">
    <div key={sub._id} className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="p-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {sub.name}
      </h5>
    </div></div>
  ))}
</div>

    </>
  )
}
