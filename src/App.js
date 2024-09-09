import Navbar from "./components/Navbar/Navbar"
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Details from "./components/Details";
import Catpro from "./components/Catpro/Catpro";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/CartProvider";


const App=()=>{
    return(
        <div className="app">
            <CartProvider>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products/:id" element={<Details/>}/>
            <Route path="/categories/:id" element={<Catpro/>}/>
            <Route path="/cart" element={<Cart/>}/>
            </Routes>
            </CartProvider>
        </div>
    )
}

export default App;