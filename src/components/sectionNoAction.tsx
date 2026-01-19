"use client";
import * as React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksThreeIcon from "@mui/icons-material/Looks3";
import LooksFourIcon from "@mui/icons-material/Looks4";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LooksOneIcon from "@mui/icons-material/LooksOne";

import Image from "next/image";

export default function SectionNoAction({
  title,
  subtitle,
  src,
}: {
  title: String;
  subtitle: string;
  src: string;
}) {
  return (
    <div>
      <Box sx={{ justifyContent: "center", width: "100%" }}>
        <Divider>
          <Typography variant="h4"></Typography>
        </Divider>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: 0,
          borderColor: "red",
          pl: 0,
          pr: 0,
          p: 2,
        }}
      >
        <Grid container>
          <Grid container md={8}>
            <Grid item>
              <Typography
                sx={{
                  typography: { xs: "h4", sm: "h3", md: "h2" },
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  typography: { xs: "h6", sm: "h5", md: "h6" },
                }}
              >
                {subtitle}
              </Typography>
            </Grid>
          </Grid>
          <Grid container md={4}>
            <Grid item>
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <Image src={src} width={350} height={350} alt="" />
              </Box>
              <Box
                sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                justifyContent="center"
              >
                <Image src={src} fill alt="" />
              </Box>
            </Grid>
           

          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
