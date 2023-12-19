import React from 'react'
import "../footer/Footer.css";

const Footer = () => {
    return (
        <div class="cont">
            <div class="foot1">
                <div class="linktoplaces">
                    <a href="productview.html"> Home&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                </div>
                <div class="linktoplaces">
                    <a href="aboutus.html">About Us&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                </div>
                <div class="linktoplaces">
                    <a href="faq.html"> FAQ's&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                </div>
                <div class="linktoplaces">
                    <a href="contact.html"> Contact&nbsp;&nbsp;</a>
                </div>

                <div class="sus">
                    To get the latest update plaese leave our email id here.
                </div>
                <div class="email">
                    <input type="email" name="Interested Email-Ids" placeholder="Enter your email" />
                </div>
                <div class="btn" id="susbtn">
                    SUBMIT
                </div>

                <div class="connect">
                    <h3>Connect with Us</h3><br />
                    <div class="scm">
                        <a href="https://facebook.com" target="_blank"> <i class="fa fa-facebook fa-fw">&nbsp;&nbsp;</i></a>
                        <a href="https://twitter.com" target="_blank"> <i class="fa fa-twitter fa-fw">&nbsp;&nbsp;</i></a>
                        <a href="https://instagram.com/ankitjha1405" target="_blank"> <i class="fa fa-instagram fa-fw">&nbsp;&nbsp;</i></a>
                        <a href="https://github.com/ankitjha1405" target="_blank"> <i class="fa fa-github fa-fw">&nbsp;&nbsp;</i></a>
                        <a href="https://www.linkedin.com/in/ankit-kumar-jha-0899b1201/" target="_blank"> <i class="fa fa-linkedin fa-fw">&nbsp;&nbsp;</i></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
