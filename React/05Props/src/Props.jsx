
import style from './Props.module.css'
// what is props:
//             props mean property to use data shareing mean prop share data from one compoent to onther component OR share data from parent to child.


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
        
         <h1 className={style.heading}>Hello {name}</h1>
         <p>age : {age}</p>
         <p>city: {city}</p>
        


        </>
    )
}
export default Props;