// import React from "react"
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
   </>


  )
}

export default App
