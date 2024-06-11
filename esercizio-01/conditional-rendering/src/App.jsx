import { Welcome } from "./Welcome";

function App() {
  return (
    <div>
      <h1> My Awesome Application </h1>
      <hr />
      <Welcome name = {"John"} age={15} />
    </div>
  );
}

export default App;
