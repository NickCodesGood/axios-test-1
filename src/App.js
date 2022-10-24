import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {


const[coolImg, setCoolImg] = useState("a cool image");
const[cat, setCat] = useState([]);
const[arr, setArr] = useState([])

useEffect(()=>{






// axios(arg1).then((response)=>{

// console.log(response.data)
// setCoolImg(response.data[0].urls.regular)

// console.log(cat.data)
// }).catch(error=>{
//   console.log(error)
// })

axios(arg2).then((response)=>{

// console.log(response.data)
setCat(response.data)

}).catch(error=>{
  console.log(error)
})
// ----------------------------- //

axios(arg3).then((response)=>{

console.log(response.data)

//enhanced for loop 
for(let products of response.data){ // instead of i=0; i<arr.length; i++
  // products = response.data[i]
console.log(products)

}

}).catch(error=>{
  console.log(error)
})




},[])


let optionData = () =>{



return (
<ul>
  {cat.map((obj)=>{


    return(
      <li value={obj}> {obj}</li>
      )

  })
}
</ul>
)



}








let arg3 = {

  method: 'GET',
  url: "https://dummyjson.com/products?limit=100",
  

}

let arg2 = {

  method: 'GET',
  url: "https://dummyjson.com/products/categories"

}



let arg1 = {

  method: 'GET',
  url: "https://api.unsplash.com/photos/",
  headers:{
    Authorization: "Client-ID X-2J-7eV-aQWMm4Npx2azXb51-tsmUeDgR6q3cgGI5M",
  }


}





let getLinks = () =>{

return(
cat.map((item)=>{  


  
  return (
  <p><a href={`https://google.com/${cat}`}>{item.replace("-"," ").toUpperCase()}</a></p>
  )

    

})
)



}




  return (
    <div className="App">
      <header className="App-header">
        <img src={coolImg} className="App-logo" alt="logo" />

        {getLinks()}
        {optionData()}
        
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
