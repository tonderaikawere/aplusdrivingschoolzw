"use client";

import React from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
// import Map from "./Map";
import { useTheme } from "@mui/material/styles";

const CallToAction = () => {
  const theme = useTheme();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const buildWhatsAppUrl = (message: string) => {
    const phoneNumberE164 = "+263772462823";
    const phone = phoneNumberE164.replace(/\D/g, "");
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Hi A Plus Driving School, I would like to book/register for driving lessons.",
      form.name ? `Name: ${form.name}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          <Grid item xs={12} md={5}>
            <Typography gutterBottom variant="h4" fontWeight={900}>
              Contact Us
            </Typography>
            <Typography gutterBottom component="p" variant="body2" color="textSecondary" sx={{ lineHeight: 1.9 }}>
              Send us a message for bookings, pricing, and course availability. We’ll respond as soon as possible.
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                margin="normal"
                size="small"
                fullWidth
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              />
              <TextField
                label="Type your message"
                variant="outlined"
                margin="normal"
                size="small"
                required
                fullWidth
                multiline
                rows={4}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                color="error"
                fullWidth
                sx={{
                  mt: 2,
                  color: "#fff",
                  py: 1.2,
                  borderRadius: 999,
                  maxWidth: { sm: 420, md: "100%" },
                  ":hover": { backgroundColor: "error.dark" },
                }}
              >
                Send via WhatsApp
              </Button>
            </form>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              sx={{
                height: { xs: 320, sm: 420, md: "100%" },
                minHeight: { md: 520 },
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
              }}
            >
              <iframe
                title="Google Maps Embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.464379527316!2d28.579853931425582!3d-20.161638602473957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb554755bc74b75%3A0xddae429e80e60352!2sMain%20St%20%26%20Thirteenth%20Ave%2C%20Bulawayo!5e0!3m2!1sen!2szw!4v1714988303234!5m2!1sen!2szw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CallToAction;
