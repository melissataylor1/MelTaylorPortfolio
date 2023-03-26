import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles.css";

function App() {
  const [view, setView] = useState("about");

  return (
    <div className="App h-screen mx-auto my-0 bg-main-bg md:flex flex-row justify-between text-main-text font-main">
      {/* Header contains the navbar and a nameplate, this is where the view state is changed. */}
      <Header view={view} setView={setView} />
      {/* Page contains the conditionally rendered content based on view state.*/}
      <Home view={view} />
    </div>
  );
}

export default App;
