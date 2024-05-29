import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import { useLayoutEffect, useRef } from "react";

export const Layout = () => {
  const h1Ref = useRef();

  useLayoutEffect(() => {
    //Para ver el tamaño exacto del componente
    console.log(h1Ref.current.getBoundingClientRect());
  }, []);

  const { decrement, increment, counter } = useCounter();
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1 ref={h1Ref}>Info Pokémon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data?.id}
          name={data?.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button
        className="mt-2 btn btn-primary"
        onClick={() => (counter > 1 ? decrement(1) : null)}
      >
        Anterior
      </button>
      <button
        className="mt-2 btn btn-primary"
        onClick={() => (counter < 1025 ? increment(1) : null)}
      >
        Siguiente
      </button>
    </>
  );
};
