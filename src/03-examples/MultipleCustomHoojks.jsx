import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { decrement, increment, reset, counter } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Info POkemon</h1>
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
