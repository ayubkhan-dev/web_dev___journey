// import React from "react"
import Conditional from "./Conditional-Readring/Conditional";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  let fooditem=['Apple','mango','orange','Banana','carotes','watermillon'];
  
  return (
   <>
                      {/* Math   */}
    <h1>This is List</h1>

  <ul className="list-group">
    {fooditem.map(item => <li key={item} className="list-group-item">{item}</li>)}
</ul>

<Conditional></Conditional>
   </>


  )
}

export default App
