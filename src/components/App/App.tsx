import { useState } from "react";
import { useStyles } from "./App.style"
import Result from "../Result/Result";
import InputValue from "../InputValue/InputValue";
import Button from "../Button/Button";

const { REACT_APP_TITLE } = process.env;

function App() {
  const styles = useStyles();
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
    <div className={styles.container}>
      <h1 className={styles.title}>{REACT_APP_TITLE}</h1>
      <div className={styles.inputGroup}> 
        <InputValue id="input1" value={input1} onInputChange={handleInput} />
        <InputValue id="input2" value={input2} onInputChange={handleInput} />
      </div>

      <Button onUpdate={handleButton}>+</Button>
      <Result value={summation}></Result>
    </div>
  );
}

export default App;
