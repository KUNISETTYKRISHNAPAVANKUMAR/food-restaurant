import React from 'react'
import "./Home.css"
import veg from "../../../src/assets/food_1.png"
import nonVeg from "../../../src/assets/food_2.png"
import chef from "../../../src/assets/chef-removebg-preview.png"
import Footer from '../Footer/Footer'
import catering from "../../assets/catering.jpg"
import homedelivery from "../../assets/food_10.png"
import chef1 from "../../assets/chef1.jpg"
import chef2 from "../../assets/chef2.jpg"
import chef3 from "../../assets/chef3.jpg"
import { MdCleanHands, MdRestaurant, MdSavings } from 'react-icons/md'
import { FaThumbsUp } from 'react-icons/fa'
const Home = () => {
  return (
    <>
      <div className="intro">
        <div className='intros'>
          <h1>WELCOME</h1>
          <p className="quote">We Value Our Customers</p>
          <h2>Let's Enjoy the Food with Family</h2>
          <p style={{ color: "skyblue" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quam.</p>
          <button id='explore'><a href="#features">Explore Now</a></button>
        </div>
        <div className="chef">
          <img src={chef} alt="" id='chef' />
        </div>
      </div>
      <div className="specials">
        <h1><span>Our</span> Specials</h1>
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
      <div className="features" id='features'>
        <h1><span>W</span>hy <span>U</span>s</h1>
        <div className="features-con">

        <div className="feature-card">
          <MdSavings style={{color:"green"}}/>Best Price
        </div>
        <div className="feature-card">
          <FaThumbsUp style={{color:"orange"}}/>Best Quality
        </div>
        <div className="feature-card">
          <MdRestaurant style={{color:"blue"}}/>Ambienece
        </div>
        <div className="feature-card">
          <MdCleanHands style={{color:"darkgreen"}}/>
          Hygiene</div>
        </div>
      </div>
      <div className="services-con">
        <h1><span>O</span>ur Services</h1>
        <div className="catering">
          <img src={catering} alt="" />
          <div className="catering-details">
            <h1 >Catering</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla, tempore assumenda cumque
              repellendus saepe ullam nobis aspernatur reiciendis delectus beatae accusamus eligendi quae voluptatum
              quod minus? Odio, esse temporibus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla, tempore assumenda cumque
              repellendus saepe ullam nobis aspernatur reiciendis delectus beatae accusamus eligendi quae voluptatum
              quod minus? Odio, esse temporibus!</p>
          </div>
        </div>

        <div className="home-delivery">
          <div className="home-delivery-details">
            <h1 style={{ textAlign: "center" }}>Home Delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad possimus repellat velit obcaecati
              maxime, eveniet facilis eligendi reiciendis minima laborum eum nesciunt fugit dolor molestias!
              Provident aperiam esse facere?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum porro vero molestias nulla,
              omnis adipisci minima debitis neque architecto veritatis eveniet, delectus asperiores.</p>
            <input type="button" value="Checkout" id='services-btn' />
          </div>
          <img src={homedelivery} alt="" />
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
      <Footer />
    </>
  )
}

export default Home