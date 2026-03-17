"use client";

import React from "react";
import {
  Box,
  Chip,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

function TeamHeroMedia({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = React.useState(false);

  if (!src || failed) {
    return (
      <Box
        sx={{
          height: 240,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(900px 300px at 20% 10%, rgba(211,47,47,0.18) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(18,18,18,0.85) 0%, rgba(28,28,28,0.95) 100%)",
        }}
      >
        <Avatar
          sx={{
            width: 92,
            height: 92,
            bgcolor: "rgba(255,255,255,0.14)",
            color: "#fff",
            fontWeight: 900,
          }}
        >
          {getInitials(name)}
        </Avatar>
      </Box>
    );
  }

  return (
    <CardMedia
      component="img"
      height="240"
      image={src}
      alt={name}
      onError={() => setFailed(true)}
      style={{ objectFit: "cover", objectPosition: "top" }}
    />
  );
}

export default function TeamPage() {
  const members = [
    {
      name: "Andile B Nsimango",
      role: "Director",
      desc:
        "Provides leadership and strategic direction for A Plus Driving School. Oversees training standards, instructor development, and service quality across every learner journey. Ensures every program is structured, professional, and focused on safe, confident driving and real exam readiness.",
      highlights: [
        "Training standards and quality assurance",
        "Program structure and learner success strategy",
        "Customer experience and service excellence",
      ],
    },
    {
      name: "Albertina N Ncube",
      role: "Office Admin",
      desc:
        "Manages daily office operations including scheduling, learner records, and communication. Helps learners choose the right course option, confirms lesson times, and supports smooth coordination between learners and instructors.",
      highlights: [
        "Bookings and timetable coordination",
        "Learner support and follow-ups",
        "Payments and administrative assistance",
      ],
    },
    {
      name: "Makhosi Nsimango",
      role: "Senior Instructor",
      img: "/Images/makhosi.jpg",
      desc:
        "Leads practical training with a calm, step-by-step approach. Focuses on control, observation, confidence in traffic, and the maneuvers required for a pass. Supports learners with clear correction plans and exam-style practice.",
      highlights: [
        "Practical lessons and maneuver mastery",
        "Mock tests and correction plans",
        "Confidence building for nervous learners",
      ],
    },
    {
      name: "Theron Ndlovu",
      role: "Instructor",
      desc:
        "Provides practical driving lessons with patient instruction and clear routines. Helps learners improve control, positioning, signaling, and safe decision-making, while focusing on the common mistakes that cause test fails.",
      highlights: [
        "Route practice and traffic confidence",
        "Safe routines and observation habits",
        "Test-focused driving correction",
      ],
    },
    {
      name: "Luckson JACK",
      role: "Instructor",
      desc:
        "Delivers structured lessons tailored to each learner’s level. Focuses on consistent repetition of key skills, correct mirror work, hazard awareness, and calm driving under pressure to support confident exam performance.",
      highlights: [
        "Skill-by-skill practice planning",
        "Hazard awareness and spacing",
        "Exam readiness routines",
      ],
    },
    {
      name: "Langelihle Ncube",
      role: "Instructor",
      desc:
        "Guides learners through practical driving techniques with a confidence-first approach. Builds strong foundations in vehicle control, parking, reversing routines, and road discipline while keeping lessons supportive and clear.",
      highlights: [
        "Vehicle control and confidence building",
        "Parking, reversing, and yard routines",
        "Road discipline and safe handling",
      ],
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 7, md: 9 },
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 60%, rgba(250,250,250,1) 100%), url(/Images/our-cars.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
            Our Team
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, maxWidth: 980, lineHeight: 1.8 }}>
            Meet the people behind your progress. You get structure, coaching, and guidance designed to help you become a confident driver and pass.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
            <Chip label="Professional" color="error" variant="filled" />
            <Chip
              label="Supportive coaching"
              color="error"
              variant="outlined"
              sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }}
            />
            <Chip
              label="Bulawayo"
              color="error"
              variant="outlined"
              sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }}
            />
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                Meet the team
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 980, lineHeight: 1.9 }}>
                Our instructors and admin team work together to keep lessons clear, practical, and focused on real results.
              </Typography>
            </Grid>

            {members.map((m) => (
              <Grid key={m.name} item xs={12} sm={6} lg={4}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    transition: "transform 180ms ease, box-shadow 180ms ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 22px 70px rgba(0,0,0,0.14)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <TeamHeroMedia src={m.img} name={m.name} />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.65) 100%)",
                      }}
                    />
                    <Box sx={{ position: "absolute", left: 16, bottom: 14, right: 16 }}>
                      <Typography sx={{ color: "#fff", fontWeight: 900, lineHeight: 1.15 }}>
                        {m.name}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 0.25 }}>
                        {m.role}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 2.5 }}>
                    <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                      {m.desc}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography fontWeight={900} gutterBottom>
                      Focus areas
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                      {m.highlights.map((t) => (
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
        </Container>
      </Box>
    </Box>
  );
}
