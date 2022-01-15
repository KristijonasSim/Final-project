import React from 'react'
import { Products } from '../data'
import ShoesPage from '../components/pages/shoes-page/shoes-page'

// const womensProducts = Products.filter();

var MensShoesPage = () => {
  return (
    <div>
      <ShoesPage products={Products}/>
    </div>
  )
}

export default MensShoesPage
