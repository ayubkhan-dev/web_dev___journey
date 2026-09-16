import { useState } from "react";

function App(){
  const [color,setColor]=useState("")
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="w-full h-20 bg-slate-400 flex gap-4 justify-center p-5">
        <button
            onClick={()=>setColor("red")}
         className="w-20 h-10   bg-red-500 text-white rounded-full ">Red</button>
        <button 
        onClick={()=>setColor("blue")}
        className="w-20 h-10  bg-blue-500 text-black rounded-full">Blue</button>
        <button
        onClick={()=>setColor("green")}
         className="w-20 h-10   bg-green-500 text-black rounded-full">Green</button>
        <button
        onClick={()=>setColor("yellow")} 
        className="w-20 h-10  bg-yellow-500 text-black rounded-full">Yellow</button>
        <button
        onClick={()=>setColor("black")}
         className="w-20 h-10   bg-black text-white rounded-full">Black</button>
         <button
        onClick={()=>setColor("white")}
         className="w-20 h-10   bg-white text-black rounded-full">white</button>

      </div>

    </div>
    </>
  )

}
export default App;