"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Services = ({ standalone = false }: { standalone?: boolean }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,245,245,1) 100%)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
              Our Services
            </Typography>
            <Typography paragraph color="textSecondary" sx={{ maxWidth: 720 }}>
              Everything you need to pass your test with confidence, from theory and yard practice to road driving and refresher lessons.
            </Typography>
          </Grid>
          {!standalone ? (
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" }, alignItems: "flex-start" }}>
              <Button
                variant="contained"
                size="large"
                color="error"
                sx={{
                  mt: { xs: 1, md: 0.5 },
                  color: "#fff",
                  borderRadius: 999,
                  px: 3,
                  ":hover": { backgroundColor: "error.dark" },
                }}
              >
                View more
              </Button>
            </Grid>
          ) : null}

          {[
            {
              title: "License Training",
              description:
                "Step-by-step training for Class 1 to 4 learners, focused on safe driving habits and exam readiness.",
              image: "/Images/oral-learning.png",
            },
            {
              title: "Practical Driving Lessons",
              description:
                "Structured lessons with patient instructors: clutch control, steering, awareness, and defensive driving.",
              image: "/Images/driving.jpg",
            },
            {
              title: "Traffic Guideline",
              description:
                "Clear, easy-to-understand theory sessions: road signs, rules, hazard perception, and test preparation.",
              image: "/Images/oral.jpg",
            },
            {
              title: "Refresher & Confidence Lessons",
              description:
                "Perfect if you haven’t driven in a while or want extra practice before your test or after passing.",
              image: "/Images/our-cars.jpg",
            },
          ].map((service) => (
            <Grid key={service.title} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  transition: "transform 180ms ease, box-shadow 180ms ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="170"
                    image={service.image}
                    alt={service.title}
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.60) 100%)",
                    }}
                  />
                  <Box sx={{ position: "absolute", left: 14, bottom: 12 }}>
                    <Typography sx={{ color: "#fff", fontWeight: 900, lineHeight: 1.1 }}>
                      {service.title}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 2.25 }}>
                  <Typography paragraph color="textSecondary" sx={{ mt: 0.5 }}>
                    {service.description}
                  </Typography>
                  {!standalone ? (
                    <Link
                      href="/services"
                      color="error"
                      sx={{
                        textDecoration: "none",
                        mt: "auto",
                        fontWeight: 800,
                        display: "inline-flex",
                        width: "fit-content",
                        ":hover": { textDecoration: "underline", color: "error.dark" },
                      }}
                    >
                      Learn more
                    </Link>
                  ) : null}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
