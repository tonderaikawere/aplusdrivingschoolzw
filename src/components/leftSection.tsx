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
  Button,
  Avatar,
} from "@mui/material";
import { Facebook } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

function TeamMemberMedia({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = React.useState(false);

  if (!src || failed) {
    return (
      <Box
        sx={{
          height: 220,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(800px 280px at 20% 10%, rgba(211,47,47,0.18) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(18,18,18,0.85) 0%, rgba(28,28,28,0.95) 100%)",
        }}
      >
        <Avatar
          sx={{
            width: 88,
            height: 88,
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
      height="220"
      image={src}
      alt={name}
      onError={() => setFailed(true)}
      style={{ width: "100%", objectFit: "cover", objectPosition: "top" }}
    />
  );
}

const Team = () => {
  const theme = useTheme();

  const members = [
    { name: "Andile B Nsimango", role: "Director" },
    { name: "Albertina N Ncube", role: "Office Admin" },
    { name: "Makhosi Nsimango", role: "Senior Instructor", img: "/Images/makhosi.jpg" },
  ];

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
              Our Team
            </Typography>
            <Typography paragraph color="textSecondary" sx={{ maxWidth: 720, mb: 0 }}>
              Meet the team that guides you step by step, keeps training calm and structured, and helps you build real confidence.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              alignItems: "flex-start",
            }}
          >
            <Button
              component={Link}
              href="/team"
              variant="contained"
              color="error"
              size="large"
              sx={{
                mt: { xs: 1, md: 0.5 },
                color: "#fff",
                px: 3,
                ":hover": { backgroundColor: "error.dark" },
              }}
            >
              View all
            </Button>
          </Grid>

          {members.slice(0, 4).map((m) => (
            <Grid key={m.name} item xs={12} sm={6} md={3}>
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
                  <TeamMemberMedia src={m.img} name={m.name} />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.00) 40%, rgba(0,0,0,0.55) 100%)",
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

                <CardContent sx={{ flexGrow: 1, py: 2.25 }}>
                  <Typography variant="h6" fontWeight={900} component="h3">
                    {m.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {m.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
