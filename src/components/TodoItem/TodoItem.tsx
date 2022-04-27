import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";

export const TodoItem = ({todo, setTodos}: TodoItemProps) => {
    const [checked, setChecked] = useState(todo.completed);
    
    useEffect(() => {
      setChecked(todo.completed);
    }, [todo.completed])
  
    useEffect(() => {
      setTodos(prev => prev.map(item => item.id === todo.id ? {...item, completed : checked} : item ))
    }, [checked])

    const removeTodo = () => {
      setTodos(prev => prev.filter(item => todo.id !== item.id).map((item, i) => ({...item, id: i + 1})));
    }
  
    return (
      <Reorder.Item value={todo} className='todo-item'>
        <input tabIndex={-1} type="checkbox" name="check-todo" id={`check-todo-${todo.id}`} checked={checked} onChange={() => {setChecked(prev => !prev)}}/>
        <label tabIndex={0} htmlFor={`check-todo-${todo.id}`}></label>
        <h2 className='ml-6 font-medium'>{checked ? <del className='opacity-25'>{todo.name}</del> : todo.name}</h2>
        <button onClick={removeTodo} className='close-button'></button>
      </Reorder.Item>
    )
  }