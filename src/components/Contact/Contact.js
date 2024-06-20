import React from 'react'
import "./Contact.css"
import contact from "../../assets/contact.jpg"
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <>
    <div className="contact-con">
        <div className="left">
            <img src={contact} alt="" />
        </div>
        <div className="right">
            <h1>WE VALUE OUR CUSTOMERS</h1>
            <div className="info">
                <input type="text" placeholder='Enter Your Name ...'/>
                <input type="text" placeholder='Enter Your Email ...' />
                <input type="text" placeholder='Enter Your City ...'/>
                <input type="number" placeholder='Enter Your Phone No ...' />
                <textarea id='msg' rows="20" cols="80" placeholder='Enter Your Message ...'/>
                <input type="button" value="Submit" id='btn'/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact