"use client";

import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

type Props = {
  phoneNumberE164: string;
  message: string;
};

export default function WhatsAppFloatingButton({
  phoneNumberE164,
  message,
}: Props) {
  const href = React.useMemo(() => {
    const text = encodeURIComponent(message);
    // wa.me requires digits only (no '+')
    const digits = phoneNumberE164.replace(/[^0-9]/g, "");
    return `https://wa.me/${digits}?text=${text}`;
  }, [phoneNumberE164, message]);

  return (
    <Fab
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      color="success"
      sx={{
        position: "fixed",
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: 2000,
        width: 64,
        height: 64,
        bgcolor: "#25D366",
        "&:hover": { bgcolor: "#1ebe5d" },
        animation: "waJump 1.1s ease-in-out infinite",
        "@keyframes waJump": {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 34, color: "#fff" }} />
    </Fab>
  );
}
