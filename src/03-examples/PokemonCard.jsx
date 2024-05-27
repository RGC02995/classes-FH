export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section
      style={{ height: 200 }}
      className="alert alert-info text-center p-0 m-0 d-flex align-items-center justify-content-center"
    >
      <h2 className="text-capitalize">
        #{id}- {name}
      </h2>

      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};
