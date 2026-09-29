import { useState } from "react"

function Counter(){
    const [index,setIndex] = useState(0);

    const upvalue = ()=>{
        setIndex(index + 1);
    }
    const downvalue = ()=>{
        setIndex(index - 1);
    }



    return(
        <>
        <h1>this is React state Mangement</h1>
        <h3>counter : {index}</h3>
        <button onClick={upvalue}>increase</button>
        <button onClick={downvalue}>decrease</button>
        </>
    )

}
export default Counter