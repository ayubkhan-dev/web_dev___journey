import Expenseform from "./Expenseform"
import Expenselist from "./Expenselist"

function App() {

  return (
   <div className="app-container">
    <h1>💰 Expense container</h1>
    <Expenseform/>
  

    <h3 className="total">TOtal expense : 750.00</h3>
    <Expenselist/>
    
   </div>

  )
}

export default App
