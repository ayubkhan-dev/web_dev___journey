import { useRef } from "react";

function Uncontrolformvailadion(){
    const name =useRef();
    const email = useRef();


    const handlesubmit = (e) =>{
        e.preventDefault()
        console.log("Name",name.current.value)
        console.log( "Email", email.current.value)


    }


    return(
        <form onSubmit={handlesubmit}>
            <h2>uncontrol useRef form validation</h2>

            <input type="name" ref={name} placeholder="Name"/>
            <br />
            <input type="email" ref={email} placeholder="Email"/>
            <br />

            <button type="submit">Submit</button>
        </form>
    )

}

export default Uncontrolformvailadion