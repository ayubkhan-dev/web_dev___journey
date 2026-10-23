import { useEffect, useState } from "react"
import Expenseform from "./Expenseform"
import Expenselist from "./Expenselist"
import "./App.css";

function App() {

  const [expenses, setExpenses] = useState(()=>{
    const saved = localStorage.getItem("expense")
    return saved ? JSON.parse(saved) : [];
  })
  useEffect(()=>{
    localStorage.setItem("expense",JSON.stringify(expenses))
  },[expenses])

  const addExpense= (expense)=>{
    setExpenses ((prev) => [...prev,expense])

  }

  const deleteExpense = (id) =>{
    setExpenses((prev)=> prev.filter((item) => item.id != id))

  }

  const totalExpenses = expenses.reduce((sum,item)=> sum + item.amount,0)

  return (
   <div className="app-container">
    <h1>💰 Expense container</h1>
    <Expenseform onAddExpense={addExpense}/>

    <h3 className="total">TOtal expense : PKR {totalExpenses.toFixed(2)}</h3>
    <Expenselist expenses = {expenses} onDelete = {deleteExpense}/>
    
   </div>

  )
}

export default App
