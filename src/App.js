import React, { useState, useReducer } from "react";
import _ from "lodash";
import "./App.scss";
import { optionsReducer, genName } from "./utils";

function App() {
  const genders = ["female", "male"];
  const [prefOption, prefDispatch] = useReducer(optionsReducer, "random");
  const [suffOption, suffDispatch] = useReducer(optionsReducer, "random");
  const [firstPre, setFirstPre] = useState("");
  const [firstSuff, setFirstSuff] = useState("");
  const [housePre, setHousePre] = useState("");
  const [houseSuff, setHouseSuff] = useState("");
  return (
    <div className="App">
      <h1>Drow Name Generator</h1>
      <main>
        <div className="Constraints">
          <h2>Constraints</h2>
          <h3>Given Name</h3>
          <div className="First-Con">
            <h4>Prefix: </h4>
            <h4 onClick={() => prefDispatch(prefOption)}>
              {prefOption === "random" && <i className="fas fa-random" />}
              {prefOption === "female" && <i className="fas fa-venus" />}
              {prefOption === "male" && <i className="fas fa-mars" />}
            </h4>
            <h4>Suffix: </h4>
            <h4 onClick={() => suffDispatch(suffOption)}>
              {suffOption === "random" && <i className="fas fa-random" />}
              {suffOption === "female" && <i className="fas fa-venus" />}
              {suffOption === "male" && <i className="fas fa-mars" />}
            </h4>
          </div>
          <button
            onClick={() =>
              genName(setFirstPre, setFirstSuff, setHousePre, setHouseSuff)
            }
          >
            Generate
          </button>
          <h1>
            {firstPre[prefOption] ||
              firstPre[genders[_.random(0, 1)]] ||
              firstPre.female}
            {firstSuff[suffOption] || 
              firstSuff[genders[_.random(0, 1)]] ||
              firstSuff.female}{" "}
            {housePre.name}
            {houseSuff.name}
          </h1>
        </div>
      </main>
    </div>
  );
}

export default App;
