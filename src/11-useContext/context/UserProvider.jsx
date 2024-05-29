import { UserContext } from "./UserContext";

const user = {
  nombre: "RAUL",
  apellido: "Colomer",
  dni: "23318321R",
  email: "raul95guillot@outlook.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};
