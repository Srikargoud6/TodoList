import { useState } from "react";
import { v4 as uuid } from "uuid";
import List from "@mui/material/List";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [todo, setTodo] = useState([
    { id: uuid(), text: "Wash Clothes", isCompleted: false },
    { id: uuid(), text: "Buy Groceries", isCompleted: false },
    { id: uuid(), text: "Do Excercise", isCompleted: false },
  ]);

  function removeTodo(id) {
    setTodo((prevTodos) => {
      return prevTodos.filter((c) => c.id !== id);
    });
  }

  function toggleTodo(id) {
    setTodo((prevTodos) => {
      return prevTodos.map((i) => {
        if (i.id === id) {
          return { ...i, isCompleted: !i.isCompleted };
        } else {
          return i;
        }
      });
    });
  }

  function addTodo(text) {
    setTodo((prevTodos) => {
      return [...prevTodos, { id: uuid(), text: text, isCompleted: false }];
    });
  }
  return (
    <div>
      <h1>Todo List</h1>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {todo.map((i) => {
          return (
            <Todo
              i={i}
              key={i.id}
              removeTodo={() => removeTodo(i.id)}
              toggleTodo={() => toggleTodo(i.id)}
            />
          );
        })}
      </List>
      <AddTodo addTodo={addTodo} />
    </div>
  );
}
