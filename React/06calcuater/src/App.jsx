import Display from "./components/Display"
import Button from "./components/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { useState } from "react"


function App() {
  const [calval,setCalval]= useState("")
  const onButtonClick=(buttonText)=>{
    if(buttonText === 'c'){
      setCalval ("");
    }else if(buttonText === '='){
      const result=eval(calval);
      setCalval(result);
    }else{
      const newdisplayvalue = calval +buttonText;
      setCalval(newdisplayvalue);

    }
  }

  return (
    <>
    <div className="out-border">
      <Display displayvalue={calval}></Display>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  
    </>
  )
}

export default App
