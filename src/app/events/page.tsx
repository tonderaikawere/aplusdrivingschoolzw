"use client";

import React from "react";
import { Box, Chip, Container, Grid, Typography, Card, CardContent, Stack, Divider } from "@mui/material";

export default function EventsPage() {
  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 7, md: 9 },
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 60%, rgba(250,250,250,1) 100%), url(/Images/cars-lighting.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
            What’s Next
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, maxWidth: 980, lineHeight: 1.8 }}>
            We’re launching new tools to make learning faster, clearer, and more confident — from our new website experience to an upcoming study and practice app for provisional tests.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
            <Chip label="Site launch" color="error" variant="filled" />
            <Chip label="Upcoming app" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
            <Chip label="VID provisional practice" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
            <Chip label="Free for students" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
            <Chip label="Subscription option" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={900} gutterBottom>
                    Launch roadmap
                  </Typography>
                  <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                    Our goal is simple: give every learner a clear plan, the right practice tools, and access to real instructors when it matters.
                    Below is what we are building and what you can expect next.
                  </Typography>

                  <Divider sx={{ my: 2.25 }} />

                  <Grid container spacing={2.5}>
                    <Grid item xs={12} md={6}>
                      <Typography fontWeight={900} gutterBottom>
                        Website launch improvements
                      </Typography>
                      <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                        We’re rolling out a stronger booking and support experience so learners can get answers quickly, understand pricing clearly, and choose the right training plan.
                        You’ll also see improved resources, more updates, and a smoother experience on mobile.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography fontWeight={900} gutterBottom>
                        A Plus Provisional Practice App (coming soon)
                      </Typography>
                      <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                        We are building an app designed for provisional test preparation in VID, with structured content and practice tools.
                        It will support learners with real progress tracking, guided learning, and consistent revision routines.
                      </Typography>
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 2.25 }} />

                  <Typography fontWeight={900} gutterBottom>
                    App features (planned)
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      {
                        title: "Highway Code & Rules",
                        text: "Clear notes and revision sections to help you understand signs, right-of-way, road markings, safe distance, and defensive driving habits.",
                      },
                      {
                        title: "Provisional Test Practice",
                        text: "Practice questions and quick checks to build speed, accuracy, and confidence. Great for repeat revision before your test.",
                      },
                      {
                        title: "Notes Taker",
                        text: "Save your personal notes from lessons, instructor advice, common mistakes, and reminders, so you improve faster.",
                      },
                      {
                        title: "Progress Record",
                        text: "Track what you have learned, what you still need to master, and your readiness level with structured progress checkpoints.",
                      },
                      {
                        title: "Instructor Support",
                        text: "Book a conversation or learning session with real instructors for guidance, corrections, and exam readiness plans.",
                      },
                      {
                        title: "Student Access + Subscription",
                        text: "Free for A Plus students. For non-students, a subscription option will be available to unlock full learning tools and practice content.",
                      },
                    ].map((f) => (
                      <Grid key={f.title} item xs={12} sm={6} lg={4}>
                        <Card
                          sx={{
                            height: "100%",
                            borderRadius: 3,
                            border: "1px solid rgba(0,0,0,0.08)",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                          }}
                        >
                          <CardContent>
                            <Typography fontWeight={900} gutterBottom>
                              {f.title}
                            </Typography>
                            <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                              {f.text}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  <Divider sx={{ my: 2.25 }} />

                  <Typography fontWeight={900} gutterBottom>
                    Want updates or want to speak to us?
                  </Typography>
                  <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                    Subscribe in the footer to get updates about the launch and the app. You can also use the “Contact Us” option to book a conversation and learn from real instructors.
                    If you prefer WhatsApp, use the WhatsApp buttons on the site to send your message.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
