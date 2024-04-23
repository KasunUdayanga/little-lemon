import React from "react";
import logo from "../img/logo.png";
import "./content.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage'



const nav = () => {
    return(
        <Router>
            <nav className="navigation">
                <Link to="/">
                    <img className="navimg" src={logo} width={200} height={50} alt="logo" />
                </Link>
                <ul className="navcontent">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </Router>
    );
};



export default nav;