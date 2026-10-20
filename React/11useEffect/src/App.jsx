import { useEffect, useState } from "react"



function App() {
  const [count,setCount]=useState(0)
  const [name,setName] =useState(0)

  useEffect(()=>{
    document.title = `count : ${count}`
    console.log("useeffect is calling")
  },[count,name])



  return (
    <>
    <h2>count: {count}</h2>
    <button onClick={()=>setCount(count +1)}>increment</button>
    <h3>Reverse count : {name}</h3>
    <button onClick={()=>setName(name -1)}>decrement</button>
    </>

  )
}

export default App
