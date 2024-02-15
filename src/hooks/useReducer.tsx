import React, { useReducer, useState } from "react";
import { Button, Input, Checkbox } from "antd";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number };

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: state.length + 1, text: action.text, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export const TodoList: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", text: newTodo });
      setNewTodo("");
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div className="grid place-items-center pt-20">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <Button
              danger
              type="primary"
              className=""
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <div>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <Button type="primary" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
