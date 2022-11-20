import Headers from "./components/Headers";
import "./App.css";
import Todos from "./components/Todos";
import Foot from "./components/Foot";
import AddTodo from "./components/AddTodo";
import { useState, useEffect } from "react";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(
      todos.filter((to) => {
        return to !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    // localStorage.setItem('todos',JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
  
       <Headers title="My Todos List" searchBar={true} />

      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />

      <Foot />
    </>
  );
}

export default App;
