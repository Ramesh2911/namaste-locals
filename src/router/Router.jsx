import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/authentication/Login";
import SubProducts from "../components/pages/products/SubProducts";
import ProductList from "../components/pages/products/ProductList";
import ProductDetails from "../components/pages/products/ProductDetails";


export default function Router(props) {

   return (
      <>
         <Routes>
            <Route path="/" element={<Home {...props} />} />
            <Route path="/login" element={<Login {...props} />} />
            <Route path="/subProducts" element={<SubProducts {...props} />} />
            <Route path="/list-product" element={<ProductList {...props} />} />
            <Route path="/product-details" element={<ProductDetails {...props} />} />
         </Routes>
      </>
   );


}