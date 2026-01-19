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
  IconButton,
} from "@mui/material";
import { Facebook } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const BoxHolder = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        background:
          "linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,245,245,1) 100%)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3} textAlign={"center"}>
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
              Testimonials
            </Typography>
            <Typography paragraph color="textSecondary" sx={{ maxWidth: 820, mx: "auto" }}>
              Real feedback from learners who built confidence, improved their skills, and prepared for their driving tests.
            </Typography>
          </Grid>

          {[
            {
              img: "/Images/testimonial-1.png",
              text:
                "A Plus Driving School made learning to drive a breeze! The instructors were patient and knowledgeable, and their personalized approach helped me gain confidence quickly. Thanks to their guidance, I passed my test with ease and now feel comfortable on the road.",
              name: "Sipho Moyo",
              role: "Learner",
            },
            {
              img: "/Images/testimonial-2.png",
              text:
                "I was nervous about driving, but A Plus Driving School instructors were amazing. They helped me overcome my fears and become a confident driver. Their comprehensive curriculum and supportive approach made all the difference. Highly recommend!",
              name: "Tariro Ncube",
              role: "Learner",
            },
            {
              img: "/Images/testimonial-3.png",
              text:
                "A Plus Driving School exceeded my expectations. The instructors were professional, patient, loving and dedicated to my success. They provided me with the skills I needed to become a safe driver, and I am grateful for their guidance.",
              name: "Thandeka Dube",
              role: "Learner",
            },
            {
              img: "/Images/winner.jpg",
              text:
                "I am so grateful to A Plus Driving School for helping me get my license. The instructors were supportive and thorough, and their guidance prepared me well for the road. I highly recommend them to anyone looking to learn how to drive.",
              name: "Tinashe Nkomo",
              role: "Learner",
            },
          ].map((t, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 3,
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
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
                    height="180"
                    image={t.img}
                    alt={t.name}
                    style={{ width: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                  <IconButton
                    aria-label="facebook"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      color: "#fff",
                      bgcolor: "rgba(0,0,0,0.35)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      "&:hover": { bgcolor: "rgba(0,0,0,0.50)" },
                    }}
                  >
                    <Facebook />
                  </IconButton>
                </Box>

                <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 2.25 }}>
                  <Typography
                    variant="body2"
                    component="p"
                    textAlign="left"
                    color="textSecondary"
                    sx={{ mb: 2.5, lineHeight: 1.7 }}
                  >
                    {t.text}
                  </Typography>
                  <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: "auto" }}>
                    <Grid item>
                      <Typography variant="body2" component="p" fontWeight={900}>
                        {t.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" component="p" color="textSecondary">
                        {t.role}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BoxHolder;
