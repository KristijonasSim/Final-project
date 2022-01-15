import React from 'react'
import { Products } from '../data'
import ShoesPage from '../components/pages/shoes-page/shoes-page'

var WomensShoesPage = () => {
  return (
    <div>
      <ShoesPage products={Products}/>
    </div>
  )
}

export default WomensShoesPage
