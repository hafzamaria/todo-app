import Headers from './components/Headers';
import './App.css';
import Todos from './components/Todos'
import Foot from './components/Foot';
import AddTodo from './components/AddTodo';
import {useState} from 'react'
function App() {

  const onDelete =(todo)=>{
  console.log('I am onDelete of todo',todo)

  setTodos(todos.filter((to)=>{
    return to!==todo;
  }))
  }
  const addTodo=(title,desc)=>{
console.log('i am adding this todo',title,desc)
let sno =todos[todos.length-1].sno+1;

const myTodo={
  sno:sno,
  title:title,
  desc:desc,
}
setTodos([...todos,myTodo])
console.log(myTodo)
  }

  const [todos,setTodos]=useState([

  {
    sno:1,
    title:'Go To the market ',
    desc:'You need to go to the market to get this job done1'
  },
  {
    sno:2,
    title:'Go To the Mall ',
    desc:'You need to go to the market to get this job done2'
  },
  {
    sno:3,
    title:'Get Online ',
    desc:'You need to go to the market to get this job done3'
  }

])

  return (
    <>
    <Headers 
    title="My Todos List"
    searchBar={true}
    />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Foot/>
  
    </>
  );
}

export default App;
