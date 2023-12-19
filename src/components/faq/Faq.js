import React from 'react'
import "../faq/Faq.css";

const Faq = () => {
  return (
    <>
         <div class="upper">
        <div class="top" id="left">
            <p> Hello,<br/>
                how can we help you?</p>
        </div>
        <div class="top" id="right">
            <p>Search your query</p>
            <div class="inp">
                <input type="text" placeholder="Search by topic or keyword"/>
            </div>
        </div>
    </div>
    <div class="tit">
        Some Frequently Asked Questions
    </div>
    <div class="cont">
        <div class="ques" id="one">
            <div class="question">
                Q. What is E-waste?
            </div>
            <div class="answer">
                E-waste is basically anything in which any kind of electric things are present in it.For
                example
                remote
                control cars, mobiles, laptops, batteries etc.
            </div>
        </div>
        <div class="ques" id="two">
            <div class="question">
                Q. What Qualifies As E-Waste?
            </div>
            <div class="answer">
                Below is a common but incomplete list of electrical / electronic items that can be qualified as
                E-Waste
                at
                the end of life:

                IT Related Items (Servers, Telecommunication equipment, Desktop CPUs, Laptops, Monitors, Printers,
                Scanners,
                Fax machines, Telephones, Keyboard, Mouse and related cables)
                Domestic appliances (Fridges, Washing machines, ACs, TVs, Radios, Audio equipment, Fans, Microwaves,
                Electric Kettles, OTGs, Mixer grinders, Geysers, UPS systems (excluding batteries), Cell-phones,
                Landline
                phones, routers, Dish TV systems and set-top boxes, remote controls, pumps, motors, electrical
                panels
                Unbroken CFLs and tube-lights, LED and other light fixtures, electrical wire and cables.
            </div>
        </div>
        <div class="ques" id="three">
            <div class="question">
                Q. What is IT hardware destruction ?
            </div>
            <div class="answer">
                IT hardware destruction and data destruction are almost similar terms. Both are the processes that
                are
                used
                to securely destroy the data available on laptops, hard disks, and another form of electronic media.

                E waste recycling companies also issues destruction certificate With this evidence one get ensured
                that
                the
                data is completely destroyed and cannot be accessed for any unauthorized process.

                To Recycle your E waste submit your details : <a href="login.html">Click Here</a>
            </div>
        </div>
        <div class="ques" id="four">
            <div class="question">
                Q. What is E-waste Data Destruction & Why is it Important?

            </div>
            <div class="answer">
                E-waste data destruction basically means dismantling & recycling of your old electrical and
                electronic
                items and ensuring that all the important data baring materials such as hard disk, floppy drive, pen
                drive, memory cards has been deleted. E-waste and data destruction is important for a number of
                reasons.

                Keep business data protected
                It safeguards the environment
                Recycle the e-waste according to the pollution control board
                Ensures secure data destruction as per industry standards to protect your company privacy

            </div>
        </div>
        <div class="ques" id="five">
            <div class="question">
                Q. Why is E-waste management important?
            </div>
            <div class="answer">
                E-waste management is important to keep electrical and electronic waste out of landfills. Damaged
                computers, laptops, mobile devices, televisions, and even household appliances are considered to be
                E-waste. When improperly disposed of, the toxic elements in e-waste can pollute the environment. That is
                why e waste recycling can significantly reduce the increasing risks of greenhouse gas emissions.
            </div>
        </div>
        <div class="ques" id="six">
            <div class="question">
                Q. How can i get paid here?
            </div>
            <div class="answer">
                When you have made the post of the waste you want to sell. We will verify the image and product and make
                sure that all the necessary details are given then we will uplaoad your post to our website. Thias
                process will take a time of max 24 hours. and after your post has been posted on website then anyone
                from the world can see it and if they need that product they will contact you regarding this.
            </div>
        </div>
        <div class="ques" id="ultima">
            <div class="question">
                If you have some another query, feel free to ask us!
                <div class="ask">
                    <div class="formgrp" id="1">
                        <input type="text" name="" placeholder="Enter your name" required/>
                    </div>
                    <div class="formgrp" id="2">
                        <input type="text" name="" placeholder="Enter your email" required/>
                    </div>
                </div>
            </div>
            <textarea rows="5" cols="80" placeholder="Describe your query in deatil"></textarea>
            <div class="but">
                <div class="btn">
                    &nbsp;&nbsp; &nbsp;Send&nbsp;&nbsp; &nbsp;
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Faq
