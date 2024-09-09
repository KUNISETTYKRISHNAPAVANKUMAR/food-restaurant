import React, { useState, useEffect } from 'react'
import "./Products.css"
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import search from "../../assets/search.jpg"
const Products = () => {
    let [product, setProduct] = useState("")
    let [data, setData] = useState([])
    let [loading,setLoading]=useState(true)
    let [e,setE]=useState(false)
    let navigate=useNavigate()
    async function fetchData(url) {
        try{
            let response = await fetch(url)
            let data = await response.json()
            setData(data.meals)
        }
        catch(err){
            setE(true)
        }
        finally{
            setLoading(false)
        }
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
    else if(e){
        <h1 style={{textAlign:"center",color:"darkblue"}}>Something went wrong.Try Later ...</h1>
    }
    else
    return (
        <>
            <div className='product-con'>
                <div className="product-top">
                    <div className="product-top-left">
                        <h1>Find Your Favourite Here</h1>
                        <p>Simply enter your food in the searcg box provided beloow</p>
                        <div className="product-top-left-tags">
                            <div>VEG</div>
                            <div>NON-VEG</div>
                            <div>STARTERS</div>
                        </div>
                        <button>Explore</button>
                    </div>
                    <div className="product-top-right">
                        <img src={search} alt="" />
                    </div>
                </div>
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