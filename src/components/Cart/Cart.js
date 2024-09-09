import React, { useContext } from 'react'
import { CardContext } from '../CartProvider'
import { FaCartShopping } from 'react-icons/fa6'
import "./Cart.css"
import Footer from '../Footer/Footer'
const Cart = () => {
    let { cartList, setCartList } = useContext(CardContext)
    let id = []
    let newCartList = []
    cartList.map((eachProduct) => {
            newCartList.push(eachProduct)
    })
    console.log(cartList)
    function removeCart(id) {
        let data = cartList.filter((eachProduct) => {
            return eachProduct.idMeal != id
        })
        setCartList(data)
    }
    function handleUpdate(flag,id){
        let l=[]
        if(flag==="inc"){
            l=cartList.map((eachProduct) => {
                if(eachProduct.idMeal===id)
                    eachProduct.count+=1
                return eachProduct
            })
        }
        if(flag==="dec"){
            l=cartList.filter((eachProduct) => {
                if(eachProduct.idMeal===id)
                    if(eachProduct.count==1){
                        removeCart(id)
                        return false
                    }
                    else{
                        eachProduct.count-=1
                        return true
                    }
                    return true
            })
        }
        setCartList(l)
    }
    if (cartList.length)
        return (
            <>
                <div className='cart-con'>
                    <div className="cart-con-top">
                        <FaCartShopping id='cart' />
                        <h1>Total Items : {cartList.length}</h1>
                    </div>
                    <div className="cart-card-con">
                        {
                            cartList.map((eachProduct) => {
                                
                                    return (
                                        <div className='cart-card'>
                                            <div>
                                                <img src={eachProduct.strMealThumb} alt="" />
                                            </div>
                                            <div className="cart-count">
                                                <div id='cart-details'>
                                                    <h2>{eachProduct.idMeal}</h2>
                                                    <h1>{eachProduct.strMeal}</h1>
                                                </div>
                                                <div>
                                                    <h1>Count</h1>
                                                    <div className='count-con'>
                                                    <button onClick={()=>handleUpdate("inc",eachProduct.idMeal)}>+</button>
                                                    <h3>{eachProduct.count}</h3>
                                                    <button onClick={()=>handleUpdate("dec",eachProduct.idMeal)}>-</button>
                                                    </div>
                                                </div>
                                                <input type="button" value="Remove" onClick={() => removeCart(eachProduct.idMeal)} />
                                            </div>
                                        </div>
                                    )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </>
        )
    else {
        return (
            <h1>No added</h1>
        )
    }
}

export default Cart