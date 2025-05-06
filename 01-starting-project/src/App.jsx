import { useState } from "react";
import Inputfield from "./components/Input field.jsx";
import Result from "./components/result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >=1; 

  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Inputfield userInput={userInput} onSelect={handleChange} />
      {!isInputValid && <p className = 'center'>Please Enter the Valid Input</p>}
      {isInputValid && <Result input={userInput}/>}
    </>
  );
}

export default App;
