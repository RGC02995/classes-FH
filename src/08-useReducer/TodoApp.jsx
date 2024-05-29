import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const {
    handleToggleTodo,
    handleNewTodo,
    handleDeleteTodo,
    state,
    todosCount,
    pendingTodosCount,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            state={state}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoForm onNewTodo={(todo) => handleNewTodo(todo)} />
        </div>
      </div>
    </>
  );
};
