import React from "react";

import "./App.css";
import PlantStatus from "./components/PlantStatus";

function App() {
  const getTimeNow = () => {
    let d = new Date();
    return d.toLocaleDateString();
  };
  return (
    <div className="App">
      <h1>Plant nanny</h1>
      <h2>{getTimeNow()}</h2>
      <PlantStatus />
    </div>
  );
}

export default App;
