"use client";

import React from "react";
import { Container, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export default function SitemapPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h3" fontWeight={800} gutterBottom>
        Sitemap
      </Typography>
      {links.map((l) => (
        <Typography key={l.href} sx={{ mb: 1 }}>
          <MuiLink component={Link} href={l.href} underline="hover" color="inherit">
            {l.label}
          </MuiLink>
        </Typography>
      ))}
    </Container>
  );
}
