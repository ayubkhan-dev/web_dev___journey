import { useState } from "react"
import './App.css'


function Hooks(){

    let [counter,setCounter] = useState(1);
    // let counter = 15

    const addvalue = ()=>{
        if(counter >0 && counter <20){
        counter = counter +1
        setCounter(counter)
        }
        
    }

    const removevalue = () => {
        if(counter <=20 && counter >1){
        counter = counter-1
        setCounter(counter)

        }
       
    }



    return (
        <>
        <h1>counter in React</h1>
        <h2>counter value : {counter}</h2>
        <button onClick={addvalue}>Add value {counter}</button>
        <br />
        <button onClick={removevalue}>Remove value {counter}</button>
        <p>Footer : {counter} </p>
        </>
    )
}
export default Hooks







                                           // practice in hook
// function Hooks() {

//    let [counter,setCounter] = useState(20)

//     // let counter = 20
//     const addvalue = () =>{
         
//         counter= counter+1
//         setCounter(counter)
//         console.log("clicked" , counter) 
//     }

//     const removevalue =()=>{
//         counter = counter - 1
//         setCounter (counter)
//     }
  
//     return(
//         <>
//         <h1>chia our react</h1>
//         <h3>counter value: {counter}</h3>
//         <button onClick={addvalue}> Add value {counter} </button>
//         <br />
//         <button onClick={removevalue}>Remove value {counter}</button>
//         <p>Footer : {counter}</p>
//         </>
//    )
// }
// export default Hooks;