import React from 'react'
import "../login/Login.css";

const Login = () => {
    return (
        <div class="main">
            <div class="sign-up">
                <h2> Be a part of our community</h2>
                <div class="formgrp">
                    <input type="text" name="" placeholder="Enter your name" required />
                </div>
                <div class="formgrp">
                    <input type="text" name="" placeholder="Enter your email" required />
                </div>
                <div class="formgrp">
                    <input type="number" name="" placeholder="Enter your phone number" required />
                </div>
                <div class="formgrp">
                    <input type="password" placeholder="Enter Password" value="" id="myInput" required />
                </div>

                <div class="btn">
                    <a href="login.html"> Sign In</a>
                </div>
            </div>

        </div>
    )
}

export default Login
