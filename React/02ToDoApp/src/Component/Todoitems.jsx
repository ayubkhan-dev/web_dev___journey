import Todoitem from "./Todoitem";

const Todoitems = ({ todoitems, onDelete }) => {
  return (
    <div className="items-container">

      {todoitems.map((item, index) => (
        <Todoitem
          key={index}
          todoName={item.name}
          todoDate={item.Date}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
};

export default Todoitems;