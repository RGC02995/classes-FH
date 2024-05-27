import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { username, email, password, formState, onInputChange, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <>
      <h1>Form With Custom Hook</h1>
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
        <input
          type="password"
          className="form-control"
          placeholder="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">
          Borrar
        </button>
      </form>
    </>
  );
};
