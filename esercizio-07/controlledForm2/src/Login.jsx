import { useState } from "react";

export function Login({ onLogin }) {
  const [form, setForm] = useState({});

  function handleLogin(event) {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;
    setForm(() => {
      const newForm = {
        ...form,
        [name]: type === "checkbox" ? checked : value,
      };
      return newForm;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", form);
  }

  function handleReset() {
    onLogin("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleLogin}
      ></input>
      <input
        name="password"
        type="text"
        placeholder="password"
        onChange={handleLogin}
      ></input>
      <input
        name="remember"
        type="checkbox"
        id="remember"
        onChange={handleLogin}
      ></input>
      <label htmlFor="remember">remember</label>
      <br></br>
      <button
      type="submit"
        disabled={!form.username || !form.password}
      >
        Login
      </button>
      <button type="reset" onClick={handleReset}>Reset</button>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
}
