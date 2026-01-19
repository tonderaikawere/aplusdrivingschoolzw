"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Contact from "./Contact";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ buttonText = "Contact Us" }: { buttonText?: string }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        color="error"
        sx={{
          width: { xs: "100%", sm: "auto" },
          maxWidth: { xs: 420, sm: "none" },
          minHeight: 48,
          height: 48,
          px: 4,
          color: "#fff",
          ":hover": { backgroundColor: "error.dark" },
        }}
        onClick={handleClickOpen}
      >
        {buttonText}
      </Button>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 30,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Contact />
      </BootstrapDialog>
    </React.Fragment>
  );
}
