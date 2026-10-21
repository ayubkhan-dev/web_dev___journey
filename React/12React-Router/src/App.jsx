// React Router: React Router is a library used to navigate between different pages or views in a React application without reloading the entire webpage.

// In simple English: It changes what you see on the screen when you click a link, without reloading the whole page.



import Home from "./Home"
import About from "./About"
import Product from "./Product"
import Phone from "./Phone"
import Laptop from "./Laptop"
import Notpound from "./Notpound"
import { BrowserRouter , Routes, Route,Link} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <h1>React Rocter exmple</h1>
    <nav>
      <Link to="/Home">Home</Link> |
        <Link to="/About">About</Link>   |
          <Link to="/Product">Product</Link> |
    </nav>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/product" element={<Product/>}>

      <Route path="phone" element={<Phone/>}/>
      <Route path="Laptop" element={<Laptop/>}/>

      </Route>
      <Route path="*" element={<Notpound/>}/>
      
    </Routes>
    </BrowserRouter>
 
   
  )
}

export default App
