import { createContext, useContext, useEffect, useState } from "react";
import {
  addTodoRequest,
  getTodosRequest,
  toggleTodoRequest,
  deleteTodoRequest,
} from "../api/todo";

import { TodoContextType, TodoProviderType, TodoType } from "../types/todo";

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const todos = await getTodosRequest();
    setTodos(todos);
  };

  const addTodo = async (name: string) => {
    const todo = await addTodoRequest(name);
    setTodos([...todos, todo]);
  };

  const toggleTodo = async (id: string) => {
    const completedTodo = await toggleTodoRequest(id);
    setTodos((todos) => {
      return todos.map((todo) => (todo.id === id ? completedTodo : todo));
    });
  };

  const deleteTodo = async (id: string) => {
    await deleteTodoRequest(id);
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
