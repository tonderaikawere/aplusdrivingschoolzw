"use client";

import React from "react";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

export default function PricingPage() {
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
            Pricing Packages
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, maxWidth: 980, lineHeight: 1.8 }}>
            Learn the right way, right away. Clear training options with supportive coaching so you master everything step-by-step and pass with confidence.
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
              label="Per-lesson rates"
              color="error"
              variant="outlined"
              sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }}
            />
            <Chip
              label="Special promotion available"
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
                Lesson rates and promotions
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 980, lineHeight: 1.9 }}>
                Choose the option that fits your license class and timeline. We keep training structured, calm, and practical so you improve faster and feel confident on the road.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                {[
                  {
                    title: "Personal coaching",
                    desc: "You get step-by-step correction and clear routines so you know exactly what to fix and what to practice next.",
                  },
                  {
                    title: "Confidence building",
                    desc: "We train in a way that reduces fear and builds real control, awareness, and decision-making in traffic.",
                  },
                  {
                    title: "Pass-focused structure",
                    desc: "We teach the full test standard, the common fail points, and the habits examiners want to see.",
                  },
                ].map((v) => (
                  <Grid key={v.title} item xs={12} sm={6} md={4}>
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
                          {v.title}
                        </Typography>
                        <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                          {v.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                {[{
                  title: "Class 4B lessons",
                  price: "$5 per 30 minutes",
                  points: [
                    "Practical training with step-by-step correction",
                    "Maneuvers, parking, and reversing routines",
                    "Road rules applied during driving, not just theory",
                  ],
                },
                {
                  title: "Class 2 CE lessons",
                  price: "$6 per 30 minutes",
                  points: [
                    "Practical control, safety checks, and discipline",
                    "Real-world handling guidance for confidence",
                    "Test-focused preparation with consistent feedback",
                  ],
                },
                {
                  title: "Oral lessons",
                  price: "$15 (pay once)",
                  points: [
                    "Pay once and learn until you pass",
                    "Clear explanations with exam-style questions",
                    "Road signs, rules, and common oral topics",
                  ],
                }].map((item) => (
                  <Grid key={item.title} item xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                        transition: "transform 180ms ease, box-shadow 180ms ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 22px 70px rgba(0,0,0,0.14)",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" fontWeight={900} gutterBottom>
                          {item.title}
                        </Typography>
                        <Chip label={item.price} color="error" variant="filled" size="small" />
                        <Divider sx={{ my: 2 }} />
                        <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                          {item.points.map((t) => (
                            <li key={t}>
                              <Typography color="textSecondary">{t}</Typography>
                            </li>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "2px solid rgba(211,47,47,0.55)",
                  boxShadow: "0 22px 70px rgba(211,47,47,0.16)",
                  background:
                    "radial-gradient(900px 420px at 20% 10%, rgba(211,47,47,0.24) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(28,28,28,1) 100%)",
                }}
              >
                <CardContent>
                  <Stack spacing={1.25}>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                      <Typography variant="h6" fontWeight={900} sx={{ color: "#fff" }}>
                        Special Promotion
                      </Typography>
                      <Chip label="$160 today" color="error" variant="filled" size="small" />
                    </Stack>

                    <Typography sx={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.9 }}>
                      Pay $160 today and learn oral and practical lessons. You can learn until you pass.
                    </Typography>

                    <Divider sx={{ borderColor: "rgba(255,255,255,0.14)" }} />

                    <Typography fontWeight={900} sx={{ color: "#fff" }}>
                      Includes
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2.5, color: "rgba(255,255,255,0.82)" }}>
                      {[
                        "Oral lessons and practical lessons",
                        "Free car hire in Bulawayo",
                        "Guidance on routes, maneuvers, and exam readiness",
                        "Ongoing coaching until you pass",
                      ].map((t) => (
                        <li key={t}>
                          <Typography sx={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.85 }}>{t}</Typography>
                        </li>
                      ))}
                    </Box>

                    <Divider sx={{ borderColor: "rgba(255,255,255,0.14)" }} />

                    <Typography sx={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.9 }}>
                      We focus on mastering everything step by step and correcting the small mistakes that cause test fails.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

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
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                More about our pricing
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 980, lineHeight: 1.9 }}>
                We offer clear per-lesson rates, flexible promotions, and practical guidance so you master the full standard and pass.
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1.5, maxWidth: 980, lineHeight: 1.9 }}>
                Refresher courses are available for drivers who want to rebuild confidence, improve control, or prepare again for a test.
              </Typography>

              <Grid container spacing={2} sx={{ mt: 0.5 }}>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      border: "1px solid rgba(0,0,0,0.08)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                      transition: "transform 180ms ease, box-shadow 180ms ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 22px 70px rgba(0,0,0,0.14)",
                      },
                    }}
                  >
                    <CardContent>
                      <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                        <Typography fontWeight={900}>Promotions / packages</Typography>
                        <Chip label="Best value" color="error" variant="filled" size="small" />
                      </Stack>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                        {[
                          "Pay 10 lessons and get 2 FREE",
                          "Pay 15 lessons and get 3 FREE",
                          "Pay 20 lessons and get 4 FREE",
                          "Pay for a full course (30 lessons) and get FREE car hire to Bulawayo",
                        ].map((t) => (
                          <li key={t}>
                            <Typography color="textSecondary">{t}</Typography>
                          </li>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      border: "1px solid rgba(0,0,0,0.08)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                      transition: "transform 180ms ease, box-shadow 180ms ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 22px 70px rgba(0,0,0,0.14)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography fontWeight={900} gutterBottom>
                        Car hire rates
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                        {[
                          "Car hire: Bulawayo $40",
                          "Car hire: Plumtree $60",
                          "Truck hire (Bulawayo) $50",
                        ].map((t) => (
                          <li key={t}>
                            <Typography color="textSecondary">{t}</Typography>
                          </li>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 18px 60px rgba(0,0,0,0.10)" }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Box>
                      <Typography fontWeight={900} gutterBottom>
                        Hours of operation
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                        {[
                          "Mon – Fri: 6AM – 6PM",
                          "Saturday: 6AM – 3PM",
                          "Sunday: 8AM – 1PM",
                        ].map((t) => (
                          <li key={t}>
                            <Typography color="textSecondary">{t}</Typography>
                          </li>
                        ))}
                      </Box>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography fontWeight={900} gutterBottom>
                        Locations
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                        {[
                          "Mayson Court, 1st Floor, Office 17",
                          "13 Avenue & Fife Street, Bulawayo, Zimbabwe",
                        ].map((t) => (
                          <li key={t}>
                            <Typography color="textSecondary">{t}</Typography>
                          </li>
                        ))}
                      </Box>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography fontWeight={900} gutterBottom>
                        Payment methods
                      </Typography>
                      <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                        Cash | Bank Transfer | Eco Cash Transfer (USD/ZWG)
                      </Typography>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography fontWeight={900} gutterBottom>
                        Contact
                      </Typography>
                      <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                        +263 77 246 2823 | +263 71 238 9494
                      </Typography>
                      <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                        aplusdrivingschl@gmail.com
                      </Typography>
                      <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                        www.aplusdrivingschool.co.zw
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
