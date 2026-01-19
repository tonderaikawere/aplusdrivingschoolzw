"use client";

import React from "react";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Link as MuiLink,
} from "@mui/material";

export default function KawerifyTechPage() {
  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 7, md: 9 },
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(250,250,250,1) 100%), url(/Images/cars-lighting.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={2}>
            <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
              KawerifyTech
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.88)", maxWidth: 980, lineHeight: 1.9 }}>
              KawerifyTech is a digital partner that helps businesses build modern websites, create marketing content, and grow online.
              A Plus Driving School partners with KawerifyTech for web development, performance, and ongoing digital improvements.
            </Typography>
            <Grid container spacing={1}>
              {["Web Development", "Branding", "Social Media", "Automation", "Support"].map((t) => (
                <Grid item key={t}>
                  <Chip label={t} color="error" variant="outlined" sx={{ bgcolor: "rgba(255,255,255,0.10)", color: "#fff" }} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" fontWeight={900} gutterBottom>
                What KawerifyTech does
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                KawerifyTech helps brands turn ideas into high-quality digital products. Typical work includes building fast and responsive
                websites, improving user experience, designing modern pages, integrating contact/booking flows, and setting up reliable
                email + WhatsApp communication paths. They also assist with content structure, SEO-friendly layout, and ongoing technical
                support so your website stays reliable.
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2, mt: 2 }}>
                If you are a business owner, school, entrepreneur, or organization that needs a professional online presence, KawerifyTech
                can help you plan your pages, build a clean UI, and ship a site that looks great on mobile.
              </Typography>

              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                Core services (what you can request)
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                KawerifyTech focuses on practical delivery: clear pages, strong design, and systems that actually help a business get
                enquiries. You can come with a full brief (pages, pricing, images, and the exact features you want), or you can come with
                a rough idea and let the team help you turn it into a complete website plan. The emphasis is always on a professional
                first impression, fast loading times, and an easy path for customers to contact you.
              </Typography>
              <Box component="ul" sx={{ m: 0, mt: 2, pl: 2.5, color: "text.secondary" }}>
                {[
                  "Website design & development: responsive pages, modern layout, and a user experience that feels premium.",
                  "Business landing pages: promo pages, event announcements, and campaigns that convert visitors into enquiries.",
                  "Brand consistency: colors, typography, and messaging that looks trustworthy across the full site.",
                  "Content structure: help deciding what to say, where to say it, and how to present services clearly.",
                  "Automation & integrations: email notifications, WhatsApp click-to-chat, forms, and admin-friendly flows.",
                  "Ongoing support: fixes, improvements, performance tuning, and content updates as your business grows.",
                ].map((t) => (
                  <li key={t}>
                    <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                      {t}
                    </Typography>
                  </li>
                ))}
              </Box>

              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                How the process works
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                Most clients want a simple process: explain what you do, show your prices and packages, and make it easy for people to
                book or request more information. KawerifyTech typically begins with a short discovery conversation to understand your
                business, your target customers, and your preferred communication channel. From there, the team proposes a page structure
                (for example: Home, About, Services, Pricing, Gallery, FAQ, Team, Contact, and Legal pages if needed).
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2, mt: 2 }}>
                After the structure is agreed, design and development begins. You receive previews, give feedback, and the site is refined
                until it looks right on mobile and desktop. Finally, the website is prepared for launch with clean navigation, stable
                performance, and the integrations you need (such as email alerts and WhatsApp messaging flows). If you prefer, the team can
                also help with ongoing improvements after launch so you never feel stuck with outdated pages.
              </Typography>

              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                Built for real businesses in Zimbabwe
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                Many people browse on mobile data and expect fast results. Many customers also prefer WhatsApp over email. KawerifyTech
                designs with these realities in mind: lightweight pages, mobile-first layouts, and clear call-to-action buttons that make it
                easy to reach you. The goal is not only “a website that exists”, but a website that builds trust and makes it simple for
                customers to choose you.
              </Typography>

              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                Why businesses choose KawerifyTech
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                A good website is not just about looking nice. It should be easy to understand, fast to load, and designed around the real
                questions customers ask before they buy. KawerifyTech focuses on clarity and reliability: clear headings, straight-forward
                information, and strong calls to action. That includes simple contact and booking flows, proper mobile responsiveness, and
                page layouts that guide a visitor to the next step. The result is a site that works like a digital receptionist—answering
                questions and encouraging people to get in touch.
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2, mt: 2 }}>
                Another key benefit is the ability to improve over time. Many websites are launched and then forgotten. KawerifyTech
                encourages ongoing improvements—adding new content, updating images, refining sections that are not converting, and improving
                performance. This is especially important for businesses that run promotions, change pricing, add packages, or introduce new
                services.
              </Typography>

              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                Who KawerifyTech works with
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                KawerifyTech can support individuals, teams, and organizations that want to present themselves professionally online. Typical
                clients include schools, training centers, small and medium businesses, startups, restaurants, salons, clinics, professionals,
                and service providers. Whether you need a clean one-page landing page or a full multi-page website with a blog, gallery,
                packages, and enquiry forms, the approach remains the same: build something modern, responsive, and easy to use.
              </Typography>

              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                Deliverables you can expect
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                When you work with KawerifyTech, the deliverables depend on your needs, but projects are generally packaged around what
                matters most: speed, clarity, and consistent design. That may include a homepage designed to convert, a services page that
                explains your value clearly, pricing tables that are easy to compare, a photo gallery, an FAQ section that reduces repetitive
                questions, and contact/booking forms that are easy to complete on a phone.
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2, mt: 2 }}>
                If you are using WhatsApp as your main communication channel, KawerifyTech can add click-to-chat buttons and message templates
                so you receive enquiries in a consistent format (name, service, preferred dates, and location). If email is important, the
                team can set up email notifications so you don’t miss leads. The aim is to help you respond quickly and professionally.
              </Typography>

              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                Support, maintenance, and improvements
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                Websites are not “one and done.” Over time you may want to refresh images, add new team members, update pricing, improve SEO,
                publish updates, or add a new page for a new service. KawerifyTech provides support for these changes so your website stays
                accurate and professional. Maintenance can include performance checks, bug fixes, content edits, and improvements based on
                what visitors are clicking.
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2, mt: 2 }}>
                If you are growing and want more advanced functionality, KawerifyTech can also help you plan upgrades such as appointment
                scheduling, subscription updates, admin notifications, or a blog section to share stories and announcements. These are handled
                in phases so your business can keep operating while the site improves.
              </Typography>

              <Typography variant="h4" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                Partnership with A Plus Driving School
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                A Plus Driving School partners with KawerifyTech for website design and development, maintenance improvements, and
                digital growth. This partnership supports better learner experience—clear information, quick contact options, and a
                reliable booking process.
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2, mt: 2 }}>
                If you want a similar setup (website + booking/contact flows + social presence), you can reach KawerifyTech through the
                links below.
              </Typography>

              <Typography variant="h5" fontWeight={900} gutterBottom sx={{ mt: 4 }}>
                Quick questions (FAQ)
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2 }}>
                Do I need to have all content ready before starting? Not necessarily. You can start with the basics—business name, contact
                details, services, and a few photos—and KawerifyTech can help you structure the rest. Do you build mobile-friendly sites?
                Yes. Mobile responsiveness is treated as a requirement, not an extra. Can you help after launch? Yes. Support and
                improvements can continue so your website stays up to date.
              </Typography>
              <Typography color="textSecondary" sx={{ lineHeight: 2, mt: 2 }}>
                If you are unsure about what you need, the best option is to start a conversation. Describe your business and the outcome
                you want (more calls, more WhatsApp messages, more bookings, or better credibility). KawerifyTech will advise the best page
                structure and features to achieve that goal.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 3, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={900} gutterBottom>
                    Find KawerifyTech
                  </Typography>
                  <Divider sx={{ mb: 2 }} />

                  <Stack spacing={1.25}>
                    <MuiLink href="https://www.facebook.com/profile.php?id=61573749189949" target="_blank" rel="noopener noreferrer" underline="hover">
                      Facebook
                    </MuiLink>
                    <MuiLink href="https://www.instagram.com/kawerifytech/" target="_blank" rel="noopener noreferrer" underline="hover">
                      Instagram
                    </MuiLink>
                    <MuiLink href="https://www.tiktok.com/@kawerifytech" target="_blank" rel="noopener noreferrer" underline="hover">
                      TikTok
                    </MuiLink>
                    <MuiLink href="https://www.youtube.com/@kawerifytech" target="_blank" rel="noopener noreferrer" underline="hover">
                      YouTube
                    </MuiLink>
                  </Stack>

                  <Typography color="textSecondary" sx={{ lineHeight: 1.9, mt: 2 }}>
                    For partnerships, collaborations, or website projects, reach out through any of the channels above.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
