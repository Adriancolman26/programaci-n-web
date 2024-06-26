import { useEffect, useState } from "react";

import "./App.css";
import Personajes from "./componentes/personajes";

function App() {
  //useState
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hola");
  }, [count]);

  return (
    <>
      <Personajes />
    </>
  );
}

export default App;
