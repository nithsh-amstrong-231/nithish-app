import React from "react";
import "./App.css";
import{Routes} from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "../src/Components/NavBar";
import Home from "../src/Header/Pages/Home";
import Aboutus from "../src/Header/Pages/AboutUs";
import Gallery from "../src/Header/Pages/Gallery";
import Shop from "../src/Header/Pages/Shop";
import Login from "../src/Header/Pages/Login";
import Contactus from "../src/Header/Pages/ContactUs"
import Career from "../src/Header/Pages/Career";
import Blogs from "../src/Header/Pages/Blogs";

function App(){
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/aboutUs" element={<Aboutus/>}/>
                <Route path="/contactUs" element={<Contactus/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/career" element={<Career/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
            </Routes>
        </Router>
    )
}

export default App