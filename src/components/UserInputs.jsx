import { TextField } from "@mui/material";

export default function UserInput({ onChange, userInput }) {
  return (
    <form
      action=""
      className="p-4 max-w-2xl my-8 mx-auto rounded-sm bg-linear-to-b
 from-[rgb(48,126,108)] to-[rgb(43,153,109)] shadow-2xl"
    >
      <section className="grid grid-cols-2 justify-between gap-6 py-4 px-2">
        <TextField
          id="initial-investment"
          label="INITIAL INVESTMENT"
          variant="outlined"
          required
          value={userInput.initialInvestment}
          onChange={(e) => onChange("initialInvestment", e.target.value)}
        />
        <TextField
          id="annual-investment"
          label="ANNUAL INVESTMENT"
          variant="outlined"
          value={userInput.annualInvestment}
          required
          onChange={(e) => onChange("annualInvestment", e.target.value)}
        />
        <TextField
          id="expected-return"
          label="EXPECTED RETURN"
          variant="outlined"
          value={userInput.expectedReturn}
          required
          onChange={(e) => onChange("expectedReturn", e.target.value)}
        />
        <TextField
          id="duration"
          label="DEURATION"
          variant="outlined"
          value={userInput.duration}
          required
          onChange={(e) => onChange("duration", e.target.value)}
        />
      </section>
    </form>
  );
}
