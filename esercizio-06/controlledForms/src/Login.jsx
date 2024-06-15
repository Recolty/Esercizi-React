import { useState } from "react";

export function Login() {
  const [form, setForm] = useState([]);

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
      return newForm
    });
  }

  console.log(form);

  return (
    <form>
      <h2>Login</h2>
      <input name= "username" type="text" placeholder="username" onChange={handleLogin}></input>
      <input name= "password" type="text" placeholder="password" onChange={handleLogin}></input>
      <input name= "remember" type="checkbox" id="remember" onChange={handleLogin}></input>
      <label htmlFor="remember">remember</label>
    </form>
  );
}
