import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoryList from './Components/CategoryList';

function App() {










  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={coolImg} className="App-logo" alt="logo" /> */}

        {/* {getLinks()} */}
        <CategoryList/>
        
      </header>
    </div>
  );
}

export default App;
