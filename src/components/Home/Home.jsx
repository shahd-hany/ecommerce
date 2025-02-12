import React from 'react'
import HomeSmallSlider from '../HomeSmallSlider/HomeSmallSlider'
import CategorySlider from '../CategorySlider/CategorySlider'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import {Helmet} from "react-helmet";

export default function Home() {
  return (
    <>
      <HomeSmallSlider/>
      <CategorySlider/>
      <FeatureProducts/>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            
            </Helmet>
    </>
  )
}
