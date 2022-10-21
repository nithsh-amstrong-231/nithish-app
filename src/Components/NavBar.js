import React, {useState}from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from "../Header/Pages/logo.png";
function NavBar(){
    const [icon, setIcon]=useState(false);
    const handleClick = ()=>{
        setIcon(!icon)
    }
    const closeSideDrawer = ()=>{
        setIcon(false)
    }
    return(
        <div>
        <nav className="navbar">
            <Link to = "/" className="nav-logo"onClick={closeSideDrawer } ><img id="logo" src={logo}/></Link>
            <div className="menu-icon" onClick={handleClick}>{icon ? <FaTimes className="fa-times"></FaTimes>:
            <FaBars className="fa-bars"></FaBars>}</div>
            <ul className={icon ? 'nav-menu active':'nav-menu'}>
                <li><Link to = "/" className="nav-links"onClick={closeSideDrawer}>Home</Link></li>
                <li><Link to="/gallery" className="nav-links"onClick={closeSideDrawer}>Gallery</Link></li>
                <li><Link to="/blogs" className="nav-links"onClick={closeSideDrawer}>Blogs</Link></li>
                <li><Link to="/shop"className="nav-links" onClick={closeSideDrawer}>Shop</Link></li>
                <li><Link to="/career" className="nav-links"onClick={closeSideDrawer}>Career</Link></li>
                <li><Link to="/contactUs"className="nav-links"onClick={closeSideDrawer}>Contact Us</Link></li>
                <li><Link to="/aboutUs"className="nav-links"onClick={closeSideDrawer}>About Us</Link></li>
                <li><Link to="/login"className="nav-links"onClick={closeSideDrawer}>Login</Link></li>
            </ul>
        </nav>
        </div>
    )
}
export default NavBar;