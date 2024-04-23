import React from "react";
import B from "../img/B.jpg"
import "./content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";

const foot = () => {
    return(
        <footer className="footer" style={{paddingLeft: "160px", paddingRight: "160px"}}>
            <div className="left-side">
                <img className="footimg" src={B} width={300} height={200} alt="logo"></img>
            </div>
            <ul className="right1">
                <p>Doormat Navigate</p>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul className="right2">
                <p>Contact</p>
                <li><a href="">Address</a></li>
                <li><a href="">Phone</a></li>
                <li><a href="">Email</a></li>
            </ul>
            <ul className="right3">
                <p>Socail Media</p>
                <li><a href="https://facbook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} size="1x" /> Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="1x" /> Instagram</a></li>
                <li><a href="https://youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} size="1x" /> Youtube</a></li>
                <li><a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="1x" /> Twitter</a></li>
            </ul>
        </footer>
    );
};

export default foot;