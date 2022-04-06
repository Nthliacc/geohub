import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMilestone } from "./service/hooks";

const App = () => {
  const [milestone, setMilestone] = useState(49);
  const [owner, setOwner] = useState("geo-sapiens");
  const [repo, setRepo] = useState("coletum");

  useEffect(() => {
    getMilestone(owner, repo, milestone);
  }, [milestone, owner, repo]);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default App;
