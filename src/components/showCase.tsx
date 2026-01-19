"use client";

import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CustomizedDialogs from "./Dialogs";

const Book = () => {
  const scrollToContacts = () => {
    const el = document.getElementById("Contacts");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url(/Images/our-cars.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        mt: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.68) 100%)",
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", py: { xs: 7, md: 10 } }}>
        <Box sx={{ textAlign: "center", mx: "auto", maxWidth: 980 }}>
          <Typography
            variant="h3"
            color="white"
            fontWeight={900}
            component="h2"
            gutterBottom
            sx={{ letterSpacing: -0.3 }}
          >
            Book Your First Driving Lesson And Contact Us
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.9 }}>
            Start with a clear plan, patient coaching, and practical training designed for confidence and passing.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 3 }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: 420, sm: "none" },
                flex: { sm: 1 },
                "& button": {
                  width: "100%",
                  minHeight: 48,
                  height: 48,
                  px: 4,
                  borderRadius: 999,
                },
              }}
            >
              <CustomizedDialogs buttonText="Book Now" />
            </Box>
            <Button
              variant="outlined"
              size="large"
              color="error"
              onClick={scrollToContacts}
              sx={{
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: 420, sm: "none" },
                flex: { sm: 1 },
                minHeight: 48,
                height: 48,
                px: 4,
                borderRadius: 999,
                color: "#fff",
                borderColor: "rgba(255,255,255,0.35)",
                ":hover": { borderColor: "rgba(255,255,255,0.55)", backgroundColor: "rgba(255,255,255,0.06)" },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Book;
