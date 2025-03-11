import { div, li } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react';

const StyledCard = () => {
    const [count,setCount]=useState(0);
    const handleClick=()=>setCount(count+1);
  return (
    <div>{count}
    <button onClick={handleClick}>increament</button></div>

  )
}

export default StyledCard

export const TodoList=()=>{
    const [todos,setTodos]=useState([]);
    const [input,setInput]=useState("");
    const handleSubmit =e=>{
        e.preventDefault()
        if(input.trim()){
            setTodos([...todos,inputValue]);
            setInputValue("");
        }

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} placeholder='Add name' />
                <button type='submit'> ADD</button>
            </form>
            <ul>
                {todos.map((todo,index)=(
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
import React from 'react'

const ProfileCard = () => {
    const [details,setDetails]=useState();
    const changeDetails=()=>{
        setDetails()
    }
  return (
    <div>{details.name}
    {details.age}
    <button onClick={changeDetails}>Update</button></div>
  )
}

export default StyledCard