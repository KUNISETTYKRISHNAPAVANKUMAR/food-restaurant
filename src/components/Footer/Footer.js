import React from 'react'
import { FaPhone,FaWhatsapp,FaInstagram,FaYoutube,FaFacebook,FaTwitch,FaVoicemail, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import chef from "../../assets/chef-removebg-preview.png"
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-con'>
        <div className="top">
            <div className="top-specials">
                <h1>Specials</h1>
                <ul>
                    <li>Veg</li>
                    <li>Non-Veg</li>
                    <li>Seafood</li>
                    <li>Desserts</li>
                    <li>Starters</li>
                </ul>
            </div>
            <div className="top-regions">
                <h1>Regions</h1>
                <ul>
                    <li>Indian</li>
                    <li>Canadian</li>
                    <li>Japanese</li>
                    <li>American</li>
                    <li>Italian</li>
                </ul>
            </div>
            <div className="top-veg">
                <h1>Veg Specials</h1>
                <ul>
                    <li>Cabbage Soup</li>
                    <li>Beetroot Soup</li>
                    <li>Dal Fry</li>
                    <li>Kafteji</li>
                    <li>Baingan Bharta</li>
                </ul>
            </div>
            <div className="top-img">
                <img src={chef} alt="" />
            </div>
        </div>
        <div className="middle">
            <div id="phone" ><FaPhone className='icon'/> 9999999999</div>
            <div id="email" ><MdEmail className='icon'/> Restaurant@gmail.com</div>
        </div>
        <div className="bottom">
            <h1>Follow Our Handles</h1>
            <div>
                <FaWhatsapp className='icons' id='whatsapp'/>
                <FaInstagram className='icons' id='insta'/>
                <FaYoutube className='icons' id='yt'/>
                <FaFacebook className='icons' id='fb'/>
                <FaTwitter className='icons' id='twit'/>
            </div>
        </div>
        <div className="copyright">All rights are reserved @ KUNISETTY KRISHNA PAVAN KUMAR</div>
    </div>
  )
}

export default Footer