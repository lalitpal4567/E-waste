import React from 'react'
import "../product/Product.css";

const Product = () => {
    return (
        <>
            <div class="cont">
                <div class="pro" id="pro1">
                    <img src="/images/img1.png" alt="Product img" class="img" />
                    <div class="imgdesc" id="name">
                        <h2>
                            {/* <!-- Product type and product brand should be extracted from backend --> */}
                            {/* <!-- The url should take the customers to respective laptop and lenovo section --> */}
                            {/* <!-- Product Type:<a href="url">Laptop</a><br/> */}
                            Product Brand:<a href="url">Lenovo</a>
                        </h2>
                        <a href="url">
                            <h4>click here for more info</h4>
                        </a>

                    </div>
                </div>
                <div class="pro">
                    <div class="tit">
                        <h1> Lenovo 14" Laptop, Intel Core i5 Processor 16GB RAM 256GB SSD 2160 x 1440 Pixels </h1>
                    </div>
                    <div class="price">
                        <h2>  Expected Price</h2>

                    </div>
                    <div class="seller">
                        {/* <!-- <br> --> */}
                        <h2>seller Description</h2>
                        <div class="btn">
                            Chat with seller
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product
