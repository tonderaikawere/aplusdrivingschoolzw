"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Chip,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BLOG_STORIES } from "./stories";

export default function BlogPage() {
  const [query, setQuery] = React.useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const storiesToShow = React.useMemo(() => {
    if (!normalizedQuery) return BLOG_STORIES;

    const terms = normalizedQuery
      .split(/\s+/)
      .map((t) => t.trim())
      .filter(Boolean);

    const scoreMatches = (haystack: string, weight: number) => {
      const hay = haystack.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (!term) continue;
        if (hay.includes(term)) {
          score += weight;
          if (hay.startsWith(term)) score += weight;
        }
      }
      return score;
    };

    return BLOG_STORIES.map((story) => {
      const score =
        scoreMatches(story.title, 40) +
        scoreMatches(story.subtitle, 18) +
        scoreMatches(story.tags.join(" "), 28) +
        scoreMatches(story.content.join(" "), 2);
      return { story, score };
    })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.story);
  }, [normalizedQuery]);

  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 7, md: 9 },
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 60%, rgba(250,250,250,1) 100%), url(/Images/hero.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
            Blog
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, maxWidth: 980, lineHeight: 1.8 }}>
            Driving tips, test preparation guidance, and helpful updates from A Plus Driving School.
          </Typography>
          <Grid container spacing={1} sx={{ mt: 3 }}>
            {[
              "Road safety",
              "Oral lessons",
              "Practical skills",
              "Exam readiness",
            ].map((t) => (
              <Grid item key={t}>
                <Chip label={t} color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1} sx={{ mb: 1.5 }}>
                <Typography variant="h4" fontWeight={900}>
                  Success Stories
                </Typography>
                <Typography color="textSecondary" sx={{ lineHeight: 1.9, maxWidth: 980 }}>
                  Real learner journeys from Bulawayo—confidence building, oral preparation, practical skills, and test-day readiness. Each story is written long-form so you can learn what works.
                </Typography>
                <TextField
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search success stories (success, oral, practical, confidence, exam readiness...)"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography color="textSecondary" sx={{ lineHeight: 1.8 }}>
                  {normalizedQuery
                    ? `${storiesToShow.length} result(s) for “${query.trim()}”.`
                    : `${BLOG_STORIES.length} success stories.`}
                </Typography>
              </Stack>
            </Grid>

            {storiesToShow.length === 0 ? (
              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "rgba(0,0,0,0.02)",
                  }}
                >
                  <Typography variant="h6" fontWeight={900} gutterBottom>
                    No results
                  </Typography>
                  <Typography color="textSecondary" sx={{ lineHeight: 1.9 }}>
                    Try a different search term. Tip: search by “oral”, “practical”, “confidence”, or “exam readiness”.
                  </Typography>
                </Box>
              </Grid>
            ) : null}

            {storiesToShow.map((story) => (
              <Grid item xs={12} md={6} key={story.slug}>
                <Card
                  sx={{
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                    height: "100%",
                  }}
                >
                  <CardActionArea component={Link} href={`/blog/${story.slug}`} sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={story.coverImage}
                      alt={story.title}
                      sx={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                    <CardContent>
                      <Stack spacing={1.25}>
                        <Typography variant="h6" fontWeight={900}>
                          {story.title}
                        </Typography>
                        <Typography color="textSecondary" sx={{ lineHeight: 1.85 }}>
                          {story.subtitle}
                        </Typography>
                        <Grid container spacing={1}>
                          {story.tags.map((t) => (
                            <Grid item key={t}>
                              <Chip label={t} color="error" variant="outlined" />
                            </Grid>
                          ))}
                        </Grid>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
