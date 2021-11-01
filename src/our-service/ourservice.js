import React from 'react'
import "./ourservice.css"
import {ReactComponent as Shape} from "./Vector.svg";
import Bike from "./bike.png";
import {AiOutlineArrowLeft} from "react-icons/all";
import {AiOutlineArrowRight} from "react-icons/all";
import Slider from "react-slick";


function Ourservice() {
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className="">
                <div className="active" onClick={onClick}>
                    <AiOutlineArrowRight/>
                </div>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="">
                <div className="inactive" onClick={onClick}>
                    <AiOutlineArrowLeft/>
                </div>
            </div>

        );
    }

    const settings={
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>

    };
    return (
        <div className="ourservice">
            <div className="shape-container">
                <Shape/>
            </div>
            <div className="slider">
            <Slider {...settings}>
                <div>
                    <div className="services">
                        <div className="service">
                            <h2>Universal eBike Kit</h2>
                        </div>
                        <img src={Bike} className="image-container" alt=""/>
                        <div className="value">
                            <div className="prices">
                                <h3>Price</h3>
                                <p>$750</p>
                            </div>
                            <div className="order-button">
                                <a href="#">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services">
                        <div className="service">
                            <h2>Universal eBike Gear</h2>
                        </div>
                        <img src={Bike} className="image-container" alt=""/>
                        <div className="value">
                            <div className="prices">
                                <h3>Price</h3>
                                <p>$750</p>
                            </div>
                            <div className="order-button">
                                <a href="#">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services">
                        <div className="service">
                            <h2>Universal eBike Teknik</h2>
                        </div>
                        <img src={Bike} className="image-container" alt=""/>
                        <div className="value">
                            <div className="prices">
                                <h3>Price</h3>
                                <p>$750</p>
                            </div>
                            <div className="order-button">
                                <a href="#">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services">
                        <div className="service">
                            <h2>Universal eBike Machine</h2>
                        </div>
                        <img src={Bike} className="image-container" alt=""/>
                        <div className="value">
                            <div className="prices">
                                <h3>Price</h3>
                                <p>$750</p>
                            </div>
                            <div className="order-button">
                                <a href="#">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services">
                        <div className="service">
                            <h2>Universal eBike Services</h2>
                        </div>
                        <img src={Bike} className="image-container" alt=""/>
                        <div className="value">
                            <div className="prices">
                                <h3>Price</h3>
                                <p>$750</p>
                            </div>
                            <div className="order-button">
                                <a href="#">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services">
                        <div className="service">
                            <h2>Universal eBike Model</h2>
                        </div>
                        <img src={Bike} className="image-container" alt=""/>
                        <div className="value">
                            <div className="prices">
                                <h3>Price</h3>
                                <p>$750</p>
                            </div>
                            <div className="order-button">
                                <a href="#">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
        </div>
    )
}

export default Ourservice;