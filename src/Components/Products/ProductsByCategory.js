import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList';

const ProductsByCategory = ({categoryProps}) => {
  const [productsByCat, setProductsByCat] = useState([]);

  const getProductBy = async () => {


    const result = await axios.get(`https://dummyjson.com/products/category/${categoryProps}`);

    console.log(result.data.products);
    setProductsByCat(result.data.products);
    window.sessionStorage.setItem("data",result.data.products)
    // setCatImg(result.data.products);
  };
useEffect(() => {
  if(window.sessionStorage.getItem("data") === null){

    getProductBy();
  } else{
    // setProductsByCat()
    console.log(window.sessionStorage.getItem("data"))
    let regex = /\/products\/category\/[a-zA-Z]+$/i;
    console.log(window.location.pathname.match(regex)?.input)
  }
  }, []);

  const buildProductsByDiv = (productsByCat) => {
    
   

    return (
      <div className="col-lg-9 col-md-8">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Category Name</span>
                  </h2>
        <ProductsList
          productArr={productsByCat}
          classConfigs={"row pb-3"}
          tileClasses={"col-lg-4 col-md-6 col-sm-6 pb-1"}
        />
      </div>
    );
    }

  return (
    <>
    {buildProductsByDiv(productsByCat)}
    </>
  )
}

export default ProductsByCategory;


// ^ /products/category/[A-Za-z0-9]+$