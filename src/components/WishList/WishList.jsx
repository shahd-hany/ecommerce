import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWhishList, removeFromWhish } from '../../Redux/WhishList.js'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader.jsx'
import {Helmet} from "react-helmet";

export default function WishList() {
  const dispatch=useDispatch()
const {whishlist ,wishListLoading,items}= useSelector((state)=>state.whishlistreducer)
  async function getwhishlist(){
     dispatch(getWhishList())
  }
  async function removeFromWhishList(productId){
    dispatch(removeFromWhish(productId))
  }
  useEffect(()=>{
  getwhishlist()
  },[whishlist])

  return (
    <>
    {wishListLoading ? ( <Loader/>) : (<>
     <div className='text-center pt-8 space-y-4'>
     <h1 className='text-4xl font-Roboto font-light'>Whishlist</h1>
     <h5 className='text-1xl font-EncodeSansExpanded font-light'>{items}<span className='ps-2'>Items</span></h5>
     </div>
 
     <div className="flex container flex-wrap mx-auto p-20 pt-10">
      {
       whishlist.map((product)=>(
         <div className="sm:w-full md:w-1/2 lg:w-1/4 whish-border " key={product._id}>
         <div className=" overflow-hidden">
           <Link to={`/productDetails/${product._id}/${product.category.name}`}>
             <img src={product.imageCover} alt={product.name} className="w-full" />
             <div className='space-y-1 ps-4 pe-4 pt-2 overflow-hidden h-20'>
             <h3 className=" font-semibold ">{product.title}</h3>
               <p className="font-light ">{product.description}</p>
              </div>
              <div className="text-start ps-4 pe-4 pt-2">
              <p> ${product.price}</p>
              </div>
           </Link>
 
           <div className="text-start p-4 space-y-2">
             <button
               className="text-white whish-btn w-full"
               onClick={() => addToCart(product._id)}
             >
               <i className="fa fa-cart-shopping p-3"></i>Add to Cart
             </button>
             <button  type="button"onClick={ ()=>{ removeFromWhishList(product._id)}
              }><h5 className='text-1-xl underline text-gray-700 hover:text-black'>Remove</h5></button>
           </div>
           
           </div></div>
           
       ))
      }</div>
    </>)}
    <Helmet>
                <meta charSet="utf-8" />
                <title>Whishlist</title>
            
            </Helmet>
    </>
  )
}
