import React from 'react'

const ProductTile2 = (product, bootClassName) => {

// const {propert1, propertyN} = object
const {title, price, discountPercentage, thumbnail}  = product.product



let buildDivs = (name, price, discountPercentage, thumbnail) => {


return ( 

    <div className={bootClassName}>
  <div className="product-item bg-light mb-4">
    <div className="product-img position-relative overflow-hidden">
      <img className="img-fluid w-100" src={thumbnail} alt="" />
      <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-search" />
        </a>
      </div>
    </div>
    <div className="text-center py-4">
      <a className="h6 text-decoration-none text-truncate" href="">
        {name}
      </a>
      <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>${price}</h5>
        <h6 className="text-muted ml-2">
          <del>${Math.round(100.00*(price / (1-(discountPercentage/100))))/100}</del>            
        </h6>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small>(99)</small>
      </div>
    </div>
  </div>
</div>


)




}
  
  
    return (
    <div>
        ProductTile2
        {buildDivs(title, price, discountPercentage, thumbnail)}
    </div>
  )
}

export default ProductTile2