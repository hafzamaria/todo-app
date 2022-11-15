import React from 'react'
import { Button} from 'react-bootstrap';
const TodoItem = ( {todo,onDelete})=> {
  return (
    <div>
     <h4>{todo.title}</h4>
     <p>{todo.desc}</p>
   <Button variant="danger"  size="sm" onClick={()=>{onDelete(todo)}}>Delete</Button>
   {/* <Button  onClick={()=>{onDelete(todo)}}>Delete</Button>passing the function method*/}
   {/* <Button  onClick={onDelete(todo)}>Delete</Button>calling the function method  */}
    
   
    </div>
  )
}

export default TodoItem
