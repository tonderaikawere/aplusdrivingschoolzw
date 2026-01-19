"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastScrollYRef = React.useRef(0);

  const handleOpenNavMenu = () => setMobileOpen(true);
  const handleCloseNavMenu = () => setMobileOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  React.useEffect(() => {
    // Ensure header is visible immediately after navigation.
    setHidden(false);
    handleCloseNavMenu();
    lastScrollYRef.current = 0;
  }, [pathname]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onScroll = () => {
      // Close the mobile menu as soon as the user scrolls.
      setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const lastY = lastScrollYRef.current;
      lastScrollYRef.current = y;

      const nearTop = y < 80;
      const scrollingDown = y > lastY;

      // Hide when scrolling down, show when scrolling up or near the top.
      // Also hide when very close to the bottom to keep footer clean.
      const doc = document.documentElement;
      const nearBottom = y + window.innerHeight >= doc.scrollHeight - 80;

      if (nearTop) {
        setHidden(false);
        return;
      }

      if (nearBottom) {
        setHidden(true);
        return;
      }

      setHidden(scrollingDown);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "#111",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        top: 0,
        left: 0,
        right: 0,
        transform: hidden ? "translateY(-110%)" : "translateY(0)",
        transition: "transform 180ms ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 4 },
            }}
          >
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image
                width={110}
                height={70}
                alt="A Plus Driving School"
                src="/Images/logo.png"
                priority
              />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              aria-label="open navigation"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={mobileOpen}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  width: "100vw",
                  height: "100vh",
                  bgcolor: "#fff",
                  color: "#111",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  py: 1.5,
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Image
                    width={110}
                    height={70}
                    alt="A Plus Driving School"
                    src="/Images/logo.png"
                    priority
                  />
                </Box>
                <IconButton aria-label="close navigation" onClick={handleCloseNavMenu}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box sx={{ px: 2, py: 2 }}>
                <List sx={{ display: "grid", gap: 1 }}>
                  {NAV_ITEMS.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <ListItemButton
                        key={item.href}
                        component={Link}
                        href={item.href}
                        onClick={handleCloseNavMenu}
                        sx={{
                          borderRadius: 2,
                          border: active
                            ? "1px solid rgba(211,47,47,0.45)"
                            : "1px solid rgba(0,0,0,0.08)",
                          bgcolor: active ? "rgba(211,47,47,0.06)" : "transparent",
                          "&:hover": {
                            bgcolor: "rgba(0,0,0,0.04)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: active ? 900 : 700 }}>
                              {item.label}
                              {active ? " +" : ""}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 0.5,
            }}
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  color="inherit"
                  sx={{
                    fontWeight: active ? 800 : 600,
                    borderRadius: 999,
                    px: 2,
                    bgcolor: active ? "rgba(211,47,47,0.08)" : "transparent",
                    border: active ? "1px solid rgba(211,47,47,0.45)" : "1px solid transparent",
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  {item.label}
                  {active ? " +" : ""}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
