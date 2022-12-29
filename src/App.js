import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ProductDetail from './Components/Products/ProductDetail';
import ProductsByCategory from './Components/Products/ProductsByCategory';
import ProductTile2 from './Components/Products/ProductTile2';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function App() {

const [data, setData] = useState("")


useEffect(()=>{
let URL =  `https://public-api.wordpress.com/rest/v1.1/sites/stockoddsus.wordpress.com/posts/`

axios.get(URL).then(res =>{    
  console.log(res.data.posts)
  // .data.posts = arr of all posts obj

  setData(res.data.posts[1].content)
}).catch(e =>{
  setData("Hey man, thats not too cool.")
})

},[])

function f (d){
  
  if(d != "")
  return (
    ReactHtmlParser(d)
  ) 
   return <p>Broken</p>
}


  return (
    <div className="App">
      <header className="App-header">
        Dont talk to me.
        {/* <div dangerouslySetInnerHTML={{_html: {data}}}> */}
          {/* {data}       */}
          {f(data)}
          {/* </div> */}
      </header>
    </div>
  );
}

export default App;
