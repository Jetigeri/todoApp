import React from "react";
import "./TodoList.css";

import Todo from "./Todo"

const TodoList = ({ filteredTodos, todos, setTodos, setIsEditing, isEditing, setIsEdited, setInputText }) => {
   

  return (
    <div className="listContainer">
      <ul>
        {filteredTodos.map((todo, i) => (
          <Todo key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            setIsEdited={setIsEdited}
            setInputText={setInputText}
            i={i}
          ></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
