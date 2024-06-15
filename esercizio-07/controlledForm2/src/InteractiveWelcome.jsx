import { useState } from "react";
import { Welcome } from "./Welcome";


export function InteractiveWelcome() {
  const [name, setName] = useState();

  function handlingName(event) {
    const value = event.target.value;
    setName(value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="write your name here"
        onChange={handlingName}
      ></input>
      <Welcome name={name}/>
    </div>
  );
}
