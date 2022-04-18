import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = ({
  todo,
  todos,
  setTodos,
  setIsEditing,
  isEditing,
  setIsEdited,
  setInputText,
  i,
}) => {
  const [completed, setCompleted] = useState(false);

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const editHandler = () => {
    setIsEditing(!isEditing);
    setIsEdited(todo.id);
    setInputText(todo.text);
    setCompleted(false);
  };

  const completeHandler = () => {
    todo.completed = !todo.completed;
    const lastObj = todos.filter((item) => item.id !== todo.id);
    const firstObj = todos.filter((item) => item.id === todo.id);
    setTodos([...lastObj, ...firstObj]);
  };
  return (
    <div>
      <li className="todo">
        <p
          onClick={completeHandler}
          className={todo.completed ? "completed" : ""}
        >
          {todo.text}
        </p>
        <div>
          <button onClick={deleteHandler}>del</button>
          <button onClick={editHandler}>edit</button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
