import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/authentication/Login";
import SubProducts from "../components/pages/products/SubProducts";


export default function Router(props) {

   return (
      <>
         <Routes>
            <Route path="/" element={<Home {...props} />} />
            <Route path="/login" element={<Login {...props} />} />
            <Route path="/subProducts" element={<SubProducts {...props} />} />
         </Routes>
      </>
   );


}