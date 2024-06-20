import Navbar from "./components/Navbar/Navbar"
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Details from "./components/Details";


const App=()=>{
    return(
        <div className="app">
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products/:id" element={<Details/>}/>
            </Routes>
        </div>
    )
}

export default App;