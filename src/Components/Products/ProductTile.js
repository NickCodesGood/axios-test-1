import React from 'react'

const ProductTile = (product, classConfig) => {

if(product.product === undefined) return null

const { title, price, images, id, discountPercentage } = product.product


let tile = (title, price, images, id, discountPercentage) => {

    return (
    <>
  {/* Product Tile Start */}
  <div className={classConfig}>
    <div className="product-item bg-light mb-4">
      <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src={images[0]} alt="" />
        <div className="product-action">
          <a className="btn btn-outline-dark btn-square" href=''>
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
        <a className="h6 text-decoration-none text-truncate" href={`/products/${id}`}>
          {title}
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>${price}</h5>
          <h6 className="text-muted ml-2">
            <del>${Math.round(price/(1-(discountPercentage/100)) * 100.00)/100}</del>
          </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
          <small className="fa fa-star text-primary mr-1" />
          <small className="fa fa-star text-primary mr-1" />
          <small className="fa fa-star text-primary mr-1" />
          <small className="fa fa-star-half-alt text-primary mr-1" />
          <small className="far fa-star text-primary mr-1" />
          <small>({id})</small>
        </div>
      </div>
    </div>
  </div>
  {/* Product Tile End */}
</>

)
}










  return (
    <div>
        ProductTile
        {tile(title, price, images, id, discountPercentage)}
    </div>
  )
}

export default ProductTile