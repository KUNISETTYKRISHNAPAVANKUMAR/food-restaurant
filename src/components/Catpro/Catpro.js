import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Catpro.css"
import Footer from '../Footer/Footer'

const Catpro = () => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    let name = useParams()
    let navigate = useNavigate()
    console.log(name)
    async function fetchData() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name.id}`)
        let data = await response.json()
        setLoading(false)
        setData(data.meals)
        console.log(data)
    }
    console.log(data)
    useEffect(() => {
        fetchData()
    }, [])
    if(loading){
        return(
            <h1 style={{color:"darkviolet",textAlign:"center"}}>Loading ...</h1>
        )
    }
    else
    return (
        <>
            <div className='catpro-con'>
                <h1>Category : {name.id}</h1>
                <div className="catpro">
                    {data.map((eachProduct) => {
                        return (
                            <div className="category-cards" key={eachProduct.id} onClick={() => navigate(`/products/${eachProduct.idMeal}`)}>
                                <img src={eachProduct.strMealThumb} alt="" />
                                <div className="category-details">
                                    <h3>{eachProduct.strMeal}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, distinctio.
                                    </p>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Catpro