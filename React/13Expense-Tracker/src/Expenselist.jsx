import Expenseitem from "./Expenseitem"

function Expenselist(){
    return(
         <div className="expense-list">
        <Expenseitem/>
       <div className="expense-item"><span>internet charge</span><span>$50</span><button>❌</button></div>
    </div>

    )

   

}
export default Expenselist