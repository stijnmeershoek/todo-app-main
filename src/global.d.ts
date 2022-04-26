export {};

declare global {
  type Todo = {
    id: number,
    name: string,
    completed: boolean
  }

  interface TodoListProps {
    todos: Todo[], 
    setTodos: (value: any) => void, 
    page: string, 
    setPage: (value: any) => void
  }
  
  interface TodoItemProps {
    todos: Todo[],
    todo: Todo,
    setTodos: (value: any) => void, 
  }

  interface NewTodoProps {
    setTodos: (value: any) => void; 
  }
}