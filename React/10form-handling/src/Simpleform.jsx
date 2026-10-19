import { useState } from "react"


function Simpleform(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const handlesubmit = (e)=>{
         e.preventDefault()
        console.log("Name :", name)
        console.log("Email : ",email)

    }
  
    return(
        <>
        <form onSubmit={handlesubmit} >
            <h2>Simple Form handling</h2>

            <label>Name</label>
            <input type="text"
           value={name}
           onChange={(e)=>setName(e.target.value)}

            />
            <br />

            <label>email</label>
            <input type="email" 
            value={email}
           onChange={(e)=>setEmail(e.target.value)}
             />
            <br />

            <button type="submit">submit</button>
        </form>
        </>
        
    )


}
export default Simpleform