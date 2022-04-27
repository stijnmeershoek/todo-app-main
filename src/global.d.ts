export {};

declare global {
  type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

  type Todo = {
    id: number,
    name: string,
    completed: boolean
  }

  interface TodoListProps {
    todos: Todo[], 
    setTodos: Setter<Todo[]>, 
    page: string, 
    setPage:  (value: React.SetStateAction<string>) => void
  }
  
  interface TodoItemProps {
    todo: Todo,
    setTodos:  Setter<Todo[]>
  }

  interface NewTodoProps {
    setTodos:  Setter<Todo[]> 
  }
}