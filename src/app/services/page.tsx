"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

export default function ServicesPage() {
  return (
    <div>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 10 },
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 60%, rgba(250,250,250,1) 100%), url(/Images/driving-3.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
            Services
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, maxWidth: 980, lineHeight: 1.8 }}>
            Structured driving training that builds safe habits, real control, and calm decision making.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
            <Chip label="Class 1 to 4" color="error" variant="filled" />
            <Chip
              label="Bulawayo"
              color="error"
              variant="outlined"
              sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }}
            />
            <Chip
              label="Test readiness"
              color="error"
              variant="outlined"
              sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }}
            />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                What we train for
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 920 }}>
                Clear routines and real driving judgement that help learners stay safe and confident.
              </Typography>
            </Grid>

            {[
              {
                title: "Control",
                body: "Smooth starts, clutch control, braking control, and confident handling.",
              },
              {
                title: "Awareness",
                body: "Mirrors, blind spots, scanning ahead, and reading the road early.",
              },
              {
                title: "Positioning",
                body: "Lane discipline, turning positions, and safe spacing around other road users.",
              },
              {
                title: "Test readiness",
                body: "Yard work, route practice, and corrections that match examiner expectations.",
              },
            ].map((item) => (
              <Grid key={item.title} item xs={12} sm={6} md={3}>
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
                      {item.title}
                    </Typography>
                    <Typography color="textSecondary">{item.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,245,245,1) 100%)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                Training options
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 920 }}>
                Choose the option that matches your current level and your target class.
              </Typography>
            </Grid>

            {[
              {
                title: "License Training for Class 1 to 4",
                body: "Structured lessons for learners. We cover vehicle control, road rules, yard work, and exam readiness. This option is best if you are starting from zero or you need a full training plan.",
                points: [
                  "Learning stages from basics to test readiness",
                  "Yard practice and on road practice",
                  "Mock tests and corrections",
                ],
              },
              {
                title: "Practical Driving Lessons",
                body: "Focused on real road confidence. You learn steering control, observation routines, safe spacing, and calm decision making in traffic.",
                points: [
                  "Town driving and route practice",
                  "Parking and turning techniques",
                  "Defensive driving habits",
                ],
              },
              {
                title: "Theory Support",
                body: "We simplify road signs and rules with clear examples. This helps you understand what the examiner expects and what safe driving looks like.",
                points: [
                  "Road signs and rules",
                  "Common test questions",
                  "Hazard awareness basics",
                ],
              },
              {
                title: "Refresher and Confidence Lessons",
                body: "If you already have experience but you feel nervous, we help you rebuild confidence. This is ideal after a break from driving or before a test.",
                points: [
                  "Confidence building routes",
                  "Parking and maneuver practice",
                  "Calm driving routines",
                ],
              },
            ].map((s) => (
              <Grid key={s.title} item xs={12} md={6}>
                <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight={900} gutterBottom>
                      {s.title}
                    </Typography>
                    <Typography color="textSecondary" sx={{ mb: 1.5 }}>
                      {s.body}
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                      {s.points.map((p) => (
                        <li key={p}>
                          <Typography color="textSecondary">{p}</Typography>
                        </li>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                How training works
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 920, lineHeight: 1.9 }}>
                Training is broken into clear stages so learners build control first, then confidence, then exam readiness.
              </Typography>
            </Grid>

            {[
              {
                title: "Stage 1, Control",
                body: "Basic vehicle handling, smooth starts, steering control, braking, and simple positioning.",
              },
              {
                title: "Stage 2, Awareness",
                body: "Observation routines, safe spacing, correct signaling, and reading hazards early.",
              },
              {
                title: "Stage 3, Traffic confidence",
                body: "Busy roads, intersections, roundabouts, lane discipline, and calm decision making.",
              },
              {
                title: "Stage 4, Test preparation",
                body: "Yard work, route practice, mock tests, and corrections based on examiner standards.",
              },
            ].map((step) => (
              <Grid key={step.title} item xs={12} sm={6} md={3}>
                <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                  <CardContent>
                    <Typography fontWeight={900} gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                      {step.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                What you will learn
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 920, lineHeight: 1.9 }}>
                We teach the skills that make drivers calm and safe. This includes control, awareness, and road rules applied in real situations.
              </Typography>
              <Box component="ul" sx={{ m: 0, mt: 2, pl: 2.5, color: "text.secondary" }}>
                {[
                  "Mirror routines and blind spot checks",
                  "Correct steering and lane discipline",
                  "Parking, reversing, and controlled maneuvers",
                  "Intersection judgement and right of way",
                  "Defensive driving habits",
                ].map((t) => (
                  <li key={t}>
                    <Typography color="textSecondary">{t}</Typography>
                  </li>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {[
                  {
                    title: "Yard skills",
                    body: "Controlled movement in tight spaces, correct observations, and clean execution.",
                  },
                  {
                    title: "On road skills",
                    body: "Smooth flow in traffic, safe spacing, and confident route driving.",
                  },
                  {
                    title: "Road rules",
                    body: "Signs, markings, right of way, and safe judgement in complex areas.",
                  },
                  {
                    title: "Exam readiness",
                    body: "Mock tests, corrections, and timing so learners feel prepared and calm.",
                  },
                ].map((b) => (
                  <Grid key={b.title} item xs={12} sm={6}>
                    <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                      <CardContent>
                        <Typography fontWeight={900} gutterBottom>
                          {b.title}
                        </Typography>
                        <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                          {b.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                What to prepare before you start
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 900 }}>
                To keep lessons smooth, it helps to be clear on your class, your schedule, and your main goal.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                <CardContent>
                  <Typography fontWeight={900} gutterBottom>
                    Share these details
                  </Typography>
                  <Typography color="textSecondary">Your full name and phone number</Typography>
                  <Typography color="textSecondary">Your license class</Typography>
                  <Typography color="textSecondary">Your preferred days and times</Typography>
                  <Typography color="textSecondary">Your pickup area in Bulawayo</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
