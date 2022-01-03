import React from 'react'
import { Products } from '../data'
import ShoesPage from '../components/pages/man-shoes-page/shoes-page'
function WomensShoesPage() {
  return (
    <div>
      <ShoesPage products={Products}/>
    </div>
  )
}

export default WomensShoesPage
