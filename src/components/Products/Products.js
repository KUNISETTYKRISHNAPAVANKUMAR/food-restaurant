import React, { useState, useEffect } from 'react'
import "./Products.css"
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
const Products = () => {
    let [product, setProduct] = useState("")
    let [data, setData] = useState([])
    let [loading,setLoading]=useState(true)
    let navigate=useNavigate()
    async function fetchData(url) {
        let response = await fetch(url)
        let data = await response.json()
        setLoading(false)
        setData(data.meals)
    }
    useEffect(() => {
        fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${product}`)
    }, [product])
    console.log(data)
    if(loading){
        return(
            <h1 style={{textAlign:"center",color:"darkblue"}}>Loading ...</h1>
        )
    }
    else
    return (
        <>
            <div className='product-con'>
                <div className="product-head">
                    <h1>Products </h1>
                    <input type="text" value={product} placeholder='Search Here ....' onChange={(e) => setProduct(e.target.value)} />
                </div>
                <div className="products">
                    {!data && <h1>No Prducts Found</h1>}
                    {data&&
                        data.map((eachProduct) => {
                            return (
                                <div className='product-card'key={eachProduct.idMeal} onClick={()=>navigate(`/products/${eachProduct.idMeal}`)}>
                                    <div>

                                    <img src={eachProduct.strMealThumb} alt="" />
                                    <div className="pro-details">
                                        <h1>{eachProduct.strMeal}</h1>
                                        <div className="pro-cat">Category : <span style={{backgroundColor:"aqua",fontWeight:"lighter",borderRadius:"10px",padding:"4px"}} className='pro-cat-name'>{eachProduct.strCategory}</span></div>
                                    </div>
                                    <div className="pro-region">Region : <span style={{backgroundColor:"aqua",fontWeight:"lighter",borderRadius:"10px",padding:"4px"}} className='pro-region-name'>{eachProduct.strArea}</span></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Products