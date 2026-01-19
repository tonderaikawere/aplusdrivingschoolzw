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

const WhyUs = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: {
          xs: theme.spacing(4),
          lg: theme.spacing(10),
          position: "relative",
          background: "#FEFBFB",
        },
      }}
    >
      <Grid item textAlign="center" xs={12}>
        <Typography variant="h4" component="h2" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ margin: "0 auto", marginTop: "10%" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardMedia
            component="img"
            // height="200"
            image="/Images/car.png"
            alt="Why Us"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { x: 1, y: 5, label: "Safety Driving" },
            { x: 2, y: 7, label: "Licensed Training" },
            { x: 1, y: 9, label: "Experienced Instructors" },
            { x: 2, y: 11, label: "Trattic Rules" },
            { x: 5, y: 4, label: "Following Rules & Requlations" },
            { x: 10, y: 5, label: "Standard Vehicles" },
            { x: 9, y: 7, label: "Comfort Vehicles" },
            { x: 10, y: 9, label: "Special Classes" },
            { x: 9, y: 11, label: "Flexible Schedule" },
          ].map((button, index) => (
            <Card
              key={index}
              sx={{
                position: "absolute",
                top: button.y * 60,
                left: button.x * 120,
                width: "max-content",
                maxHeight: "30px",
                backgroundColor: "white",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography variant="body2" component="p">
                  {button.label}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default WhyUs;
