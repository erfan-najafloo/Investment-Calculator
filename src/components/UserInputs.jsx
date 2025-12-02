import { TextField } from "@mui/material";
import { useState } from "react";
import customTheme from "../themes/customInputTheme";
import { ThemeProvider } from "@mui/material/styles";

export default function UserInput() {
  const initialUserInput = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };
  const [userInput, setUserInput] = useState(initialUserInput);

  return (
    <ThemeProvider theme={customTheme}>
      <form
        action=""
        className="p-4 max-w-lg my-8 mx-auto rounded-sm bg-linear-to-b from-[rgb(48,126,108)] to-[rgb(43,153,109)] "
      >
        <section className="grid grid-cols-2 justify-between gap-6 py-6 px-4">
          <TextField
            id="outlined-basic"
            label="INITIAL INVESTMENT"
            variant="outlined"
            value={userInput.initialInvestment}
            onChange={(e) =>
              setUserInput({ ...userInput, initialInvestment: e.target.value })
            }
            className="text-white"
          />
          <TextField
            id="outlined-basic"
            label="ANNUAL INVESTMENT"
            variant="outlined"
            value={userInput.annualInvestment}
            onChange={(e) =>
              setUserInput({ ...userInput, annualInvestment: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="EXPECTED RETURN"
            variant="outlined"
            value={userInput.expectedReturn}
            onChange={(e) =>
              setUserInput({ ...userInput, expectedReturn: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="DEURATION"
            variant="outlined"
            value={userInput.duration}
            onChange={(e) =>
              setUserInput({ ...userInput, duration: e.target.value })
            }
          />
        </section>
      </form>
    </ThemeProvider>
  );
}
