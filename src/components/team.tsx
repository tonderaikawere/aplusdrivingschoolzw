import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, IconButton, Box, Avatar } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

function MemberMedia({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = React.useState(false);

  if (!src || failed) {
    return (
      <Box
        sx={{
          height: 140,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(700px 220px at 20% 10%, rgba(211,47,47,0.18) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(18,18,18,0.85) 0%, rgba(28,28,28,0.95) 100%)",
        }}
      >
        <Avatar sx={{ width: 64, height: 64, bgcolor: "rgba(255,255,255,0.14)", color: "#fff", fontWeight: 900 }}>
          {getInitials(name)}
        </Avatar>
      </Box>
    );
  }

  return (
    <CardMedia
      component="img"
      height="140"
      image={src}
      alt={name}
      onError={() => setFailed(true)}
    />
  );
}

const Team = () => {
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
          Our Team
        </Typography>
        <Typography paragraph color="textSecondary">
          Meet the amazing Team at A Plus Driving School
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <MemberMedia name="Andile B Nsimango" />
          <CardContent>
            <Typography variant="h6" fontWeight={700} component="h2">
              Andile B Nsimango
            </Typography>
            <Typography variant="body2" component="p">
              Director
            </Typography>
            <IconButton
              aria-label="facebook"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Facebook />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <MemberMedia name="Albertina N Ncube" />
          <CardContent>
            <Typography variant="h6" fontWeight={700} component="h2">
              Albertina N Ncube
            </Typography>
            <Typography variant="body2" component="p">
              Office Admin
            </Typography>
            <IconButton
              aria-label="facebook"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Facebook />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <MemberMedia src="/Images/makhosi.jpg" name="Makhosi Nsimango" />
          <CardContent>
            <Typography variant="h6" fontWeight={700} component="h2">
              Makhosi Nsimango
            </Typography>
            <Typography variant="body2" component="p">
              Senior Instructor
            </Typography>
            <IconButton
              aria-label="facebook"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Facebook />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Team;