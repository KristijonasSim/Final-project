import React from 'react'
import { Products } from '../data'
import ShoesPage from '../components/pages/man-shoes-page/shoes-page'

// const womensProducts = Products.filter();

function MensShoesPage() {
  return (
    <div>
      <ShoesPage products={Products}/>
    </div>
  )
}

export default MensShoesPage
