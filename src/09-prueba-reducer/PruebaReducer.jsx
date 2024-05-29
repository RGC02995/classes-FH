import { useReducer, useRef } from "react";

export const PruebaReducer = () => {
  const inputRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const task = inputRef.current.value;
    if (task) {
      dispatch({
        type: "add-task",
        task,
      });
    }

    inputRef.current.value = "";
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "delete-todo",
      id,
    });
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add-task":
        return [
          ...state,
          { id: Date.now(), text: action.task, completed: false },
        ];
      case "delete-todo":
        return state.filter((todo) => todo.id !== action.id);
      case "completed":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  };

  const initialTodos = [
    {
      id: 1,
      text: "Comer Lechugas buena buena",
      completed: false,
    },
  ];
  const [state, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      <h1>Prueba useReducer</h1>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Escribe la tarea"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Enviar
        </button>
      </form>
      <ul className="list-group mt-2 text-center ">
        {state.map((todo) => (
          <li
            className={`list-group-item ${todo.completed && "text-success"}`}
            key={todo.id}
            onClick={() => dispatch({ type: "completed", id: todo.id })}
          >
            {todo.text}
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
