import { useState } from 'react'

export const NewTodo = ({setTodos}: NewTodoProps) => {
    const [inputValue, setInputValue] = useState("");
  
    const KeyDown = (e: { key: string; }) => {
      if(e.key === "Enter") {
        setTodos((prev: Todo[]) => [...prev, {
          id: prev.length + 1,
          name: inputValue,
          completed: false,
        }])
      }
    }
  
    return (
      <div className='new-todo'>
        <input type="checkbox" name="check-todo" disabled id="check"/>
        <label htmlFor='check'></label>
        <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder='Create a new todo...' onKeyDown={KeyDown} />
      </div>
    )
}