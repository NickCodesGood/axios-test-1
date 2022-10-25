import React from 'react' 
import { useState, useEffect } from 'react'
import axios from 'axios'

const CategoryList = () => {


    const[arr, setArr] = useState([])
    const[categoryArr, setCategoryArr] = useState([])
    const[productCount, setProductCount] = useState([])
    const[didRender, setDidRender] = useState(false)

    useEffect(()=>{
    
    executeAxios(arg1)
    // if(window.location.pathname === '/home')
    //   console.log("Yessir")
    if(!didRender)
        getLinks()
    },[didRender])
    
    const executeAxios = (arg) =>{
      
      axios(arg).then((response)=>{
        // console.log(response)
        console.log(response.data.products)
        setArr(response.data.products)
      }).catch(error=>{
        // console.log(error)
      })
    
    }
    
    let backticks = `/prod/cat/${categoryArr[0]}`

    let arg1 = {

        method: 'GET',
        url: "https://dummyjson.com/products?limit=100",
        
      
      }

      let getLinks = () =>{

        let newArr = []; //create new array  (holds image)
        let categories =[] //(category name)
        let countArr = []  //number of each product
        
        
        //newArr[0] correlated to categories[0]
        //coming from same smartphone object (p)
        //image of a smartphone correlated to category smartphone
        
         //for(let i =0; i<arr.length;i++) .... p = arr[i]
         for(let p of arr){
        
          // console.log(p)
        
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
        setDidRender(true)
        setProductCount([...countArr])


        }
        


        let repetition = () =>{
            return (
            categoryArr.map((cat)=>{
                return (
                    <div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                      <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
                          <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                        </div>
                        <div className="flex-fill pl-3">
                          <h6>{cat}</h6>
                          <small className="text-body">{productCount[categoryArr.indexOf(cat)]}</small>
                        </div>
                      </div>
                    </a>
                  </div>
                  </div>
                )
            })
        
        
        )
        }

let catList = () =>{


    return(
    <div>
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a className="text-decoration-none" href="">
            <div className="cat-item d-flex align-items-center mb-4">
              <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
                <img className="img-fluid" src="img/cat-1.jpg" alt="" />
              </div>
              <div className="flex-fill pl-3">
                <h6>{categoryArr[0]}</h6>
                <small className="text-body">100 Products</small>
              </div>
            </div>
          </a>
        </div>
       
      {repetition()}
      </div>
    </div>
    </div>

    )

}




let genericObj = () =>{

console.log(window.location.pathname )
if(window.location.pathname === '/') return <div> HOME PAGE!</div>
if(window.location.pathname === '/categories') return <div> CATEGORY LIST IS NOW INSIDE OF LAYOUT</div>

}

  return (
    <div>
        {catList()}
        {genericObj()}
    </div>
  )


}

export default CategoryList