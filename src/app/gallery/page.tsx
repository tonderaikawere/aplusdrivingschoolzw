"use client";

import React from "react";
import Gallery from "@/components/gallery";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";

export default function GalleryPage() {
  const ourCars = [
    "/Images/cars.jpg",
    "/Images/our-cars.jpg",
    "/Images/white-cars.jpg",
    "/Images/cars-2.png",
    "/Images/cars-3.png",
    "/Images/cars-4.png",
    "/Images/cars-lighting.jpg",
  ];

  const drivingLessons = [
    "/Images/driving.jpg",
    "/Images/driving-2.jpg",
    "/Images/driving-3.jpg",
    "/Images/driving3.jpg",
    "/Images/hillstart.jpg",
    "/Images/learm.jpg",
    "/Images/out.png",
  ];

  const oralLessons = [
    "/Images/oral.jpg",
    "/Images/oral-learning.png",
    "/Images/oral-1.png",
    "/Images/oral-2.jpg",
    "/Images/oral-3.png",
    "/Images/oral-4.png",
  ];

  const successStories = [
    "/Images/success-single.jpg",
    "/Images/success-single-2.jpg",
    "/Images/success-single-3.jpg",
    "/Images/success-single-4.jpg",
    "/Images/success-1.jpg",
    "/Images/success-2.jpg",
    "/Images/success-3.jpg",
    "/Images/success-4.jpg",
    "/Images/success-5.jpg",
    "/Images/success-6.jpg",
    "/Images/success-7.jpg",
    "/Images/success-8.jpg",
    "/Images/success-9.jpg",
    "/Images/success-10.jpg",
    "/Images/success-11.jpg",
    "/Images/success-12.jpg",
    "/Images/success-13.jpg",
    "/Images/success-14.jpg",
    "/Images/success-15.jpg",
    "/Images/success-16.jpg",
    "/Images/success-17.jpg",
    "/Images/success-18.jpg",
    "/Images/success-19.jpg",
    "/Images/success-20.jpg",
    "/Images/success-21.jpg",
    "/Images/success-22.jpg",
    "/Images/success-23.jpg",
    "/Images/success-24.jpg",
    "/Images/success-25.jpg",
  ];

  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 10 },
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.45) 60%, rgba(250,250,250,1) 100%), url(/Images/our-cars.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
            Gallery
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, maxWidth: 980, lineHeight: 1.8 }}>
            A closer look at our vehicles, training moments, oral lessons, and success stories.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
            <Chip label="Our Cars" color="error" variant="filled" />
            <Chip label="Driving Lessons" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
            <Chip label="Oral Lessons" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
            <Chip label="Success" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
        <Container maxWidth="xl" sx={{ mb: { xs: 2, md: 1 } }}>
          <Typography variant="h4" fontWeight={900} gutterBottom>
            Our cars
          </Typography>
          <Typography color="textSecondary" sx={{ maxWidth: 920 }}>
            Vehicles used for lessons and training.
          </Typography>
        </Container>
        <Gallery images={ourCars} showHeader={false} />
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,245,245,1) 100%)", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Container maxWidth="xl" sx={{ mb: { xs: 2, md: 1 } }}>
          <Typography variant="h4" fontWeight={900} gutterBottom>
            Driving lessons
          </Typography>
          <Typography color="textSecondary" sx={{ maxWidth: 920 }}>
            Moments from training sessions and skill building.
          </Typography>
        </Container>
        <Gallery images={drivingLessons} showHeader={false} />
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Container maxWidth="xl" sx={{ mb: { xs: 2, md: 1 } }}>
          <Typography variant="h4" fontWeight={900} gutterBottom>
            Oral lessons
          </Typography>
          <Typography color="textSecondary" sx={{ maxWidth: 920 }}>
            Oral lesson highlights covering rules, signs, and road understanding.
          </Typography>
        </Container>
        <Gallery images={oralLessons} showHeader={false} />
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Container maxWidth="xl" sx={{ mb: { xs: 2, md: 1 } }}>
          <Typography variant="h4" fontWeight={900} gutterBottom>
            Success stories
          </Typography>
          <Typography color="textSecondary" sx={{ maxWidth: 920 }}>
            Successful learners and milestone moments.
          </Typography>
        </Container>
        <Gallery images={successStories} showHeader={false} />
      </Box>
    </Box>
  );
}
