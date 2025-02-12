import React from 'react'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import {Helmet} from "react-helmet";

export default function Products() {
  return (
    <>
    <FeatureProducts/>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
            
            </Helmet>
    </>
  )
}
