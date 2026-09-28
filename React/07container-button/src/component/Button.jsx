function Button(){

    function handleclick(){
        alert("you clik the button");
    }
    const mouseenter = ()=>{
        alert("mouse is enter to the button");

    }
    const mouseout = () => {
        alert("mous is out in the dive");
    }
    const change = (event)=>{
        console.log(event.target.value);
        
    }
    const onchange = (event) =>{
        console.log(event.target.value)
    }

    return(
        <>
         <button className="btn btn-success" onClick={handleclick}>click me</button>
         <button className="btn btn-warning" onMouseEnter={mouseenter}>mouse Enter</button>
         <button className="btn btn-info" onMouseOut={mouseout}>mouse out</button>
         <input type="text" placeholder="onchange method"  onChange={change}/>
         <input type="text" onChange={onchange} name="" id="" />
        </>
    )
}
export default Button