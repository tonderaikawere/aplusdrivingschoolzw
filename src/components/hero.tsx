"use client";

import React from "react";
import CustomizedDialogs from "@/components/Dialogs";
import {
  Box,
  Alert,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";

const HeroCenter = () => {
  const [quote, setQuote] = React.useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    courseType: "",
  });

  const [submittingQuote, setSubmittingQuote] = React.useState(false);
  const [quoteStatus, setQuoteStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [quoteStatusMessage, setQuoteStatusMessage] = React.useState<string>("");
  const [quoteWhatsAppUrl, setQuoteWhatsAppUrl] = React.useState<string>("");

  const buildWhatsAppUrl = (message: string) => {
    const phoneNumberE164 = "+263772462823";
    const phone = phoneNumberE164.replace(/\D/g, "");
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handleQuoteRequest = async () => {
    if (submittingQuote) return;
    setSubmittingQuote(true);
    setQuoteStatus("idle");
    setQuoteStatusMessage("");
    setQuoteWhatsAppUrl("");

    try {
      const message = [
        "Quote / booking request",
        quote.courseType ? `Course type: ${quote.courseType}` : null,
        quote.date ? `Preferred date: ${quote.date}` : null,
        quote.time ? `Preferred time: ${quote.time}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quote.name,
          email: quote.email,
          phone: quote.phone,
          message,
          source: "hero-quote",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error("quote request failed");

      setQuoteWhatsAppUrl(data.whatsappUrl || "");
      setQuoteStatus("success");
      setQuoteStatusMessage(data.message || "Request sent successfully.");
      setQuote({ name: "", email: "", phone: "", date: "", time: "", courseType: "" });
    } catch (e) {
      setQuoteStatus("error");
      setQuoteStatusMessage("We could not send your request right now. Please try again or use WhatsApp.");
    } finally {
      setSubmittingQuote(false);
    }
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.42)), url(/Images/hero.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          minHeight: { xs: "105vh", md: "70vh", lg: "105vh" },
          pt: { xs: 11, md: 12 },
          pb: { xs: 7, md: 9 },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} sx={{ margin: "auto", color: "#fff" }}>
            <Typography variant="h3" fontWeight={800} component="h1" gutterBottom>
              Learn to drive safely and pass with confidence.
            </Typography>
            <Typography variant="h6" component="p" gutterBottom sx={{ maxWidth: 650 }}>
              Professional driving lessons in Zimbabwe, practical training, theory support, and test preparation designed for real-road confidence.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              useFlexGap
              sx={{ mt: 2.5, maxWidth: { xs: 520, sm: 520 }, width: "100%" }}
            >
              <Button
                variant="contained"
                size="large"
                color="error"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  flex: { sm: 1 },
                  minHeight: 48,
                  height: 48,
                  color: "#fff",
                  ":hover": { backgroundColor: "error.dark" },
                }}
                onClick={() => {
                  const el = document.getElementById("Services");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Services
              </Button>
              <Box sx={{ width: { xs: "100%", sm: "auto" }, flex: { sm: 1 } }}>
                <CustomizedDialogs />
              </Box>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            sx={{ margin: "auto", display: { xs: "none", md: "block" } }}
          >
            <Card
              sx={{
                maxWidth: 420,
                mx: "auto",
                borderRadius: 3,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(0,0,0,0.50)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Typography gutterBottom variant="h6" color={"white"}>
                  Request a quote
                </Typography>
                <Typography variant="body2" color={"white"} sx={{ mb: 1 }}>
                  Tell us what you need and we’ll get back to you with available times and pricing.
                </Typography>
                {quoteStatus !== "idle" ? (
                  <Alert severity={quoteStatus} sx={{ mb: 1.25 }}>
                    {quoteStatusMessage}
                  </Alert>
                ) : null}
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      value={quote.name}
                      onChange={(e) => setQuote((p) => ({ ...p, name: e.target.value }))}
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{ bgcolor: "rgba(255,255,255,0.95)", borderRadius: 1, mb: 0.5 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      value={quote.email}
                      onChange={(e) => setQuote((p) => ({ ...p, email: e.target.value }))}
                      variant="outlined"
                      type="email"
                      size="small"
                      fullWidth
                      sx={{ bgcolor: "rgba(255,255,255,0.95)", borderRadius: 1, mb: 0.5 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      value={quote.phone}
                      onChange={(e) => setQuote((p) => ({ ...p, phone: e.target.value }))}
                      variant="outlined"
                      type="tel"
                      size="small"
                      fullWidth
                      sx={{ bgcolor: "rgba(255,255,255,0.95)", borderRadius: 1, mb: 0.5 }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Preferred Date"
                      value={quote.date}
                      onChange={(e) => setQuote((p) => ({ ...p, date: e.target.value }))}
                      variant="outlined"
                      type="date"
                      size="small"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      sx={{ bgcolor: "rgba(255,255,255,0.95)", borderRadius: 1, mb: 0.5 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Preferred Time"
                      value={quote.time}
                      onChange={(e) => setQuote((p) => ({ ...p, time: e.target.value }))}
                      variant="outlined"
                      type="time"
                      size="small"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      sx={{ bgcolor: "rgba(255,255,255,0.95)", borderRadius: 1, mb: 0.5 }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      select
                      label="Course type"
                      value={quote.courseType}
                      onChange={(e) => setQuote((p) => ({ ...p, courseType: e.target.value }))}
                      variant="outlined"
                      size="small"
                      fullWidth
                      SelectProps={{ MenuProps: { disableScrollLock: true } }}
                      sx={{ bgcolor: "rgba(255,255,255,0.95)", borderRadius: 1, mb: 0.5 }}
                    >
                      <MenuItem value="">Select course type</MenuItem>
                      <MenuItem value="Class 1">Class 1</MenuItem>
                      <MenuItem value="Class 2">Class 2</MenuItem>
                      <MenuItem value="Class 3">Class 3</MenuItem>
                      <MenuItem value="Class 4">Class 4</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      color="error"
                      fullWidth
                      disabled={submittingQuote}
                      sx={{ mt: 1.5, color: "#fff", py: 1.2, ":hover": { backgroundColor: "error.dark" } }}
                      onClick={handleQuoteRequest}
                    >
                      {submittingQuote ? "Sending..." : "Send Request"}
                    </Button>
                  </Grid>

                  {quoteWhatsAppUrl ? (
                    <Grid item xs={12}>
                      <Button
                        variant="outlined"
                        color="error"
                        fullWidth
                        component="a"
                        href={quoteWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.35)", py: 1.2 }}
                      >
                        Send via WhatsApp
                      </Button>
                    </Grid>
                  ) : null}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroCenter;
