import { useEffect, useState } from "react";
import Result from "../Result/Result";
import InputValue from "../InputValue/InputValue";
import Button from "../Button/Button";

const { REACT_APP_TITLE } = process.env;

function App() {
  const [summation, setSummation] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSummation(input1 + input2)
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = { 
      id: event.target.id, 
      value: event.target.valueAsNumber || 0
    };

    if (input.id === "input1") {
      setInput1(input.value)
    } else {
      setInput2(input.value)
    }

  };

  return (
    <div className="App">
      <h1>{REACT_APP_TITLE}</h1>
      <InputValue id="input1" onInputChange={handleInput} />
      <InputValue id="input2" onInputChange={handleInput} />

      <Button onUpdate={handleButton}>+</Button>
      <Result value={summation}></Result>
    </div>
  );
}

export default App;
