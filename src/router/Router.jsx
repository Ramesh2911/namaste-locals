import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/authentication/Login";


export default function Router(props) {


   return (
      <>
         <Routes>
            <Route path="/" element={<Home {...props} />} />
            <Route path="/login" element={<Login {...props} />} />
         </Routes>
      </>
   );


}