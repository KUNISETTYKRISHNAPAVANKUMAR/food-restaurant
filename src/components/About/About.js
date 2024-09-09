import React from 'react'
import chef from "../../assets/about.webp"
import "./About.css"
import Footer from '../Footer/Footer'
import ColorsTimeline from '../Timeline'
import chef1 from "../../assets/chef1.jpg"
import chef2 from "../../assets/chef2.jpg"
import chef3 from "../../assets/chef3.jpg"

const About = () => {


  return (
    <>
      <div className="about-con">
        <div className="about-img">
          <h1>ALL ABOUT US ...</h1>
        <div className="fcard">
          <img src={chef} alt="" />
          <div className="fcard-details">
            <h4>Founder</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repudiandae.</p>
          </div>
        </div>
        </div>
        
        <div className="line">
          <h1>Timeline</h1>
        <ColorsTimeline/>
        </div>
      </div>
      <div className="home-chef">
          <h1>Our <span>Chefs</span></h1>
          <div className='home-chef-con'>

          <div className="home-chef-card">
            <img src={chef1} alt="" />
            <p className='title'>Lorem</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, pariatur.</p>
          </div>
          <div className="home-chef-card">
          <img src={chef2} alt="" />
          <p className='title'>Pouel</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, pariatur.</p>
          </div>
          <div className="home-chef-card">
          <img src={chef3} alt="" />
          <p className='title'>Fhyu</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, pariatur.</p>
          </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default About