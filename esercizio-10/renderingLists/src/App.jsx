import { Colors } from "./Colors";

function App() {
  return (
    <>
      <Colors
        colors={[
          { id: 1, name: "pink" },
          { id: 2, name: "orange" },
          { id: 3, name: "black" },
        ]}
      />
    </>
  );
}

export default App;
