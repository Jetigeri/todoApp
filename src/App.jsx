import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Form from "./components/Form"
import TodoList from "./components/TodoList";

const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if(list) {
    return JSON.parse(localStorage.getItem("list"))
  } else {
    return []
  }
}

function App() {
  const [todos, setTodos] = useState(getLocalStorage());
  const [inputText, setInputText] = useState("");
  const [isEditing, setIsEditing] = useState(false)
  const [isEdited, setIsEdited] = useState("")
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        isEditing={isEditing}
        isEdited={isEdited}
        setIsEdited={setIsEdited}
        status={status}
        setStatus={setStatus}
        setFilteredTodos={setFilteredTodos}
        filteredTodos={filteredTodos}
        ></Form>
      <TodoList todos={todos}
      setTodos={setTodos}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
      setIsEdited={setIsEdited}
      setInputText={setInputText}
      filteredTodos={filteredTodos}
      ></TodoList>
    </div>
  );
}

export default App;
