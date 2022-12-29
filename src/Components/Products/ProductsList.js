import React from 'react'
import ProductTile from './ProductTile'
import ProductTile2 from './ProductTile2'

const ProductsList = ({productArr, classConfigs, tileClasses}) => {

console.log(productArr)

let generateTiles = () =>{

return (
    productArr.map((productFromMap)=>{

        return(
            <ProductTile2 product={productFromMap} bootClassName={tileClasses}/>
        )
    })
)



}


  return (
    <div>
        ProductsList

        {generateTiles()}

    </div>
  )
}

export default ProductsList