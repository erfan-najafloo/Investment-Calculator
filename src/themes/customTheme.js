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
    MuiTable: {
      styleOverrides: {
        root: {
          tableLayout: "fixed",
          borderCollapse: "separate",
          borderSpacing: "1rem",
        },
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          maxWidth: "45rem",
          margin: "1rem auto",
          padding: "0.5rem",
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          fontSize: "0.7rem",
          color: "#83e6c0",
          textAlign: "center",
          borderBottom: "none",
          padding: 0,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "'Roboto Condensed', sans-serif",
          fontSize: "0.85rem",
          color: "#c2e9e0",
          textAlign: "center",
          borderBottom: "none",
          padding: 0,
        },
        head: {
          fontSize: "0.7rem",
          color: "#83e6c0",
        },
      },
    },
  },
});

export default customTheme;
