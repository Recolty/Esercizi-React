import { useState } from "react";

export function Login() {
  const [form, setForm] = useState("");

  function handlingNameValue(event) {
    const value = event.target.value;
    setForm(value);
  }

  function handlingPasswordValue(event) {
    const value = event.target.value;
    setForm(value);
  }

  function checkedBox(event) {
    const checked = event.target.checked;
    setForm(checked);

  }

  console.log(form);

  return (
    <form>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        onChange={handlingNameValue}
      ></input>
      <input
        type="text"
        placeholder="password"
        onChange={handlingPasswordValue}
      ></input>
      <input type="checkbox" id="remember" onChange={checkedBox}></input>
      <label htmlFor="remember">remember</label>
    </form>
  );
}
