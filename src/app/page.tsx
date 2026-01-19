import React from "react";
import HeroCenter from "@/components/hero";
import About from "@/components/about";
import BoxHolder from "@/components/box";
import CallToAction from "@/components/callToAction";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Team from "@/components/leftSection";
import RightSection from "@/components/rightSection";
import Book from "@/components/showCase";

import Link from "next/link";
import { Box, Container, Grid, Typography, Chip, Stack, Button, Divider } from "@mui/material";


export default function Home() {
  return (
    <div>
      <div id="Home">
        <HeroCenter />
      </div>

      <div id="About">
        <About />
      </div>

      <div id="Services">
        <Services />
      </div>

      <Box
        id="Gallery"
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
                Gallery
              </Typography>
              <Typography paragraph color="textSecondary" sx={{ maxWidth: 720, mb: 0 }}>
                Photos from lessons, vehicles, and successful learners.
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
                href="/gallery"
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

            <Grid item xs={12}>
              <Divider sx={{ mb: 1.5 }} />
              <Box sx={{ mt: 1 }}>
                <Gallery limit={4} showViewMore={false} showHeader={false} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "radial-gradient(1200px 500px at 20% 20%, rgba(211,47,47,0.16) 0%, rgba(0,0,0,0) 60%), radial-gradient(900px 460px at 80% 0%, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(28,28,28,1) 100%)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                <Chip label="Special Promotion" color="error" variant="filled" />
                <Chip
                  label="Bulawayo"
                  color="error"
                  variant="outlined"
                  sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.30)" }}
                />
                <Chip
                  label="Learn until you pass"
                  color="error"
                  variant="outlined"
                  sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.30)" }}
                />
              </Stack>

              <Typography variant="h3" fontWeight={900} component="h2" gutterBottom sx={{ color: "#fff" }}>
                Pay $160 today
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.86)", maxWidth: 980, lineHeight: 1.9 }}>
                Train for oral and practical lessons with a clear step-by-step plan.
                You keep learning until you pass.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: { xs: 2.75, md: 3.25 },
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "0 26px 80px rgba(0,0,0,0.35)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                    <Typography sx={{ color: "#fff", fontWeight: 900 }}>
                      Promotion includes
                    </Typography>
                    <Chip label="$160" color="error" variant="filled" size="small" />
                  </Stack>
                  <Divider sx={{ borderColor: "rgba(255,255,255,0.16)" }} />

                  <Box component="ul" sx={{ m: 0, pl: 2.5, color: "rgba(255,255,255,0.80)" }}>
                    {[
                      "Oral lessons and practical lessons",
                      "Free car hire in Bulawayo",
                      "Guidance on test routes, maneuvers, and exam requirements",
                      "Progress tracking and correction until you pass",
                    ].map((t) => (
                      <li key={t}>
                        <Typography sx={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.85 }}>
                          {t}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Book />
      <RightSection />
      <Team />
      <BoxHolder />

      <div id="Contacts">
        <CallToAction />
      </div>
    </div>
  );
}
