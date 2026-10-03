import { useState } from "react";

function Todohead({ onAdd }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAdd = () => {
    if (todoName === "" || todoDate === "") {
      alert("Please enter Todo and Date");
      return;
    }

    onAdd(todoName, todoDate);

    // Clear inputs after adding
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container">
      <div className="row">

        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={(event) => setTodoName(event.target.value)}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(event) => setTodoDate(event.target.value)}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

      </div>
    </div>
  );
}

export default Todohead;