import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Memorize } from "./06-memos/Memorize";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHoojks";
// import { FocusScreen } from "./04-useRef/FocusScrseen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";

// import "./08-useReducer/intro-reducer";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { PruebaReducer } from "./09-prueba-reducer/PruebaReducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PruebaReducer />
  </React.StrictMode>
);
