function Conditional(){
    let fooditem = ['Apple','Banana','orange','watermillon','mango'];
    // let fooditem = [];  //empty Array 

    if(fooditem.length == 0){
        return(
            <h1>Food Array is empty</h1>
        )
    }

    return(
        <>
        <h1>Helaty Food</h1>
        {/* {fooditem.length == 0 ? <h1>Food Array is empty</h1> : null}    //trnary  condition */}
        {/* {fooditem.length == 0 && <h3>Food Array is empty</h3>}           //logical condition */}
        <ul className="list-group">
            {fooditem.map(item => <li className="list-group-item">{item}</li> )}
        </ul>
        </>
    )

}
export default Conditional