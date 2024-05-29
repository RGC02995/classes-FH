import { todoReducer } from "../08-useReducer/todoReducer";
import { useReducer, useEffect } from "react";

export const useTodo = () => {
  const initialState = [];
  const init = () => {
    return JSON.parse(localStorage.getItem("state") || []);
  };
  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const pendingTodosCount = state.filter((todo) => !todo.done).length;
  const todosCount = state.length;

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "Delete Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "Complete Todo",
      payload: id,
    });
  };
  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    state,
    pendingTodosCount,
    todosCount,
  };
};
