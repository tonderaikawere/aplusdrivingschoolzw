"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

export default function AboutPage() {
  return (
    <div>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 11 },
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.45) 55%, rgba(250,250,250,1) 100%), url(/Images/cars-lighting.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
            About A Plus Driving School
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, maxWidth: 980, lineHeight: 1.8 }}>
            Learn the right way, right away.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.80)", mt: 1, maxWidth: 980, lineHeight: 1.8 }}>
            We believe in teaching the best quality and the right way that leads to a better future.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
            <Chip label="Founded in 2020" color="error" variant="filled" />
            <Chip label="Bulawayo" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
            <Chip label="Quality training" color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={900} gutterBottom>
                How we started and who we are
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                A Plus Driving School was founded by Makhosi Nsimanga in 2020. We started small and kept improving step by step.
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1.5, lineHeight: 1.9 }}>
                The biggest breakthrough came in 2023 when we opened our office in Bulawayo at 13 Avenue and Fife Street, Mayson Court. From that moment everything changed. We had more progress, more passes, and more reasons to keep working.
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1.5, lineHeight: 1.9 }}>
                We do not believe we are the best because people say so. We believe in A Plus because we provide A Plus results.
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1.5, lineHeight: 1.9 }}>
                Our goal is to provide the best services to learners across Zimbabwe, starting with Bulawayo. In the long term, we want to serve learners everywhere.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {[
                  {
                    title: "2020",
                    body: "Founded by Makhosi Nsimanga with a focus on quality training and real road confidence.",
                  },
                  {
                    title: "2023",
                    body: "Office opened in Bulawayo at 13 Avenue and Fife Street, Mayson Court, and the school grew quickly.",
                  },
                  {
                    title: "Today",
                    body: "We continue improving through progress, passes, and strong learner support.",
                  },
                  {
                    title: "Next",
                    body: "Expand services to more learners across Zimbabwe, then grow beyond.",
                  },
                ].map((item) => (
                  <Grid key={item.title} item xs={12} sm={6}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                      }}
                    >
                      <CardContent>
                        <Typography fontWeight={900} gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography color="textSecondary">{item.body}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,245,245,1) 100%)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                Motto, mission, and vision
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 980, lineHeight: 1.9 }}>
                We exist to make driving a way of life, not something scary. A good driver should drive with confidence and without fear of police, VID, or any road situation.
              </Typography>
            </Grid>

            {[
              {
                title: "Motto",
                body: "Learn the right way, right away.",
              },
              {
                title: "Mission",
                body: "Teach the best quality and the right way so learners become safe, confident drivers.",
              },
              {
                title: "Vision",
                body: "Provide A Plus services to learners across Zimbabwe, starting in Bulawayo, then grow to serve the world.",
              },
            ].map((item) => (
              <Grid key={item.title} item xs={12} md={4}>
                <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight={900} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                      {item.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                What makes A Plus different
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                We keep training simple, clear, and consistent. Our focus is not only passing. It is building habits that make someone calm and safe on the road.
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1.5, lineHeight: 1.9 }}>
                Every learner has a different starting point. We adjust the pace but we keep standards high.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                {[
                  {
                    title: "Clear step by step progress",
                    body: "We train basics first, then build up to traffic work and test preparation without skipping the fundamentals.",
                  },
                  {
                    title: "Safety focused routines",
                    body: "Observation, signaling, positioning, and speed control are trained as daily habits.",
                  },
                  {
                    title: "Confidence in real situations",
                    body: "We practice situations learners actually face, like busy intersections, parking, and correct decision making.",
                  },
                  {
                    title: "Support that stays respectful",
                    body: "We correct mistakes clearly and respectfully so learners improve without fear.",
                  },
                ].map((v) => (
                  <Grid key={v.title} item xs={12} sm={6}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 3,
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                      }}
                    >
                      <CardContent>
                        <Typography fontWeight={900} gutterBottom>
                          {v.title}
                        </Typography>
                        <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                          {v.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                How lessons are structured
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 1.9, maxWidth: 980 }}>
                Lessons follow a routine that makes progress easier to measure. We start with vehicle control and correct observation. Then we add traffic practice and route familiarity.
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1.5, lineHeight: 1.9, maxWidth: 980 }}>
                We also make time for corrections. That is where confidence grows.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 18px 60px rgba(0,0,0,0.10)" }}>
                <CardContent>
                  <Typography fontWeight={900} gutterBottom>
                    Typical lesson flow
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                    {[
                      "Brief review of the last lesson",
                      "Main skill focus for today",
                      "Practice with corrections and feedback",
                      "Short recap and next steps",
                    ].map((t) => (
                      <li key={t}>
                        <Typography color="textSecondary">{t}</Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,245,245,1) 100%)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                Our training standards
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 980, lineHeight: 1.9 }}>
                We train with standards that make driving feel normal and safe. These standards guide how we teach, how we correct, and how we measure progress.
              </Typography>
            </Grid>

            {[
              {
                title: "Safety first",
                body: "Good habits come before speed. We focus on spacing, observation, and calm control.",
              },
              {
                title: "Clear communication",
                body: "We explain what is wrong, why it is wrong, and how to fix it in the next attempt.",
              },
              {
                title: "Consistency",
                body: "Lessons follow a routine so learners know what to expect and improve faster.",
              },
              {
                title: "Test alignment",
                body: "We train the skills the examiner expects and the habits that keep drivers safe after the test.",
              },
            ].map((s) => (
              <Grid key={s.title} item xs={12} sm={6} md={3}>
                <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                  <CardContent>
                    <Typography fontWeight={900} gutterBottom>
                      {s.title}
                    </Typography>
                    <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                      {s.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                Safety is a daily practice
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                Safety is not only a rule. It is a routine. We train learners to check mirrors, manage speed, keep safe spacing, and stay patient when traffic is stressful.
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1.5, lineHeight: 1.9 }}>
                We also encourage respectful driving that protects pedestrians, cyclists, and other drivers.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 18px 60px rgba(0,0,0,0.10)" }}>
                <CardContent>
                  <Typography fontWeight={900} gutterBottom>
                    Safety habits we reinforce
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                    {[
                      "Mirrors and blind spot checks before changing direction",
                      "Safe spacing and smooth braking",
                      "Correct signaling and lane discipline",
                      "Hazard awareness and calm decision making",
                    ].map((t) => (
                      <li key={t}>
                        <Typography color="textSecondary">{t}</Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                Community and access
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 980, lineHeight: 1.9 }}>
                We started with a simple goal, to help people drive safely and confidently. We continue with the same spirit. We serve learners in Bulawayo and we aim to reach more communities over time.
              </Typography>
            </Grid>

            {[{
              title: "Office",
              body: "13 Avenue and Fife Street, Mayson Court, Bulawayo",
            },
            {
              title: "Phone",
              body: "+263 77 246 2823",
            },
            {
              title: "Focus",
              body: "Quality training, safe habits, and confident drivers",
            }].map((c) => (
              <Grid key={c.title} item xs={12} md={4}>
                <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight={900} gutterBottom>
                      {c.title}
                    </Typography>
                    <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                      {c.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                Goals, values, and targets
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 980, lineHeight: 1.9 }}>
                Nothing makes us happier than seeing someone holding their license and driving with confidence.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight={900} gutterBottom>
                Our goals
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                {[
                  "Build confident drivers with safe habits",
                  "Improve pass rates through correct preparation",
                  "Serve more learners in Bulawayo and beyond",
                ].map((t) => (
                  <li key={t}>
                    <Typography color="textSecondary">{t}</Typography>
                  </li>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight={900} gutterBottom>
                Our values
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                {[
                  "Quality teaching and honest feedback",
                  "Safety, patience, and respect",
                  "Serving people and staying connected to the community",
                ].map((t) => (
                  <li key={t}>
                    <Typography color="textSecondary">{t}</Typography>
                  </li>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight={900} gutterBottom>
                Our targets
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                {[
                  "Increase learner confidence through structured training",
                  "Support more learners each month with consistent scheduling",
                  "Grow access to training beyond Bulawayo over time",
                ].map((t) => (
                  <li key={t}>
                    <Typography color="textSecondary">{t}</Typography>
                  </li>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                Our philosophy
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 980, lineHeight: 1.9 }}>
                Driving must not be scary. It must be a way of life. It should help someone live their best life and drive without fear.
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1.5, maxWidth: 980, lineHeight: 1.9 }}>
                We love people, we serve people, we teach people, and we are part of the people.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 18px 60px rgba(0,0,0,0.10)" }}>
                <CardContent>
                  <Typography fontWeight={900} gutterBottom>
                    What you can expect
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                    {[
                      "Clear routines and safe habits",
                      "Confidence building in traffic",
                      "Professional coaching and steady progress",
                      "Training that respects learners and the community",
                    ].map((t) => (
                      <li key={t}>
                        <Typography color="textSecondary">{t}</Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
