"use client";

import React from "react";
import {
  Grid,
  Typography,
  Link,
  Box,
  IconButton,
  Divider,
  Container,
  TextField,
  Button,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  KeyboardArrowUp,
  Facebook,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";

const TikTokIcon = (props: React.ComponentProps<typeof SvgIcon>) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M16.75 5.1c.9.9 2.1 1.4 3.4 1.4v3.1c-1.6 0-3.2-.5-4.5-1.4v6.7c0 3-2.4 5.4-5.4 5.4S4.8 17.9 4.8 15s2.4-5.4 5.4-5.4c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3V3h3.4c.1.8.4 1.5.9 2.1Z" />
  </SvgIcon>
);

const Footer = () => {
  const [subscribeEmail, setSubscribeEmail] = React.useState("");
  const [subscribeLoading, setSubscribeLoading] = React.useState(false);
  const [subscribeStatus, setSubscribeStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [subscribeMessage, setSubscribeMessage] = React.useState<string>("");
  const [subscribeWhatsAppUrl, setSubscribeWhatsAppUrl] = React.useState<string>("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    if (subscribeLoading) return;
    setSubscribeLoading(true);
    setSubscribeStatus("idle");
    setSubscribeMessage("");
    setSubscribeWhatsAppUrl("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscribeEmail, source: "footer" }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error("subscribe failed");

      setSubscribeStatus("success");
      setSubscribeMessage(data.message || "Subscribed successfully.");
      setSubscribeWhatsAppUrl(data.whatsappUrl || "");
      setSubscribeEmail("");
    } catch (err) {
      setSubscribeStatus("error");
      setSubscribeMessage("We could not subscribe you right now. Please try again or use WhatsApp.");
    } finally {
      setSubscribeLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 8 },
        background: "#070707",
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
              <Image
                width={120}
                height={70}
                alt="A Plus Driving School"
                src="/Images/logo.png"
              />
            </Box>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.60)", mb: 2 }}>
              Your trusted driving school.
            </Typography>

            <Typography
              sx={{
                color: "#ff1744",
                fontWeight: 900,
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: 0.6,
                fontSize: 13,
              }}
            >
              About Us
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.70)", maxWidth: 520, lineHeight: 1.75 }}>
              We help learners become safe, confident drivers with practical training and clear theory support.
            </Typography>

            <Typography
              sx={{
                color: "#ff1744",
                fontWeight: 900,
                mt: 2.5,
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: 0.6,
                fontSize: 13,
              }}
            >
              Contact Us
            </Typography>

            <Box sx={{ display: "grid", gap: 1.25 }}>
              <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
                <Phone sx={{ color: "#ff1744" }} fontSize="small" />
                <Link href="tel:+263772462823" color="rgba(255,255,255,0.78)" underline="hover">
                  +263 77 246 2823
                </Link>
              </Box>
              <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
                <Email sx={{ color: "#ff1744" }} fontSize="small" />
                <Link href="mailto:aplusdrivingschl@gmail.com" color="rgba(255,255,255,0.78)" underline="hover">
                  aplusdrivingschl@gmail.com
                </Link>
              </Box>
              <Box sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
                <LocationOn sx={{ color: "#ff1744", mt: 0.2 }} fontSize="small" />
                <Typography sx={{ color: "rgba(255,255,255,0.70)", lineHeight: 1.6 }}>
                  13 Avenue & JM Nkomo, Moyo Mayson Court, 1st Floor, Office 17, Bulawayo
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{ color: "#ff1744", fontWeight: 900, mb: 1.5 }}>
              Information
            </Typography>
            <Box sx={{ display: "grid", gap: 1.2 }}>
              <Link component={NextLink} href="/about" color="rgba(255,255,255,0.72)" underline="hover">
                About Us
              </Link>
              <Link component={NextLink} href="/services" color="rgba(255,255,255,0.72)" underline="hover">
                More Search
              </Link>
              <Link component={NextLink} href="/blog" color="rgba(255,255,255,0.72)" underline="hover">
                Blog
              </Link>
              <Link component={NextLink} href="/#Testimonials" color="rgba(255,255,255,0.72)" underline="hover">
                Testimonials
              </Link>
              <Link component={NextLink} href="/events" color="rgba(255,255,255,0.72)" underline="hover">
                Events
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{ color: "#ff1744", fontWeight: 900, mb: 1.5 }}>
              Helpful Links
            </Typography>
            <Box sx={{ display: "grid", gap: 1.2 }}>
              <Link component={NextLink} href="/services" color="rgba(255,255,255,0.72)" underline="hover">
                Services
              </Link>
              <Link component={NextLink} href="/contact" color="rgba(255,255,255,0.72)" underline="hover">
                Supports
              </Link>
              <Link component={NextLink} href="/terms" color="rgba(255,255,255,0.72)" underline="hover">
                Terms & Condition
              </Link>
              <Link component={NextLink} href="/privacy" color="rgba(255,255,255,0.72)" underline="hover">
                Privacy Policy
              </Link>
              <Link component={NextLink} href="/legal" color="rgba(255,255,255,0.72)" underline="hover">
                Legal
              </Link>
              <Link component={NextLink} href="/agreement" color="rgba(255,255,255,0.72)" underline="hover">
                Agreement
              </Link>
              <Link component={NextLink} href="/kawerifytech" color="rgba(255,255,255,0.72)" underline="hover">
                KawerifyTech
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{ color: "#ff1744", fontWeight: 900, mb: 1.5 }}>
              KawerifyTech
            </Typography>
            <Box sx={{ display: "grid", gap: 1.2 }}>
              <Link component={NextLink} href="/kawerifytech" color="rgba(255,255,255,0.72)" underline="hover">
                About KawerifyTech
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61573749189949"
                target="_blank"
                rel="noopener noreferrer"
                color="rgba(255,255,255,0.72)"
                underline="hover"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/kawerifytech/"
                target="_blank"
                rel="noopener noreferrer"
                color="rgba(255,255,255,0.72)"
                underline="hover"
              >
                Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@kawerifytech"
                target="_blank"
                rel="noopener noreferrer"
                color="rgba(255,255,255,0.72)"
                underline="hover"
              >
                TikTok
              </Link>
              <Link
                href="https://www.youtube.com/@kawerifytech"
                target="_blank"
                rel="noopener noreferrer"
                color="rgba(255,255,255,0.72)"
                underline="hover"
              >
                YouTube
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{ color: "#ff1744", fontWeight: 900, mb: 1.5 }}>
              Subscribe More Info
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} sx={{ display: "grid", gap: 1.25, maxWidth: 420 }}>
              <TextField
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder="Enter your Email"
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255,255,255,0.95)",
                  },
                }}
              />
              {subscribeStatus !== "idle" ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: subscribeStatus === "success" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.85)",
                  }}
                >
                  {subscribeMessage}
                </Typography>
              ) : null}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "fit-content",
                  px: 3,
                  bgcolor: "#ff1744",
                  color: "#fff",
                  fontWeight: 900,
                  ":hover": { bgcolor: "#d50000" },
                }}
                disabled={subscribeLoading}
              >
                {subscribeLoading ? "Subscribing..." : "Subscribe"}
              </Button>
              {subscribeWhatsAppUrl ? (
                <Button
                  component="a"
                  href={subscribeWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="error"
                  sx={{ width: "fit-content", px: 3, borderColor: "rgba(255,255,255,0.40)", color: "#fff" }}
                >
                  Subscribe via WhatsApp
                </Button>
              ) : null}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ position: "relative", mt: { xs: 5, md: 6 } }}>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.18)" }} />

          <IconButton
            aria-label="scroll to top"
            onClick={scrollToTop}
            sx={{
              position: "absolute",
              right: 0,
              top: -22,
              bgcolor: "#ff1744",
              color: "#fff",
              borderRadius: 1,
              width: 40,
              height: 40,
              ":hover": { bgcolor: "#d50000" },
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        </Box>

        <Box
          sx={{
            pt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1.2, justifyContent: "center", flex: { xs: "1 1 100%", md: "1 1 auto" } }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/APlusDrivingSchoolByo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
              sx={{
                bgcolor: "#ff1744",
                color: "#fff",
                width: 38,
                height: 38,
                ":hover": { bgcolor: "#d50000" },
              }}
            >
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.tiktok.com/@aplusdrivingschoolbyo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="tiktok"
              sx={{
                bgcolor: "#ff1744",
                color: "#fff",
                width: 38,
                height: 38,
                ":hover": { bgcolor: "#d50000" },
              }}
            >
              <TikTokIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/a_plus_drivingschool/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              sx={{
                bgcolor: "#ff1744",
                color: "#fff",
                width: 38,
                height: 38,
                ":hover": { bgcolor: "#d50000" },
              }}
            >
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.youtube.com/@kawerifytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="kawerifytech youtube"
              sx={{
                bgcolor: "#ff1744",
                color: "#fff",
                width: 38,
                height: 38,
                ":hover": { bgcolor: "#d50000" },
              }}
            >
              <YouTube fontSize="small" />
            </IconButton>
          </Box>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.60)",
              flex: { xs: "1 1 100%", md: "0 0 auto" },
              textAlign: { xs: "center", md: "right" },
            }}
          >
            © {new Date().getFullYear()} A Plus Driving School. All rights reserved. Built by{" "}
            <Link
              href="https://kawerifytech.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 900 }}
            >
              KawerifyTech
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;