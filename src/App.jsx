import Header from "./components/Header";
import UserInput from "./components/UserInputs";
import Result from "./components/Result";
import customTheme from "./themes/customTheme";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { CssBaseline } from "@mui/material";
function App() {
  const initialUserInput = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 20,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialUserInput);
  const validInputs = userInput.duration >= 1;
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
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!validInputs && (
        <p className="text-center pt-10">
          Please Enter a Duration greater than zero.
        </p>
      )}
      {validInputs && <Result input={userInput} />}
    </ThemeProvider>
  );
}

export default App;
