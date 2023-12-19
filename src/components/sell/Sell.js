import React from 'react'
import "../sell/Sell.css";

const Sell = () => {
  return (
    <>
         <div class="cont">
        <div class="con1" id="input">
            <h1>Sell your E-Waste</h1>
            <h4> Choose your product category:</h4>
            <select class="product_type">
                <option value="">***select any one***</option>
                <option value="Earphones/Headphones">Earphones/Headphones</option>
                <option value="Fridge">Fridge</option>
                <option value="Laptop/TV">Laptop/TV</option>
                <option value="cables">cables</option>
                <option value="Telecom Equipments">Telecom Equipments</option>
                <option value="Battery Disposal">Battery Disposal</option>
            </select>
            <div class="probrand">
                <h4>Choose your product Brand:</h4>
            </div>
            <select class="brand">
                <option value="">***select any one***</option>
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="redmi">Redmi</option>
                <option value="lenovo">Lenovo</option>
                <option value="hp">Hp</option>
                <option value="dell">Dell</option>
            </select>

            <div class="desc">
                <div class="area"> Write something about your product </div>
                {/* <!-- <input type="text" placeholder="Describe about your product"> --> */}
                <textarea rows="4" cols="50" placeholder="Describe about your product"></textarea>
            </div>
        </div>

        <div class="con1">
            <div class="tit">
                Add images of the product
            </div>
            <img src="/images/add.png" alt="Click here to add your products"/>
            {/* <!-- <div class="btn">
                Submit
            </div> --> */}
            <div class="btn">
               <a href="sell.html">Post</a> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Sell
