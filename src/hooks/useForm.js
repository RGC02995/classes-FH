import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

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

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
