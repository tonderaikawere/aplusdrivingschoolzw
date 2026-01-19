import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BLOG_STORIES } from "../stories";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_STORIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const story = BLOG_STORIES.find((s) => s.slug === params.slug);
  if (!story) {
    return {
      title: "Success Story",
      alternates: { canonical: "/blog" },
    };
  }

  const title = story.title;
  const description = story.subtitle;
  const canonical = `/blog/${story.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | A Plus Driving School`,
      description,
      url: canonical,
      type: "article",
      images: [
        {
          url: story.coverImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | A Plus Driving School`,
      description,
      images: [story.coverImage],
    },
  };
}

export default function BlogStoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const story = BLOG_STORIES.find((s) => s.slug === params.slug);
  if (!story) return notFound();

  const related = BLOG_STORIES.filter((s) => s.slug !== story.slug)
    .map((s) => {
      const sharedTags = s.tags.filter((t) => story.tags.includes(t));
      return { s, score: sharedTags.length };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((x) => x.s);

  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 7, md: 9 },
          background: `linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(250,250,250,1) 100%), url(${story.coverImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={2}>
            <Breadcrumbs sx={{ color: "rgba(255,255,255,0.86)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.86)", textDecoration: "none" }}>
                Home
              </Link>
              <Link href="/blog" style={{ color: "rgba(255,255,255,0.86)", textDecoration: "none" }}>
                Blog
              </Link>
              <Typography sx={{ color: "#fff" }}>{story.title}</Typography>
            </Breadcrumbs>

            <Box>
              <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
                {story.title}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.25, maxWidth: 980, lineHeight: 1.85 }}>
                {story.subtitle}
              </Typography>

              <Grid container spacing={1} sx={{ mt: 2.5 }}>
                {story.tags.map((t) => (
                  <Grid item key={t}>
                    <Chip
                      label={t}
                      color="error"
                      variant="outlined"
                      sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
        <Container maxWidth="md">
          <Button
            component={Link}
            href="/blog"
            startIcon={<ArrowBackIcon />}
            color="error"
            variant="outlined"
            sx={{ mb: 2, borderRadius: 999 }}
          >
            Back to Blog
          </Button>

          <Typography variant="h6" fontWeight={900} gutterBottom>
            {story.dateLabel}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Stack spacing={2.25}>
            {story.content.map((p, idx) => (
              <Typography key={idx} color="textSecondary" sx={{ lineHeight: 2 }}>
                {p}
              </Typography>
            ))}
          </Stack>

          {related.length > 0 ? (
            <Box sx={{ mt: { xs: 5, md: 7 } }}>
              <Typography variant="h5" fontWeight={900} gutterBottom>
                Related blogs
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 1.9, mb: 2 }}>
                More success stories with similar themes.
              </Typography>

              <Grid container spacing={2.5}>
                {related.map((r) => (
                  <Grid item xs={12} sm={6} key={r.slug}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                        height: "100%",
                      }}
                    >
                      <CardActionArea component={Link} href={`/blog/${r.slug}`}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={r.coverImage}
                          alt={r.title}
                          sx={{ objectFit: "cover", objectPosition: "center top" }}
                        />
                        <CardContent>
                          <Typography fontWeight={900} gutterBottom>
                            {r.title}
                          </Typography>
                          <Typography color="textSecondary" sx={{ lineHeight: 1.85 }}>
                            {r.subtitle}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : null}
        </Container>
      </Box>
    </Box>
  );
}
