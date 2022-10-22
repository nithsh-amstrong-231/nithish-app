import React from "react";
import Footer from "../Components/Footer";
import "../App.css";
import {Routes} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function FooterConst(){
    return(
        <div className="page-container">
            <div className="content-wrap">
                   <Footer/>
                
            </div>
        </div>
    )
}
export default FooterConst;