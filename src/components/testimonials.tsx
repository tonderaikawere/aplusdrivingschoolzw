import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Facebook } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Testimonials = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={3}
      textAlign={"center"}
      sx={{ padding: { xs: theme.spacing(4), lg: theme.spacing(10) } }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight={800} component="h2" gutterBottom>
          Testimonials
        </Typography>
        <Typography
          paragraph
          color="textSecondary"
          maxWidth={"70%"}
          style={{ margin: "0 auto" }}
        >
          At A Plus, we are passionate about creating a nurturing and joyful
          learning environment for every student. Here are just a few examples
          of how we have impacted our families:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
            position: "relative",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/Images/testimonial-1.png"
            alt="Team 1"
          />
          <IconButton
            aria-label="facebook"
            sx={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: " transparent",
              "&:hover": {
                color: " #fff",
              },
            }}
          >
            <Facebook />
          </IconButton>
          <CardContent>
            <Typography variant="body2" component="p" textAlign="left" mb={3}>
              A Plus Driving School made learning to drive a breeze! The
              instructors were patient and knowledgeable, and their personalized
              approach helped me gain confidence quickly. Thanks to their
              guidance, I passed my test with ease and now feel comfortable on
              the road.
            </Typography>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body2" component="p">
                  Sipho Moyo
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" component="p">
                  Class 1 Holder
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
            position: "relative",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/Images/testimonial-2.png"
            alt="Team 1"
          />
          <IconButton
            aria-label="facebook"
            sx={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: " transparent",
              "&:hover": {
                color: " #fff",
              },
            }}
          >
            <Facebook />
          </IconButton>
          <CardContent>
            <Typography variant="body2" component="p" textAlign="left" mb={3}>
              I was nervous about driving, but A Plus Driving School
              instructors were amazing. They helped me overcome my fears and
              become a confident driver. Their comprehensive curriculum and
              supportive approach made all the difference. Highly recommend!
            </Typography>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body2" component="p">
                  Tariro Ncube
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" component="p">
                  Class 1 Holder
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
            position: "relative",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/Images/testimonial-3.png"
            alt="Team 1"
          />
          <IconButton
            aria-label="facebook"
            sx={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: " transparent",
              "&:hover": {
                color: " #fff",
              },
            }}
          >
            <Facebook />
          </IconButton>
          <CardContent>
            <Typography variant="body2" component="p" textAlign="left" mb={3}>
              A Plus Driving School exceeded my expectations. The instructors
              were professional, patient, loving and dedicated to my success. They
              provided me with the skills I needed to become a safe driver, and
              I am grateful for their guidance.
            </Typography>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body2" component="p">
                  Thandeka Dube
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" component="p">
                  Class 1 Holder
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
            position: "relative",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/Images/winner.jpg"
            alt="Team 1"
          />
          <IconButton
            aria-label="facebook"
            sx={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: " transparent",
              "&:hover": {
                color: " #fff",
              },
            }}
          >
            <Facebook />
          </IconButton>
          <CardContent>
            <Typography variant="body2" component="p" textAlign="left" mb={3}>
              I am so grateful to A Plus Driving School for helping me get my
              license. The instructors were supportive and thorough, and their
              guidance prepared me well for the road. I highly recommend them to
              anyone looking to learn how to drive.
            </Typography>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body2" component="p">
                  Tinashe Nkomo
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" component="p">
                  Class 1 Holder
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
