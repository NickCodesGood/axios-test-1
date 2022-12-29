import React from 'react' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductTile from './Products/ProductTile'
import ProductTile2 from './Products/ProductTile2'
import ProductsList from '.Products/ProductsList'

const CategoryList = () => {


    const[arr, setArr] = useState([])
    const[categoryArr, setCategoryArr] = useState([])
    const[imgArr, setImgArr] = useState([])
    const[productCount, setProductCount] = useState([])

    useEffect(()=>{
    
      executeAxios(arg1)
    },[])

    useEffect(()=>{
      setLinks()
    },[arr])

    
    const executeAxios = async (arg) =>{
      
      let response = await axios(arg);

      //   axios(arg).then((response)=>{
      //   // console.log(response)
        console.log(response.data.products)
        setArr(response.data.products)
        
      // }).catch(error=>{
      //   // console.log(error)
      // })
      
    }
        

    let arg1 = {

      method: 'GET',
      url: "https://dummyjson.com/products?limit=100",
      
    
    }

      let setLinks = () =>{

        let newArr = []; //create new array  (holds image)
        let categories =[] //(category name)
        let countArr = []  //number of each product
        
        
        //newArr[0] correlated to categories[0]
        //coming from same smartphone object (p)
        //image of a smartphone correlated to category smartphone
        
         //for(let i =0; i<arr.length;i++) .... p = arr[i]
         for(let p of arr){
        
          if(!categories.includes(p.category)){
            categories.push(p.category) 
            newArr.push(p.images[0])
            countArr.push(1)
          } else{
        
            let indexWeWantToInc = categories.indexOf(p.category)
            countArr[indexWeWantToInc]++  
        
          }
        
        
         }
                
        let counter = 0;
                
        //spread operator  [...anotherArr] = copy contents of anotherArr into the empty arr []
        setCategoryArr([...categories])
        setImgArr([...newArr])
        setProductCount([...countArr])

        }
        

        function buildDivs (img,categoryName, productCount){

          return (
            <div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href={`/products/category/${categoryName}`}>
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
                  <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>{categoryName.replace("-", " ").toUpperCase()}</h6>
                  <small className="text-body">{productCount}</small>
                </div>
              </div>
            </a>
          </div>
          </div>
          )


        } 


        let mapDataIntoDivs = () =>{

            return (
            arr.map((product, index)=>{
              // let currrentIndex = categoryArr.indexOf(cat) // track index

              if(index % 5 === 0)

                return (
                   buildDivs(product.thumbnail, product.category, 5)
                  // buildDivs(.thumbnail, products.category, 5);

                )
            })
        
        
        )
        }

let catList = () =>{


    return(    
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
      {mapDataIntoDivs()}
      </div>
    </div>
    )

}





  return (
    <>
        {/* {catList()} */}
        {/* <ProductTile product = {arr[0]}/> */}
        {/* {allTiles()} */}
        {/* <ProductsList productArr={arr} tileClasses={""}/> */}
        
    </>
  )


}

export default CategoryList