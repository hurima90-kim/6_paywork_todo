import { TodoList } from "components/TodoList";
import React, { useState } from "react";

const initialTodos: Array<Todo> = [
  {text: 'Walk the dog', complete: true},
  {text: 'Write app', complete: false},
];

const App : React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
