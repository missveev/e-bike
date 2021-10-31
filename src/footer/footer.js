import React, {Component} from "react";
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="footer-container">
                    <div className="footer-con">
                        <div className="footer-head">
                            <div className="F-logo-container">
                                <p className="FB-logo">B</p>
                                <p className="Ftext-logo">eBike</p>
                            </div>
                            <div className="footer-link">
                                <p className="Fdescription">Dummy text progressive, and affordable healthcare,
                                    accessible on
                                    mobile and online for
                                    everyone.</p>
                                <div className="copyright">
                                    <p>eBike 2021. All right reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-con">
                        <div className="footer-head">
                            <h3>Company</h3>
                            <div className="footer-link">
                                <a href="/">Product</a>
                                <a href="/">Bike Type</a>
                                <a href="/">About Us</a>
                                <a href="/">Contact</a>
                            </div>
                        </div>

                    </div>
                    <div className="footer-con">
                        <div className="footer-head">
                            <h3>Help</h3>
                            <div className="footer-link">
                                <a href="/">Product</a>
                                <a href="/">Bike Type</a>
                                <a href="/">About Us</a>
                                <a href="/">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;