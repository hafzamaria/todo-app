import React from 'react'
import { Button,Form} from 'react-bootstrap';
import { useState } from 'react';

/////jwt work
const AddTodo = (props) => {
    const[title,setTitle]=useState('')
    const[desc,setDesc]=useState('')

    const submit =(e)=>{
      e.preventDefault();
      if(!title || !desc){
        alert('title or Description cannot be blank')
      }else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
      }
     
    }
  return (
    <div className='container my-3'>
        <h3>Add aTodo</h3>
      <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Todo Title:</Form.Label>
        <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
   
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Todo Descripton:</Form.Label>
        <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
     
      </Form.Group>
    
      <Button variant="success" size="sm" type="submit">
        Add Todo
      </Button>
    </Form>
    </div>
  )
}

export default AddTodo
