import { useEffect, useReducer, useRef } from "react";

export const NewPrueba = () => {
  //Input refs:
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = inputRef.current.value;
    if (task) {
      dispatch({
        type: "add",
        task,
      });
    }
    inputRef.current.value = "";
  };

  //useReducer
  const initialArg = JSON.parse(localStorage.getItem("state")) || [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), task: action.task, complete: false },
        ];
      case "delete":
        return state.filter((task) => task.id !== action.id);

      case "complete":
        return state.map((task) =>
          task.id === action.id ? { ...task, complete: !task.complete } : task
        );

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialArg);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  console.log(state);

  return (
    <>
      <h1>Lista de tareas</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="d-flex ">
          <input type="text" ref={inputRef} className="form-control" />
          <button type="submit" className="btn btn-dark">
            Enviar
          </button>
        </div>
      </form>

      <ul className="list-group">
        {state.map((todo) => (
          <div key={todo.id}>
            <li
              className={`list-group-item ${
                todo.complete ? "text-success" : ""
              }`}
              onClick={() => dispatch({ type: "complete", id: todo.id })}
              onDoubleClick={() => dispatch({ type: "rename", id: todo.id })}
            >
              {todo.task}
            </li>
            <button onClick={() => dispatch({ type: "delete", id: todo.id })}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};
