import React from 'react'
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Navbar  from "./Navbar/Navbar";
import Routers from './Main/Navigation';
import Footer from './Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routers/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;