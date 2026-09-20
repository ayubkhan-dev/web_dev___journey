function Reusablecomponent(){
    let number = Math.random()*10000;
    return(
        <>
        <h1>Random number is: {Math.round(number)}</h1>

        </>
    )
}
export default Reusablecomponent;