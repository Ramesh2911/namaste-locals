import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Home from "../components/pages/Home";


export default function Router(props) {


   return (
      <>
         <Routes>
            {/* <Route path="/" element={<Header {...props} />} /> */}
            <Route path="/" element={<Home {...props} />} />
            {/* <Route path="/" element={<Footer {...props} />} /> */}
         </Routes>
      </>
   );


}