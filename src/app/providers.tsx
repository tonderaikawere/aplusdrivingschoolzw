"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#49148c",
      },
      text: {
        primary: "#111",
        secondary: "#555",
      },
      background: {
        default: "#fff",
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          "input[type=date], input[type=time]": {
            color: "#111",
          },
          "input[type=date]::-webkit-datetime-edit, input[type=time]::-webkit-datetime-edit": {
            color: "#111",
          },
          "input[type=date]::-webkit-datetime-edit-text, input[type=time]::-webkit-datetime-edit-text": {
            color: "#111",
          },
          "input[type=date]::-webkit-datetime-edit-month-field, input[type=date]::-webkit-datetime-edit-day-field, input[type=date]::-webkit-datetime-edit-year-field": {
            color: "#111",
          },
          "input[type=time]::-webkit-datetime-edit-hour-field, input[type=time]::-webkit-datetime-edit-minute-field, input[type=time]::-webkit-datetime-edit-ampm-field": {
            color: "#111",
          },
          html: {
            width: "100%",
            overflowX: "hidden",
          },
          body: {
            width: "100%",
            overflowX: "hidden",
            margin: 0,
          },
          "#__next": {
            width: "100%",
            overflowX: "hidden",
          },
        },
      },
      MuiModal: {
        defaultProps: {
          disableScrollLock: true,
        },
      },
      MuiPopover: {
        defaultProps: {
          disableScrollLock: true,
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "rgba(0,0,0,0.70)",
            "&.MuiInputLabel-shrink": {
              backgroundColor: "rgba(255,255,255,0.95)",
              paddingLeft: 6,
              paddingRight: 6,
              borderRadius: 6,
              marginLeft: -4,
            },
            "&.Mui-focused": {
              color: "#d32f2f",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: "#111",
          },
          input: {
            color: "#111",
            "&::placeholder": {
              color: "rgba(0,0,0,0.55)",
              opacity: 1,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(255,255,255,0.95)",
            borderRadius: 10,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0,0,0,0.22)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0,0,0,0.40)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d32f2f",
              borderWidth: 2,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: "rgba(0,0,0,0.65)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 800,
            paddingLeft: 18,
            paddingRight: 18,
          },
          sizeLarge: {
            paddingTop: 12,
            paddingBottom: 12,
          },
        },
      },
    },
  })
);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
