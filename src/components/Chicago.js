import React from "react";
import fish from "../img/fish.jpg";
import restaurantchefB from "../img/restaurantchefB.jpg";

const about = ()=>{
    return(
        <div style={{display: "grid",
                     gridTemplateColumns: "repeat(2, 1fr)",
                     backgroundColor: "#004225",
                     paddingLeft: "200px",
                     paddingRight: "200px",
                     justifyContent: "center",
                     alignItems: "center",
                     paddingTop: "50px",
                     paddingBottom: "50px",
                     marginTop: "-80px"}}>
            <div style={{paddingRight: "-100px", gap: 8}}>
                <h1 style={{fontFamily: "markazi text",
                                color: "#f4ce14",
                                fontSize: "64px",
                            }}>
                                Little Lemon
                </h1>
                <h3 style={{fontFamily: "karla",
                                fontSize: "40px",
                                marginTop: "-50px",
                                color: "#ffffff"}}>
                                Chicago
                </h3>
                <p style={{color: "#ffffff"}}> We are a family owned
                    Mediterranean restaurant,
                    focused on traditional recipes
                    served with the modern twist.
                    Join us as we invite you to savor
                    the best of both worlds, where
                    tradition meets innovation, only
                    at our restaurant.
                </p>
            </div>
            <div style={{ position: "absolute", right: 200 }}>
                <img src={fish} width={300} height={345} style={{ position: "relative", zIndex: 1, borderRadius: "10px" }} alt="fish" />
                <img src={restaurantchefB} width={350} height={250} style={{ position: "relative", zIndex: 2, marginLeft: -100, marginTop: 10, borderRadius: "10px"}} alt="chef" />
            </div>
        </div>
    );
};

export default about;