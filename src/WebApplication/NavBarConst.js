import React from "react";
import "../App.css";
import {Routes} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Header/Pages/Home";
import AboutUs from "../Header/Pages/AboutUs";
import Gallery from "../Header/Pages/Gallery";
import Shop from "../Header/Pages/Shop";
import Login from "../Header/Pages/Login";
import ContactUs from "../Header/Pages/ContactUs";
import Career from "../Header/Pages/Career";
import Blogs from "../Header/Pages/Blogs";

function NavBarConst(){
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/contactUs" element={<ContactUs/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/career" element={<Career/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
            </Routes>
        </Router>
    )
}
export default NavBarConst;