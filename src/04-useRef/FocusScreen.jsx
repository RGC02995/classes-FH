import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const onClick = () => {
    // document.querySelector("input").select();
    // console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Use Ref</h1>
      <hr />

      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />

      <button onClick={onClick} className="btn btn-success mt-2">
        Enviar
      </button>
    </>
  );
};
