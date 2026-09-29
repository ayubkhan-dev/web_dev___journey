import { useState } from "react"

function Like(){
    const [Liked , setLiked] = useState(false)

    return(
        <>
        <button onClick={()=>setLiked(!Liked)}>
            {Liked ?   "💖 Liked" : " 🤍 Like"}
        </button>
        </>
    )

}
export default Like 