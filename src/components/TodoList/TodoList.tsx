import { Reorder } from "framer-motion"
import { TodoItem } from "../TodoItem"

export const TodoList = ({todos, setTodos, page, setPage}: TodoListProps) => {
    const clearCompleted = () => {
      setTodos((prev: Todo[]) => prev.filter(item => item.completed === false))
    }
    
    return (
      <div className="todo-list">
        <Reorder.Group as="ol" axis="y" layoutScroll values={todos} onReorder={setTodos}>
          {todos.map(todo => {
            return (
              <TodoItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos}/>
            )
          })}
          </Reorder.Group>
          <footer>
            <p className='text-sm bottom-text font-medium'>{todos.filter((obj) => obj.completed === false).length} {todos.filter((obj) => obj.completed === false).length === 1 ? "item" : "items"} left</p>
            <nav className='absolute-center'>
              <ul className='flex justify-between'>
                <li><button onClick={() => {setPage("all")}} className={`${page === "all" ? "active" : ""} bottom-text bottom-button font-bold text-base`}>All</button></li>
                <li><button onClick={() => {setPage("active")}} className={`${page === "active" ? "active" : ""} bottom-text bottom-button font-bold text-base`}>Active</button></li>
                <li><button onClick={() => {setPage("completed")}} className={`${page === "completed" ? "active" : ""} bottom-text bottom-button font-bold text-base`}>Completed</button></li>
              </ul>
            </nav>
            <button onClick={clearCompleted} className='text-sm bottom-text bottom-button font-medium'>Clear Completed</button>
          </footer>
      </div>
      
    )
  }