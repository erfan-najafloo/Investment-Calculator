import { TextField } from "@mui/material";
import { useState } from "react";
export default function UserInput() {
  const [userInput, setUserInput] = useState([]);

  return (
    <form
      action=""
      className="p-4 max-w-xl my-8 mx-auto rounded-b-sm bg-linear-to-b from-[rgb(48,126,108)] to-[rgb(43,153,109)] "
    ></form>
  );
}
