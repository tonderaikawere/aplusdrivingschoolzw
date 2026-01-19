"use client";

import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";

export default function TermsPage() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={900} gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          These Terms & Conditions (“Terms”) govern your use of the A Plus Driving School website and the way you interact with our services through the website, email, phone, WhatsApp, and other communication channels we provide. These Terms are designed to be practical and easy to understand so that learners and visitors know what to expect.
          By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the website.
        </Typography>

        <Divider sx={{ my: 2.5 }} />

        <Typography variant="h5" fontWeight={900} gutterBottom>
          1. Who we are
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          A Plus Driving School provides driving lessons and training support for learners. Our services may include practical driving lessons, oral/theory guidance, test preparation, refresher lessons, and related learning support. We operate primarily in Bulawayo and may serve surrounding areas depending on schedules and availability.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          2. Website purpose and information accuracy
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The website provides information about our services, promotions, contact methods, and learning resources. We aim to keep information accurate and up to date. However, content may change from time to time and may occasionally be incomplete or contain errors.
          Pricing, promotions, package details, and availability shown on the website are guidance only. The most accurate and current information is confirmed when you contact us and when we confirm your booking.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          If you notice a mistake on the site, please let us know. We appreciate your support in helping us keep information clear.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          3. Booking enquiries and service requests
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          When you submit a booking enquiry, request a quote, subscribe for updates, or contact us through the website, you agree that the information you provide is accurate and belongs to you. You also agree that we may contact you using the details you provided to respond to your request.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          A request submitted through the website does not automatically guarantee a booking. Bookings are confirmed when we agree on time, location, lesson type, and any package terms.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          4. Promotions and “learn until you pass” guidance
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          From time to time we may offer promotions (for example special packages, discounts, or bundles that may include both oral/theory and practical training). Promotions may be limited by time, location, availability, or conditions such as booking requirements.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Where we describe an oral/theory option as “learn until you pass,” this means we support learning and preparation until you are ready for the oral/theory exam, subject to reasonable attendance and responsible participation. It does not mean we guarantee any exam result, because exam outcomes depend on test-day performance and official assessment standards.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          5. Lesson safety and learner conduct
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Safety is a top priority. Learners are expected to follow instructor guidance, behave respectfully, and focus on safe driving decisions. A lesson may be paused or stopped if safety is compromised, if a learner is unfit to drive, or if a learner behaves in a way that puts people or property at risk.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Learners must not attend lessons under the influence of alcohol, drugs, or any substances that may impair driving. If an instructor believes a learner is impaired, the instructor may cancel the session for safety.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          6. Scheduling, punctuality, and rescheduling
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Lesson times are arranged in advance. Please be punctual. If you arrive late, lesson time may be reduced to keep the schedule fair for other learners. If a learner misses a scheduled lesson without adequate notice, the school may apply reasonable policies depending on the package or arrangement.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The school may reschedule lessons due to weather, vehicle availability, instructor availability, emergencies, or safety considerations. Where possible, we will communicate changes as early as we can.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          7. Payments and refunds
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Payment methods are communicated on the website and may include cash, bank transfers, mobile money, or other options. Package terms and pricing are confirmed during booking. Where a package includes multiple lessons, the number of lessons, duration, and inclusions will be explained.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Refunds and credits may depend on the service type, package conditions, and the stage at which a booking is cancelled. If you have questions about refunds or credits, contact us and we will address the request fairly based on the relevant circumstances.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          8. Car hire and test-day arrangements
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Car hire for tests may be offered depending on availability and may be subject to additional conditions. If car hire is included in a promotion, the details and limitations (such as location, time, and requirements) will be communicated at booking.
          We recommend confirming test-day times early so we can plan instructor and vehicle availability.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          9. Communication channels and messaging
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          We may communicate with you via email, phone call, or WhatsApp using the information you provide. Delivery of messages may be affected by network coverage, spam filters, and third‑party services. If you do not receive a response in a reasonable time, please follow up using an alternative method.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Where the website provides links to WhatsApp, those links open WhatsApp with a pre-filled message. WhatsApp messages require you to click “send” in your WhatsApp app. Automated WhatsApp sending is only possible through official WhatsApp Business API integrations.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          10. Subscriptions and updates
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          If you subscribe for updates, we may send you announcements about services, schedules, promotions, and product updates such as learning resources or upcoming digital tools. You can request to stop receiving updates at any time by contacting us.
        </Typography>

        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          We aim to keep subscription messages helpful and relevant. Subscription updates are not intended to replace direct booking confirmations. For bookings, please ensure you receive a clear confirmation message from our team with agreed times and details.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          11. Website availability and maintenance
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          We work to keep the website available and functioning correctly. However, the website may be temporarily unavailable due to maintenance, hosting issues, network problems, or updates.
          We may also change features, pages, or site structure at any time as we improve the experience.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          12. Third‑party platforms and services
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Some parts of the experience may rely on third‑party services (for example, WhatsApp links, email delivery, maps, and social media). Third‑party services are governed by their own terms and privacy policies.
          We do not control third‑party platforms, and we cannot guarantee their availability or performance.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          13. Acceptable use of the website
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          You agree not to misuse the website. This includes attempting to disrupt the site, introducing malware, scraping data in a harmful manner, or attempting unauthorized access to any part of the site. We may block or restrict access if we reasonably believe the website is being misused.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          14. Intellectual property
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The website content (including text, designs, images, graphics, and logos) is owned by or licensed to A Plus Driving School and is protected by applicable intellectual property laws. You may view and use the website for personal, non-commercial purposes. You may not copy, reproduce, or distribute content without permission except where allowed by law.
        </Typography>

        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          If you would like to re-use our content for a school program, partnership, or educational purpose, contact us for permission. We are open to collaboration when it supports road safety and learner success.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          15. Disclaimer and limitation of liability
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Driving involves risks. Training reduces risk by building skills, routines, and safe decision-making. However, outcomes depend on learners’ actions and external road conditions.
          To the extent permitted by law, we are not liable for indirect or consequential losses arising from use of this website or reliance on general information provided here.
        </Typography>

        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Nothing on this website should be treated as professional legal advice. Information provided is general guidance and may not apply to your specific circumstances.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          16. Governing law and dispute resolution
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          These Terms are intended to operate in line with applicable laws and regulations. If a dispute arises, we encourage you to contact us first so we can resolve the issue quickly and fairly.
          Where a formal process is required, the relevant legal framework and authorities will apply.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          17. Changes to these Terms
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          We may update these Terms from time to time. Changes take effect when posted on this page. Continued use of the website after an update means you accept the updated Terms.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          18. Contact
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          If you have questions about these Terms, please contact A Plus Driving School using the contact details shown on this website.
        </Typography>
      </Container>
    </Box>
  );
}
