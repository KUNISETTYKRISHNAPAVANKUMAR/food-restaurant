import React, { useEffect, useState } from 'react'
import chef from "../../assets/about.webp"
import "./About.css"
import Footer from '../Footer/Footer'
const About = () => {


  return (
    <>
      <div className="about-con">
        <div className="about-img">
          <h1>ALL ABOUT US ...</h1>
        </div>
        <div className='data'>
          <h2>Founder</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tenetur dolorem, obcaecati officia 
            dolor doloribus nulla, nemo laboriosam amet fuga architecto facere soluta id. Consequatur dolorum autem 
            laboriosam magni ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae, culpa fugiat 
            rerum amet perferendis nobis, magni rem odit, laboriosam omnis sequi quod ut possimus fuga nesciunt unde? 
            Tenetur, similique.</p>
        </div>
        <div className='data'>
          <h2>Branches</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tenetur dolorem, obcaecati officia dolor doloribus nulla, nemo laboriosam amet fuga architecto facere soluta id. Consequatur dolorum autem laboriosam magni ab.</p>
        </div>
        <div className='data'>
          <h2>Staff</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tenetur dolorem, obcaecati officia 
            dolor doloribus nulla, nemo laboriosam amet fuga architecto facere soluta id. Consequatur dolorum autem 
            laboriosam magni ab.orem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tenetur dolorem, obcaecati officia 
            dolor doloribus nulla.</p>
        </div>
        <div className='data'>
          <h2>Acheivements</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tenetur dolorem, obcaecati officia dolor doloribus nulla, nemo laboriosam amet fuga architecto facere soluta id. Consequatur dolorum autem laboriosam magni ab.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About