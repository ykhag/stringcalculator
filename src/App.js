import React, { useState } from "react";
import { add } from "./components/stringCalculator";
import "./App.css";
import logo2 from "./button2.png";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateSum = () => {
    try {
      setError(""); // Reset error state
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: "400px" }}>
      <div className="calculatorBox">
        <h1 style={{ color: "#0a3253" }}>
          <u>String Calculator</u>
        </h1>
        <input
          type="text"
          placeholder="Enter numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "300px", padding: "10px", margin: "10px 0" }}
        />
        <br />
        <br />

        <button className="calculateButton" onClick={calculateSum}>
          Calculate!
          <div className="logo2">
            <img src={logo2} alt="Logo" height={15} width={20} />
          </div>
        </button>
        <br />
        {result !== null && (
          <h2 style={{ color: "#0a3253" }}>Result: {result}</h2>
        )}
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
      </div>
    </div>
  );
}

export default App;
