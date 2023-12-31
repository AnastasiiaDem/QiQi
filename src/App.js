import React from "react";
import "./App.scss";
import {useLocation} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./components/Routing";
import {BasketProvider} from "./hooks/CartContext";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  const location = useLocation();
  
  const knownRoutes = ["/", "/shop", "/about", "/contacts", "/cart"];
  
  const isKnownRoute =
    knownRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/info/");
  
  useScrollToTop();
  
  return (
    <div className="flex flex-col bg-white text-[#030303]">
      <BasketProvider>
        {isKnownRoute && <Header/>}
        <Routing/>
        {isKnownRoute && <Footer/>}
      </BasketProvider>
    </div>
  );
}

export default App;
