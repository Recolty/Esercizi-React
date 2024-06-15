import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MyForm } from "./MyForm";

function App() {
  return (
    <>
      <MyForm />
      <InteractiveWelcome />
      <hr></hr>
      <Login />
    </>
  );
}

export default App;
