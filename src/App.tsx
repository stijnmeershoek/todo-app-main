import { useEffect, useState } from 'react'
import {Header} from './components/Header';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css'

const App = () => {
  var initialTodos: Todo[] = [
    {
      id: 1,
      name: "Complete online JavaScript course",
      completed: true,
    },
    {
      id: 2,
      name: "Jog around the park 3x",
      completed: false,
    },
    {
      id: 3,
      name: "10 minutes meditation",
      completed: false,
    },
    { 
      id: 4,
      name: "Read for 1 hour",
      completed: false,
    },
    {
      id: 5,
      name: "Pick up groceries",
      completed: false,
    },
    {
      id: 6,
      name: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ]

  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', initialTodos);
  const [page, setPage] = useState("all")
  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    switch(page) {
      case "all":
        setFiltered(todos);
        break;
      case "active":
        setFiltered(todos.filter(item => item.completed === false))
        break;
      case "completed":
        setFiltered(todos.filter(item => item.completed === true))
        break;
      default:
        setFiltered(todos)
        break;
    }
  }, [page, todos])

  return (
    <div className="app">
      <div className='app-bg'></div>
      <div className="app-body">
        <Header/>
        <div className='w-full flex flex-col'>
          <NewTodo setTodos={setTodos}/>
          <TodoList todos={filtered} setTodos={setTodos} page={page} setPage={setPage}/>
        </div>
        <nav className='mobile-nav'>
          <ul className='flex justify-center'>
            <li><button onClick={() => {setPage("all")}} className={`${page === "all" ? "active" : ""} bottom-text bottom-button font-bold text-sm`}>All</button></li>
            <li><button onClick={() => {setPage("active")}} className={`${page === "active" ? "active" : ""} bottom-text bottom-button font-bold text-sm`}>Active</button></li>
            <li><button onClick={() => {setPage("completed")}} className={`${page === "completed" ? "active" : ""} bottom-text bottom-button font-bold text-sm`}>Completed</button></li>
          </ul>
        </nav>
        <div>
          <p className='text-xs bottom-text'>Drag and drop to reorder list</p>
        </div>
      </div>
    </div>
  );
}

export default App;
