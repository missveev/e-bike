import React, {Component} from 'react'
import "./ourservice.css"
import {ReactComponent as Shape} from "./Vector.svg";
import Bike from "./bike.png";
import {AiOutlineArrowLeft} from "react-icons/all";
import {AiOutlineArrowRight} from "react-icons/all";

class Ourservice extends Component {
    render() {
        return (
            <div className="ourservice">
                <div className="shape-container">
                    <Shape/>
                </div>
                <div className="service-section">
                    <div className="service-container">
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
                                    <a href="#" >Order</a>
                                </div>
                            </div>

                        </div>
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
                    <div className="more-options">
                        <div className="inactive">
                            <AiOutlineArrowLeft/>
                        </div>
                        <div className="active">
                        <AiOutlineArrowRight/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ourservice;