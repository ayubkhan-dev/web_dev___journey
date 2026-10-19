import { useState } from "react"

function Multiplehandling(){

    const [formData,setFormData]=useState({
        name: "",
        email: "",
        age: ""

    })

     const handlesubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

     const handlechange = (e) =>{
        const {name,value} = e.target;
        setFormData ((prev)=>({
            ...prev,
            [name]: value
        }))
     }
   
    return(

        <form onSubmit={handlesubmit}>
            <h2>Multipleform handling</h2>

            <input type="name"
             name="name" 
             placeholder="Name"
             value={formData.name} 
             onChange={handlechange}
             />
            <br />
            <input 
            type="email"
             name="email"
              placeholder="Email"
              value={formData.email} 
             onChange={handlechange} />
            <br />
            <input type="number"
             name="age"
              placeholder="Age"
              value={formData.age} 
             onChange={handlechange}  />
            <br />
            <button type="submit">Submit</button>

        </form>
    )


}
export default Multiplehandling