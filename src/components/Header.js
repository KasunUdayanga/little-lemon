import React from "react";
import { Helmet } from "react-helmet";

const metatags = () =>{
    return(
        <>
            <Helmet>
                <meta name="og:title" content="Little Lemon Restaurant"/>
                <meta name="og:description" content="Little Lemon Restaurant:  We are a family owned Mediterranean restaurant, focused on traditional recipes served with the modern twist based in Chicago"/>
                <meta name="og:image" content="logo.png"/>
                <meta name="og:locale" content="en_US"/>
            </Helmet>
            <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
        </>
    );
};

export default metatags;