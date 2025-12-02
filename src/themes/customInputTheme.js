// src/theme/customTheme.js
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(194, 233, 224)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(194, 233, 224)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(194, 233, 224)",
          },
          color: "rgb(194, 233, 224)",
        },
        input: {
          color: "rgb(194, 233, 224)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgb(194, 233, 224)",
          "&.Mui-focused": {
            color: "rgb(194, 233, 224)",
          },
        },
      },
    },
  },
});

export default customTheme;
