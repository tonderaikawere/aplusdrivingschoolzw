"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type GalleryProps = {
  limit?: number;
  showViewMore?: boolean;
  images?: string[];
  showHeader?: boolean;
  title?: string;
  description?: string;
};

const Gallery = ({
  limit,
  showViewMore,
  images: imagesProp,
  showHeader = true,
  title = "Gallery",
  description = "Photos from lessons, vehicles, and successful learners.",
}: GalleryProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = imagesProp ?? [
    "/Images/about.png",
    "/Images/hero.jpg",
    "/Images/map.png",
    "/Images/buhle.jpg",
    "/Images/makhosi.png",
    "/Images/testimonial-1.png",
    "/Images/testimonial-1.png",
    "/Images/testimonial-2.png",
    "/Images/testimonial-3.png",
    "/Images/winner.jpg",
    "/Images/cars.jpg",
    "/Images/our-cars.jpg",
    "/Images/white-cars.jpg",
    "/Images/cars-lighting.jpg",
    "/Images/cars-2.png",
    "/Images/cars-3.png",
    "/Images/cars-4.png",
    "/Images/driving.jpg",
    "/Images/driving-2.jpg",
    "/Images/driving-3.jpg",
    "/Images/driving3.jpg",
    "/Images/hillstart.jpg",
    "/Images/learm.jpg",
    "/Images/oral.jpg",
    "/Images/oral-1.png",
    "/Images/oral-2.jpg",
    "/Images/oral-3.png",
    "/Images/oral-4.png",
    "/Images/oral-learning.png",
    "/Images/out.png",
    "/Images/success-single.jpg",
    "/Images/success-single-2.jpg",
    "/Images/success-single-3.jpg",
    "/Images/success-single-4.jpg",
    "/Images/success-1.jpg",
    "/Images/success-2.jpg",
    "/Images/success-3.jpg",
    "/Images/success-4.jpg",
    "/Images/success-5.jpg",
    "/Images/success-6.jpg",
    "/Images/success-7.jpg",
    "/Images/success-8.jpg",
    "/Images/success-9.jpg",
    "/Images/success-10.jpg",
    "/Images/success-11.jpg",
    "/Images/success-12.jpg",
    "/Images/success-13.jpg",
    "/Images/success-14.jpg",
    "/Images/success-15.jpg",
    "/Images/success-16.jpg",
    "/Images/success-17.jpg",
    "/Images/success-18.jpg",
    "/Images/success-19.jpg",
    "/Images/success-20.jpg",
    "/Images/success-21.jpg",
    "/Images/success-22.jpg",
    "/Images/success-23.jpg",
    "/Images/success-24.jpg",
    "/Images/success-25.jpg",
  ];

  const visibleImages = typeof limit === "number" ? images.slice(0, limit) : images;

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => {
    setActiveIndex((i) => (i - 1 + visibleImages.length) % visibleImages.length);
  };

  const next = () => {
    setActiveIndex((i) => (i + 1) % visibleImages.length);
  };

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, visibleImages.length]);

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {showHeader ? (
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={900} component="h2" gutterBottom>
                {title}
              </Typography>
              <Typography color="textSecondary" sx={{ maxWidth: 820 }}>
                {description}
              </Typography>
            </Grid>
          ) : null}

          {visibleImages.map((src, index) => (
            <Grid key={src} item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                  transition: "transform 180ms ease, box-shadow 180ms ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
                  },
                }}
                onClick={() => openAt(index)}
              >
                <CardMedia component="img" height="240" image={src} alt="Gallery image" />
              </Card>
            </Grid>
          ))}

          {showViewMore ? (
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Button
                component={Link}
                href="/gallery"
                variant="contained"
                color="error"
                size="large"
                sx={{ px: 4, borderRadius: 999 }}
              >
                View more
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Container>

      <Dialog
        open={open}
        onClose={close}
        maxWidth={false}
        PaperProps={{
          sx: {
            bgcolor: "rgba(0,0,0,0.92)",
            m: { xs: 1.5, sm: 3 },
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "92vw", sm: "82vw", md: "76vw" },
            maxWidth: 1100,
            height: { xs: "62vh", sm: "70vh", md: "74vh" },
          }}
        >
          <IconButton
            aria-label="close"
            onClick={close}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2,
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.12)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            aria-label="previous"
            onClick={prev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.12)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            aria-label="next"
            onClick={next}
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.12)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          <Box
            component="img"
            src={visibleImages[activeIndex]}
            alt="Gallery"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              userSelect: "none",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              px: 2,
              py: 1.25,
              bgcolor: "rgba(0,0,0,0.45)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
              {activeIndex + 1} / {visibleImages.length}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.70)" }}>
              Use arrow keys to navigate
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Gallery;
