import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./components/Routing";
import {BasketProvider} from "./hooks/CartContext";
import {useLocation} from "react-router-dom";

function App() {
  const location = useLocation();
  
  const isCheckoutRoute = location.pathname === '/checkout';
  
  
  return (
    <div className="flex flex-col bg-white text-[#000709]">
      <BasketProvider>
        {!isCheckoutRoute && <Header/>}
        <Routing/>
        {!isCheckoutRoute && <Footer/>}
      </BasketProvider>
    </div>
  );
}

export default App;

