import { apiCall } from ".";

export const getTodosRequest = async () => {
  const { data: todos } = await apiCall.get("/todos");
  return todos;
};

export const addTodoRequest = async (name: string) => {
  const { data: newTodo } = await apiCall.post("/todos", { name });
  return newTodo;
};

export const toggleTodoRequest = async (id: string) => {
  const { data: toggledTodo } = await apiCall.put(`/todos/${id}`);
  return toggledTodo;
};

export const deleteTodoRequest = async (id: string) => {
  const { data: deletedTodo } = await apiCall.delete(`/todos/${id}`);
  return deletedTodo;
};
