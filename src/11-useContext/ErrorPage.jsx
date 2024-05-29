import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <h1>Error 404 Page Not Found</h1>
      <hr />
      <Link to="/">Volver a Inicio</Link>
    </>
  );
};
