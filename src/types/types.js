import React, {Component} from "react";
import Byke from "./smallbike.png"
import "./types.css"

class Category extends Component {
    render() {
        return (
            <div className="types">
            <div className="section-type">
                <div className="section-info">
                    <h2>Other Types Of Bikes</h2>
                </div>
                <div className="bike-category">
                    <div className="img-con">
                        <img src={Byke} className="img-container select" alt=""/>
                        <div className="img-desc">
                            <p>Hybrid Bikes</p>
                        </div>
                    </div>
                    <div className="img-con">
                        <img src={Byke} className="img-container" alt=""/>
                        <div className="img-desc">
                            <p>Hybrid Bikes</p>
                        </div>
                    </div>
                    <div className="img-con">
                        <img src={Byke} className="img-container" alt=""/>
                        <div className="img-desc">
                            <p>Hybrid Bikes</p>
                        </div>
                    </div>
                    <div className="img-con">
                        <img src={Byke} className="img-container" alt=""/>
                        <div className="img-desc">
                            <p>Hybrid Bikes</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Category;