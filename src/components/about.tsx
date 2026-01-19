"use client";
import React from "react";
import { Box, Grid, Typography, Link, Container, Stack, Chip } from "@mui/material";
import Image from "next/image";
import image1 from "../../public/Images/about.png";

export default function About({ standalone = false }: { standalone?: boolean }) {
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
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                maxWidth: { xs: 560, md: 620 },
                mx: { xs: "auto", md: 0 },
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
              }}
            >
              <Image
                width={900}
                height={900}
                alt="about-image"
                src={image1}
                style={{ width: "100%", maxHeight: 430, height: "auto", objectFit: "cover" }}
                priority={false}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(211,47,47,0.20) 0%, rgba(0,0,0,0) 55%)",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight={900}
              component="h2"
              gutterBottom
              sx={{ letterSpacing: -0.3 }}
            >
              About us
            </Typography>

            <Typography paragraph color="textSecondary" sx={{ maxWidth: 780 }}>
              A Plus Driving School helps learners become safe, confident drivers with practical, real-road training and clear theory support. We focus on the skills you need for everyday driving, not just passing the test.
            </Typography>

            <Typography paragraph sx={{ display: { xs: "none", md: "block" }, maxWidth: 820 }} color="textSecondary">
              Our lessons are structured and easy to follow, covering core fundamentals like clutch control, parking, hill starts, hazard awareness, road signs, and safe decision-making. Whether you are a first-time learner or returning to driving, we guide you step-by-step at a pace that builds confidence.
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2.5 }}>
              <Chip label="Certified instructors" color="error" variant="outlined" />
              <Chip label="Flexible schedules" color="error" variant="outlined" />
              <Chip label="Class 1 to 4" color="error" variant="outlined" />
            </Stack>

            {!standalone ? (
              <Link
                href="/services"
                color="error"
                sx={{
                  textDecoration: "none",
                  fontWeight: 800,
                  ":hover": { textDecoration: "underline", color: "error.dark" },
                }}
              >
                Explore our services
              </Link>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
