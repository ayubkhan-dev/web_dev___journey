import { useState } from "react";

function Filterserch(){

const names =["walikhan","saifoor","samood","masood","ayub","mudasir","munir","muntazir","sudis"];

    const [serch,setSerch]=useState("");

    const filteredname = names.filter((name)=>
        name.toLocaleLowerCase().includes(serch.toLocaleLowerCase())
    )

    
    return(
        <>
        <input type="text" value={serch} placeholder="serch by name" onChange={(e)=>setSerch(e.target.value)}/>

        {filteredname.map((name)=>(
            <p key={name}>{name}</p>
        ))}
        

       

        </>
    )

}
export default Filterserch