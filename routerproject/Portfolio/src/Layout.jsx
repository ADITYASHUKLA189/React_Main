import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
           <Header/>
           <Outlet/>
           <Footer/>
        </>
    );
}