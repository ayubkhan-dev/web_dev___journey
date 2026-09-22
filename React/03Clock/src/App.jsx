import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  let time = new Date()

  return (
    <>
    <center className="text-bg-success">
    <h1 className="fw-bold">Pakistan current time</h1>
    <p>this is shows pakistan current data and time</p>
    <h3>current time is : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>

    </center>
   
    </>
  )
}

export default App
