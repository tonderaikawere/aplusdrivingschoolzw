"use client";

import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function Contact() {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = React.useState<string>("");
  const [whatsAppUrl, setWhatsAppUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setStatus("idle");
    setStatusMessage("");
    setWhatsAppUrl("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          message: form.message,
          source: "contact-dialog",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) {
        throw new Error("Request failed");
      }

      setWhatsAppUrl(data.whatsappUrl || "");
      setStatus("success");
      setStatusMessage(data.message || "Message sent successfully.");
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setStatusMessage("We could not send your message right now. Please try again or use WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 520,
          mx: "auto",
          borderRadius: 3,
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>
          <Typography
            gutterBottom
            component="p"
            variant="body2"
            color="textSecondary"
          >
            Fill up the form and our team will get back to you within 24 hours
          </Typography>

          {status !== "idle" ? (
            <Alert severity={status} sx={{ mb: 2 }}>
              {statusMessage}
            </Alert>
          ) : null}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder=" Enter first name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  value={form.firstName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, firstName: e.target.value }))
                  }
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder=" Enter last name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  value={form.lastName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, lastName: e.target.value }))
                  }
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder=" Enter email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="tel"
                  label="Phone"
                  placeholder=" Enter phone number"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  placeholder="Type your message here "
                  variant="outlined"
                  size="small"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  fullWidth
                  disabled={submitting}
                  sx={{
                    color: "#fff",
                    py: 1.2,
                    ":hover": { backgroundColor: "error.dark" },
                  }}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </Grid>

              {whatsAppUrl ? (
                <Grid xs={12} item>
                  <Button
                    variant="outlined"
                    color="error"
                    fullWidth
                    component="a"
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ py: 1.2 }}
                  >
                    Send via WhatsApp
                  </Button>
                </Grid>
              ) : null}
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
