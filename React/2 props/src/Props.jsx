// function Props(props){
//     return(
//         <>
//         <h1>Hello {props.name}</h1>
//         <p>Age : {props.age}</p>
//         <p>city : {props.city}</p>
//         </>
//     )
// }
// export default Props;

function Props({name,age,city}){
    return(
        <>
        
         <h1>Hello {name}</h1>
         <p>age : {age}</p>
         <p>city: {city}</p>
        


        </>
    )
}
export default Props;