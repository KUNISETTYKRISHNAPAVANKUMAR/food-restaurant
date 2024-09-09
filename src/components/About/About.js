import React from 'react'
import chef from "../../assets/about.webp"
import "./About.css"
import Footer from '../Footer/Footer'
import ColorsTimeline from '../Timeline'
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
      <Footer/>
    </>
  )
}

export default About