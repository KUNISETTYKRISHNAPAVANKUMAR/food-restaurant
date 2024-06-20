import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Details.css"
import Footer from './Footer/Footer'
const Details = () => {
    let id = useParams()
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    async function fetchData(url) {
        let response = await fetch(url)
        let data = await response.json()
        setLoading(false)
        setData(data.meals)
    }
    useEffect(() => {
        fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Number(id.id)}`)
    }, [])
    console.log(data)
    if (data.length)
        return (
            <>
                <div className='details-con'>
                    <h1>HERE WE GO ...</h1>
                    <div className="details-info">
                        <div className="details-left">
                            <img src={data[0].strMealThumb} alt="" />
                            <input type="button" value="Add To Cart" />
                        </div>
                        <div className="details-right">
                            <div className="details-id">
                                <h2>Meal ID</h2>
                                <p>
                                    {data[0].idMeal}
                                </p>
                            </div>
                            <div id="details-name">
                                <h2>Name</h2>
                                <p>
                                    {data[0].strMeal}
                                </p>
                            </div>
                            <div id="category">
                                <h2>Category</h2>
                                <p>
                                    {data[0].strCategory}
                                </p>
                            </div>
                            <div id="region">
                                <h2>Region</h2>
                                <p>
                                    {data[0].strArea}
                                </p>
                            </div>
                            <div id="description">
                                <h2>Instructions</h2>
                                <p>
                                    {data[0].strInstructions}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </>
        )
    else if (loading) {
        return (
            <h1 style={{textAlign:"center",color:"darkblue"}}>Loading ...</h1>
        )
    }
    else {
        return (
            <h1>Something Went Wrong</h1>
        )
    }
}

export default Details