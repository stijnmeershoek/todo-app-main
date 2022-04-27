import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";

export const TodoItem = ({todos, todo, setTodos}: TodoItemProps) => {
    const [checked, setChecked] = useState(todo.completed);
  
    useEffect(() => {
      setTodos((prev: Todo[]) => prev.map(item => item.id === todo.id ? {...item, completed : checked} : item ))
    }, [checked])
  
    const removeTodo = () => {
      let newArr = todos.filter(item => todo.id !== item.id);
      newArr.map(item => (
        todo.id = item.id
      ));
      setTodos(newArr);
    }
  
    return (
      <Reorder.Item value={todo} className='todo-item'>
        <input tabIndex={-1} type="checkbox" name="check-todo" id={`check-todo-${todo.name}`} checked={checked} onChange={() => {setChecked(prev => !prev)}}/>
        <label tabIndex={0} htmlFor={`check-todo-${todo.name}`}></label>
        <h2 className='ml-6 text-xl font-medium'>{checked ? <del className='opacity-25'>{todo.name}</del> : todo.name}</h2>
        <button onClick={removeTodo} className='close-button'></button>
      </Reorder.Item>
    )
  }