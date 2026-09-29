import { useState } from "react"

function Toggle(){
    const [vissible,setVissible] = useState(false)

    return(
        <>
        <button onClick={()=>setVissible(!vissible)}>
            {vissible ? "Hide" : "show"}
        </button>

        {vissible && <p>this is show and hide message</p>}
        </>
    )
}
export default Toggle 