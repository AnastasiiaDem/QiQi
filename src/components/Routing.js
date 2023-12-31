import React from 'react'
import {Route, Routes} from "react-router-dom";
import About from "../pages/About/About";
import Main from "../pages/Main/Main";
import Shop from "../pages/Shop/Shop";
import Contacts from "../pages/Contacts/Contacts";
import Cart from "../pages/Cart/Cart";
import NoMatch from "../pages/NoMatch/NoMatch";
import InDetails from "../pages/InDetails/InDetails";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/info/:productId" element={<InDetails />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
