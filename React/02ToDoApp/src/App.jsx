import Todohead from "./Component/Todohead";
import Todoname from "./Component/Todoname";
import Todoitems from "./Component/Todoitems";
import { useState } from "react";
import "./index.css";

function App() {
  const [todoitems, setTodoitems] = useState([
    {
      name: "Buy milk",
      Date: "21/09/2026",
    },
    {
      name: "Go to college",
      Date: "21/09/2026",
    },
    {
      name: "Like this video",
      Date: "right now",
    },
    {
      name: "Ayub Khan",
      Date: "01/01/2026",
    },
  ]);

  // Add new todo
  const addTodo = (todoName, todoDate) => {
    const newTodo = {
      name: todoName,
      Date: todoDate,
    };

    setTodoitems([...todoitems, newTodo]);
  };

  // Delete todo
  const deleteTodo = (todoName) => {
    const newTodoItems = todoitems.filter(
      (item) => item.name !== todoName
    );

    setTodoitems(newTodoItems);
  };

  return (
    <>
      <center>
        <Todoname />

        <Todohead onAdd={addTodo} />

        <Todoitems
          todoitems={todoitems}
          onDelete={deleteTodo}
        />
      </center>
    </>
  );
}

export default App;