import React from 'react'
import "./Home.css"
import veg from "../../../src/assets/food_1.png"
import nonVeg from "../../../src/assets/food_2.png"
import chef from "../../../src/assets/chef-removebg-preview.png"
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
    <div className="intro">
      <div className="chef">
        <img src={chef} alt="" />
      </div>
      <div className='intros'>
      <h1>WELCOME</h1>
      <h2>Let's Enjoy the Food with Family</h2>
      <button id='explore'>Explore Now</button>
      </div>
    </div>
    <div className="specials">
      <h1>Our Specials</h1>
      <div className="special-cards">
        <div id="veg">
          <img src={veg} alt="" />
          <h3>VEG</h3>
        </div>
        <div id="non-veg">
          <img src={nonVeg} alt="" />
          <h3>NON-VEG</h3>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home