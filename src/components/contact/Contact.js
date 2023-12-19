import React from 'react'
import "../contact/Contact.css";

const Contact = () => {
    return (
        <>
            <div class="cont">
                <div class="contact" id="one">
                    <h1>
                        Contact Us<br />
                    </h1>
                    <h1>
                        <i class="fa fa-envelope fa-fw"> </i> &nbsp;  <a href="https://gmail.com">jhaankitkumar12@gamil.com</a>
                    </h1>
                    <h1>
                        <i class="fa fa-phone fa-fw"> </i> &nbsp;  7292964532
                    </h1>
                    <h1>
                        Location:</h1><h1>Cluster Innovation Center, GC Narang Road, Delhi </h1>

                </div>
                <div class="contact" id="2">
                    <div class="top">
                        <h1>
                            Send us a message
                        </h1>
                    </div>
                    {/* <!-- <div class="forgrp"> --> */}
                    <div class="formgrp">
                        <input type="text" name="" placeholder="Enter your name" required />
                    </div>
                    <div class="formgrp">
                        <input type="text" name="" placeholder="Enter your email" required />
                    </div>
                    <div class="formgrp">
                        <input type="number" name="" placeholder="Enter your phone number" required />
                    </div>
                    <div class="mess">
                        <textarea rows="9" cols="60" placeholder="Your Message">

                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
