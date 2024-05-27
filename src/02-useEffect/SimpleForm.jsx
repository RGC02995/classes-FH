import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "a@a.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    // otra opcion
    // if (e.target.name === "username") {
    //   setFormState({ username: e.target.value, email });
    // } else if (e.target.name === "email") {
    //   setFormState({ username, email: e.target.value });
    // }
  };

  useEffect(() => {
    console.log("useEffect");
  }, [formState]);

  return (
    <>
      <h1>02-useEffect</h1>
      <hr />
      <form action="">
        <input
          type="text"
          className="form-control"
          placeholder="username"
          name="username"
          value={username}
          onChange={onInputChange}
        />

        <input
          type="email"
          className="form-control"
          placeholder="raulgc2995@gmail.com"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </form>

      {username === "strider" && <Message />}
    </>
  );
};
