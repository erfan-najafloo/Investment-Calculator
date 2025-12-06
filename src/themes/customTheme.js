// src/theme/customTheme.js
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  components: {
    // ===== CssBaseline (body) =====
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: "12px",
          fontFamily: "'Quicksand', sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          background: "radial-gradient(#303b37, #1a1f1d)",
          color: "#e1eeeb",
          minHeight: "100vh",
          minWidth: "360px", // حداقل عرض موبایل
        },
      },
    },
    // ===== TextField / Input =====
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

    // ===== Table =====
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",
          maxWidth: "45rem",
          minWidth: "320px",
          margin: "1rem auto",
          padding: "0.5rem",
          overflowX: "auto",
          [theme.breakpoints.down("sm")]: {
            padding: "0.25rem",
          },
        }),
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

    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "0.7rem",
          color: "#83e6c0",
          textAlign: "center",
          borderBottom: "none",
          padding: 0,
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.65rem",
          },
        }),
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: "'Roboto Condensed', sans-serif",
          fontSize: "0.85rem",
          color: "#c2e9e0",
          textAlign: "center",
          borderBottom: "none",
          padding: 0,
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.7rem",
            padding: "0 4px",
          },
        }),
        head: ({ theme }) => ({
          fontSize: "0.7rem",
          color: "#83e6c0",
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.6rem",
          },
        }),
      },
    },
  },
});

export default customTheme;
