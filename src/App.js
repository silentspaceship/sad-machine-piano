import { useEffect, useState } from "react";
import "./App.scss";

import { Piano } from "./components/Piano";

function App() {
  const [keyDownCode, setkeyDownCode] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleKeyDown(e));
  }, []);

  function handleKeyDown(event) {
    setkeyDownCode("");
  }

  return (
    <div className="App">
      <Piano keyCode={keyDownCode} />
    </div>
  );
}

export default App;
