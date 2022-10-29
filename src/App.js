import { useEffect } from "react";
import "./App.scss";

import { Piano } from "./components/Piano";

function App() {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      console.log(e.code);
    });
  });

  return (
    <div className="App">
      <Piano />
    </div>
  );
}

export default App;
