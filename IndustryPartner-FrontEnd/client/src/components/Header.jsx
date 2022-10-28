import React from "react";
import logo3 from './logo3.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import  Main from './TalentSpotlight/Main.jsx'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Header() {
     const [cookies, setCookie, removeCookie] = useCookies([]);
    const logOut = () => {
    removeCookie("jwt");
    };
    
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark flex-sm-nowrap flex-wrap">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo3}
                            alt="Digital futures logo" className="logoimage" /> DFX
                    </a>
                    <div className="navbar-collapse collapse flex-grow-1 justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <a class="nav-item nav-link 1" href="#"> Talk to us {/*<span class="sr-only">(current)</span></a>*/}
                            {/* <a class="nav-item nav-link 2" href="#"> Home button </a> */}
                            {/* <a class="nav-item nav-link 3" href="#"> Your requirements </a> */}
                            <a className="nav-item nav-link 4" href="https://digitalfutures.com/contact/" > Talk to us</a>
                            <a className="nav-item nav-link 4" href="/"> Talent spotlight </a>
                            <a onClick={logOut} className="nav-item nav-link 4" href="/">Log out </a>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}


export default Header;



