"use client";

import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const RightSection = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: { xs: theme.spacing(4), lg: theme.spacing(10) },
        background: "#FEFBFB",
      }}
    >
      <Grid item textAlign="center" xs={12}>
        <Typography variant="h4" component="h2" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography paragraph>
          We focus on safe, confident driving, with structured lessons, patient instructors, and clear preparation for both theory and practical tests.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={5} sx={{ margin: "0 auto" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardMedia component="img" image="/Images/car.png" alt="Why Us" />
        </Box>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Grid container spacing={2}>
          {[
            {
              title: "Safety-first training",
              body: "We teach defensive driving, hazard awareness, and correct road positioning from day one.",
            },
            {
              title: "Clear lesson structure",
              body: "Each lesson has a goal: clutch control, parking, hill start, town driving, and test practice.",
            },
            {
              title: "Theory made simple",
              body: "Road signs, rules, and mock questions explained in plain language so you retain it.",
            },
            {
              title: "Flexible scheduling",
              body: "Book sessions that fit your routine, on weekdays and weekends.",
            },
            {
              title: "Modern training vehicles",
              body: "Comfortable, well-maintained cars for a smooth learning experience.",
            },
            {
              title: "Confidence building",
              body: "Patient instructors who help nervous learners become calm and in control.",
            },
          ].map((item, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={800} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RightSection;
