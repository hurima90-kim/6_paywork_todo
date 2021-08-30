import React from 'react';

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined}>
                <input type='checkbox' checked={todo.complete} onChange={() => toggleTodo(todo)} />
                {todo.text}
            </label>
        </li>
    )
}
