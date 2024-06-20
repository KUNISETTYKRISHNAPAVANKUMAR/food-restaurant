import React, { useEffect, useState } from 'react'
import "./Categories.css"
import Footer from '../Footer/Footer'
const Categories = () => {
    let [categories,setCategories]=useState([])
    let [loading,setLoading]=useState(true)
    async function fetchData(){
        let response= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        let data= await response.json()
        setLoading(false)
        setCategories(data.categories)
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
    else
  return (
    <>
    <div className='category-con'>
        <h1>CATEGORIES</h1>
        <div className="categories">
            {categories.map((eachCategory)=>{
                return(
                    <div className="category-card" key={eachCategory.id}>
                    <img src={eachCategory.strCategoryThumb} alt="" />
                    <div className="category-details">
                    <h3>{eachCategory.strCategory}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, distinctio.
                    </p>
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