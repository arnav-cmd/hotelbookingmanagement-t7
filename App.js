import React,{useState,useEffect} from 'react';
import './App.css';
import Footer from './Components/footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Approutes from './routes';
import UserNavbar from './Components/usernavbar';
function App() {
  const [isAuthenticated,setAuthenticated]=useState(false);
  useEffect(()=>{
    const token=sessionStorage.getItem('token');
    setAuthenticated(token!==null);
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Approutes isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
