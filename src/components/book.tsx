import React from "react";
import {
    Button,
  Grid,
  Typography,
  
} from "@mui/material";
import CustomizedDialogs from "./Dialogs";

const Book = () =>  {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        background: "url(/Images/our-cars.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "80vh", sm: "70vh", md: "30vh", lg: "60vh" },
        marginTop: { xs: "10%", sm: "5%", lg: "0%" },
      }}
    >
      <Grid textAlign={"center"} item xs={12} md={6} lg={7} xl={7}>
        <Typography
          variant="h3"
          color={"white"}
          fontWeight={800}
          component="h2"
          gutterBottom
        >
          Book Your First Driving Lesson And Contact Us
        </Typography>
        <Grid
          item
          xs={12}
          lg={8}
          sx={{
            margin: "0 auto",
            gap: "10%",
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="error"
            sx={{
              mt: 2,
              ":hover": {
                backgroundColor: "#fff",
                color: "red",
              },
            }}
          >
            Book Now
          </Button>
          <CustomizedDialogs />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Book