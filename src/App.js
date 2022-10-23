import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {


const[coolImg, setCoolImg] = useState("a cool image");
const[cat, setCat] = useState([]);


useEffect(()=>{


axios(arg2).then((response)=>{

console.log("dummy JSON", response.data)
setCat(response.data)

console.log(cat.data)
}).catch(error=>{
  console.log(error)
})




},[])


let arg2 = {

  method: 'GET',
  url: "https://dummyjson.com/products/categories"

}



let axiosArg = {

  method: 'GET',
  url: "https://api.unsplash.com/photos/",
  headers:{
    Authorization: "Client-ID X-2J-7eV-aQWMm4Npx2azXb51-tsmUeDgR6q3cgGI5M",
  }


}




  return (
    <div className="App">
      <header className="App-header">
        <img src={coolImg} className="App-logo" alt="logo" />

        <a href='https://google.com'> <p>{cat[0]}</p> </a>
        <p>{cat[1]}</p>
        <p>{cat[2]}</p>
        <p>{cat[3]}</p>

        
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
