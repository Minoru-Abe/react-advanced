import "./App.css";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [displayValue, setDisplayValue] = useState(false);
  const onClickCountup = () => {
    setCount(count + 1);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const onClickChangeDisplay = () => {
    setDisplayValue(!displayValue);
  };

  const onClickClose = useCallback(() => setDisplayValue(false), []);

  return (
    <>
      <div className="App">
        <input type="text" value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickChangeDisplay}>表示</button>
        <p>{displayValue}</p>
        <>
          <ChildArea open={displayValue} onClose={onClickClose} />
        </>
      </div>
    </>
  );
}
