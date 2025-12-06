import Header from "./components/Header";
import UserInput from "./components/UserInputs";
import Result from "./components/Result";
import { useState } from "react";
function App() {
  const initialUserInput = {
    initialInvestment: 10000,
    annualInvestment: 100,
    expectedReturn: 20,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(initialUserInput);
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
        // '+' converts string to number
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Result />
    </>
  );
}

export default App;
