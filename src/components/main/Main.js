import React from 'react'
import Item from '../item/Item'
import "../main/Main.css";

const Main = () => {
    return (
        <div className='wasteContainer'>
            <div class="poster">
                <img src="/images/poster1.webp" alt="" />
            </div>

            <div class="title">
                Sell Your E-waste Now,And start earning from it.
            </div>
            <div className='wasteItem'>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div class="fot1">
                Page:&nbsp; <a href="productview.html">1</a>&nbsp;
                |&nbsp;<a href="/FlaskHtmlFiles/productview.html">2</a>&nbsp;
                |&nbsp;<a href="productview.html">3</a>&nbsp;
                |&nbsp;<a href="productview.html">Next</a>&nbsp;
            </div>
        </div>
    )
}

export default Main
