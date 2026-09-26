import Todoitem from "./Todoitem"

const Todoitems = ({todoitems})=> {
    return(
      <div className="items-container">
        {todoitems.map((item) =>(
             <Todoitem todoName={item.name} todoDate={item.Date}></Todoitem>

        ))}
  </div>
    );

}
export default Todoitems