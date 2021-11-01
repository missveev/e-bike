import React, { useEffect, useRef} from "react";
import './header.css';
import {Link, NavLink} from 'react-router-dom';
import {ReactComponent as Ellipse} from "./ellipse.svg";
import lottie from 'lottie-web';
import Ourservice from "../our-service/ourservice";
import Category from "../types/types";
import Info from "../type-info/info";
import Testimonial from "../testimonial/testimonial";
import Footer from "../footer/footer";

function Header() {
    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./Header lottie.json')
        })
    }, [])
    return (

        <div className="header">
            {/* Navigation goes here */}
            <div className="header-container">
                <div className="heading-nav">
                    {/* Logo stays here*/}
                    <div className="logo-container">
                        <p className="B-logo">B</p>
                        <p className="text-logo">eBike</p>
                    </div>
                    {/* Options stays here*/}
                    <div className="options">
                        <Link to ='/' className="option selected"  >Products</Link>
                        <Link to ='/' className="option">Bike Type</Link>
                        <Link to ='/' className="option">About Us</Link>
                        <Link to ='/' className="option">Testimonials</Link>
                        <Link to ='/' className="option">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="ellipse-container">
                <Ellipse/>
            </div>
            <div className="section">
                <div className="text-section">
                    <div className="text-container">
                        <h2 className="headline">Your Bike Electric Update</h2>
                        <p className="description">Dummy text progressive, and affordable healthcare, accessible on
                            mobile and online for
                            everyone.</p>
                    </div>
                    <div className="search-container">

                        <input type="text" className="search-option" placeholder="Search Bike or anything"/>
                        <input type="submit" className="search-icon" value="Find"/>
                    </div>
                </div>
                <div className="illustration-section" ref={container}>
                </div>
            </div>

            <Ourservice/>
            <Category/>
            <Info/>
            <Testimonial/>
            <Footer/>
        </div>


    )
}


export default Header;