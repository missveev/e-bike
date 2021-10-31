import React, {useEffect, useRef} from "react";
import {ReactComponent as Shapes} from "./Vector2.svg";
import "./info.css";
import lottie from "lottie-web";

function Info() {
    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./Rider lottie.json')
        })
    }, [])

    return (
        <div className="Information">
            <div className="info-container">
                <div className="illustration-container">
                    <div className="illustration" ref={container}>
                    </div>
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
                <div className="texting">
                    <h2 className="headline">Hybrid Bikes</h2>
                    <p className="description">Dummy Text progressive, and affordable accessible on mobile and online
                        for every healthcare not just work. We take pride in the solutions we deliver</p>
                    <a href="/" className="learn-more">Learn More</a>
                </div>
            </div>
            <div className="shape-contain">
                <Shapes/>
            </div>
        </div>
    )
}

export default Info;