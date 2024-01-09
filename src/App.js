import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  function handleStepDecrease() {
    setStep((s) => s - 1);
  }

  function handleStepIncrease() {
    setStep((s) => s + 1);
  }

  function handleCountDecrease() {
    setCount((c) => (step === 0 ? c : step > 0 ? c - step : c + step));
  }

  function handleCountIncrease() {
    setCount((c) => (step === 0 ? c : step > 0 ? c + step : c - step));
  }

  return (
    <div>
      <div className="button-group">
        <div className="button-row">
          <button onClick={handleStepDecrease}>-</button>
          <span> Step: {step} </span>
          <button onClick={handleStepIncrease}>+</button>
        </div>
        <div className="button-row">
          <button onClick={handleCountDecrease}>-</button>
          <span> Count: {count} </span>
          <button onClick={handleCountIncrease}>+</button>
        </div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default App;
