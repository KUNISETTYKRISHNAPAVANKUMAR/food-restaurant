import React, { useEffect, useState } from 'react'
import "./Categories.css"
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
const Categories = () => {
    let [categories,setCategories]=useState([])
    let [loading,setLoading]=useState(true)
    let [e,setE]=useState(false)
    let navigate=useNavigate()
    async function fetchData(){
        try{
            let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            let data = await response.json()
            setCategories(data.categories)
        }
        catch(err){
            setE(true)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(categories)
    if(loading){
        return(
            <h1 style={{textAlign:"center",color:"darkblue"}}>Loading ...</h1>
        )
    }
    else if(e){
        <h1 style={{textAlign:"center",color:"darkblue"}}>Something went wrong.Try Later ...</h1>
    }
    else
  return (
    <>
    <div className='category-con'>
        <div className="categories-top">
        <div className="cat-left">
            <div className='block'>Vegan</div>
            <div className='block'>Vegetarian</div>
            <div className='block'>Starter</div>
            <div className='block'>Seafood</div>
            <span></span><span></span><span></span><span></span>
        </div>
        {/* <h1>CATEGORIES</h1> */}
        <div className="cat-top-details">
            <h2>There are 14 categories to try out</h2>
            <h3>To explore</h3>
            <p>Scroll Down</p>
        </div>
        <div className="cat-right">
            <div className='block'>Chicken</div>
            <div className='block'>Noodles</div>
            <div className='block'>Fish</div>
            <div className='block'>Pasta</div>
            <span></span><span></span><span></span><span></span>
        </div>
        </div>
        <div className="categories">
            {categories.map((eachCategory)=>{
                return(
                    <div className="category-card" key={eachCategory.id} >
                    <img src={eachCategory.strCategoryThumb} alt="" />
                    <div className="category-details">
                    <h3>{eachCategory.strCategory}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, distinctio. Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Eius temporibus laboriosam nesciunt labore velit porro repudiandae voluptate culpa. Earum porro 
                        corrupti sapiente commodi rem tempora iure magni deleniti ipsum quae?
                    </p>
                    <div className="wrap">
                    <button className="button" onClick={()=>navigate("/categories/"+eachCategory.strCategory)}>Click Here ...</button>

                    </div>
                    </div>
                </div>)
            })}
        </div>
        </div>
        <Footer/>
            </>
  )
}

export default Categories