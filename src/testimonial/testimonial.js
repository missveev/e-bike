import React from "react";
import "./testimonial.css";
import Rider from "./image 1.png";

function Testimonial() {
    return (
        <div className="Testimonial">
            <div className="testimonial-container">
                <div className="test-content">
                    <div className="text-con">
                        <h2 className="text-con">What our customer are saying</h2>
                    </div>
                    <div className="test-wrapper">
                        <div className="img-container">
                            <img src={Rider} className="img-photo" alt=""/>
                            <h3>Edward Newgate</h3>
                            <p>Pro-rider</p>
                        </div>
                        <div className="dummy">
                            <p className="dummy">Dummy Text progressive, and affordable accessible on mobile
                                and
                                online
                                for every healthcare not just work. We take pride in the solutions we deliver</p>
                        </div>
                    </div>
                </div>
                <div className="dot-container">
                    <span className="dot"/>
                    <span className="dot"/>
                    <span className="dot"/>
                </div>
            </div>

        </div>
    )
}

export default Testimonial;