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
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Result input={userInput} />
    </ThemeProvider>
  );
}

export default App;
