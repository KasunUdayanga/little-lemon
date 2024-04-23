import React from "react";
import restauranfood from "../img/restauranfood.jpg";
import { Router, Route, Link } from 'react-router-dom';
import BookingForm from "./BookingForm";

const home = () =>{
    return(
        <div class="container" style={{position: "relative"}}>
            <div class="text" style={{backgroundColor: "#004225", paddingBottom: "80px"}}>
                <h1 style={{fontFamily: "markazi text",
                            color: "#f4ce14",
                            fontSize: "64px",
                            marginLeft: "250px",
                            paddingTop: "30px"}}>
                            Little Lemon
                </h1>
                <h3 style={{fontFamily: "karla",
                            marginLeft: "250px",
                            fontSize: "40px",
                            marginTop: "-50px",
                            color: "#ffffff"}}>
                            Chicago
                </h3>
                <p style={{fontFamily: "karla", marginLeft: "250px", fontSize: "18px", color: "#ffffff", marginTop:"-25px"}}>
                    We are a family owned Mediterranean restaurant, <br></br>focused on traditional recipes served with the modern twist.
                </p>
                <a href="./booking" style={{fontFamily: "karla",
                                marginLeft: "260px",
                                marginBottom: "20px",
                                backgroundColor: "#f4ce14",
                                borderRadius: "10px",
                                padding: "10px",
                                paddingRight: "50px",
                                paddingLeft: "50px",
                                fontSize: "20px"}}>Reservations</a>
                <img src={restauranfood}
                     width={350} height={300} alt="restaurant food"
                     style={{position: "absolute", left: "900px",
                            top: "20px",
                            height: "400px",
                            borderRadius: "20px"}
                        }
                >
                </img>
            </div>
        </div>
    );
};




export default home;