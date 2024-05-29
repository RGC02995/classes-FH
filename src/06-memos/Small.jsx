import { memo } from "react";

//Usar memo unicamente si vemos que la carga del componente llega realmente a perjudicar la experiencia del user

export const Small = memo(({ value }) => {
  console.log("Me volvi a dibujar");
  return <small>{value}</small>;
});
