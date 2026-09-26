import Todohead from "./Component/Todohead"
import Todoname from "./Component/Todoname"
import Todoitems from "./Component/Todoitems"
import "./index.css"

function App() {

  const todoitems = [{
    name : "Buy mailk",
    Date: "21/09/2026",
  },
{
    name : "Go to collage",
    Date: "21/09/2026",
  },
{
    name : "like this video",
    Date: "right now",
  },
  {
    name : "Ayub khan",
    Date: "01/01/2026",
  },

];

  return (
<>
<center>
  <Todoname/>
  <Todohead/>
  <Todoitems todoitems={todoitems}/>


</center>
</>
   
  )
}

export default App
