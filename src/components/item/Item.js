import React from 'react'
import "../item/Item.css";

const Item = () => {
    return (
        <div class="pro" id="pro1">
            <img src="/images/img1.png" alt="Product img" class="img" />
            <div class="imgdesc" id="name">
                <h2>
                    {/* <!-- Product type and product brand should be extracted from backend --> */}
                    {/* <!-- The url should take the customers to respective laptop and lenovo section --> */}
                    Product Type:<a href="url">Laptop</a><br />
                    Product Brand:<a href="url">Lenovo</a>
                </h2>
                <a href="productfull.html" target="_blank">
                    <h4>click here for more info</h4>
                </a>
            </div>
        </div>
    )
}

export default Item
