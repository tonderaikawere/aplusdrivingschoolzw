"use client";

import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";

export default function AgreementPage() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, background: "#fff" }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={900} gutterBottom>
          Agreement
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          This Agreement explains how training, learning support, and communication are handled when you work with A Plus Driving School. It is intended to create clarity and protect both learners and the school. It is a general agreement and may be supplemented by booking confirmations, package details, or written arrangements provided at the time of scheduling.
        </Typography>

        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          By booking lessons, paying for a package, or attending training sessions, you confirm that you understand and accept the core expectations described here. If anything is unclear, please ask before you start training so we can align on the plan.
        </Typography>

        <Divider sx={{ my: 2.5 }} />

        <Typography variant="h5" fontWeight={900} gutterBottom>
          1. Parties and purpose
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The parties to this agreement are A Plus Driving School (the “School”) and the learner or customer (the “Learner”). The purpose of this agreement is to set expectations around lessons, payments, conduct, safety, cancellations, and communication.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          2. Training scope
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Training may include practical driving lessons, oral/theory guidance, test preparation support, and structured practice for maneuvers or exam readiness. The exact scope depends on the package chosen and the learner’s needs.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Any special promotions, package inclusions, car hire availability, or lesson durations will be clarified during booking. Where a promotion is offered, the School will describe the conditions clearly so that the Learner understands what is included and what is not.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          3. Scheduling and punctuality
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Lesson times are scheduled by agreement. The Learner is expected to be punctual. If the Learner arrives late, lesson time may be shortened to keep the schedule fair for other learners.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The School may reschedule lessons due to instructor availability, vehicle availability, safety concerns, weather, or operational constraints. Where possible, notice will be given in advance.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          4. Payments, packages, and promotions
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Payments may be made using the methods communicated on the website or during booking. Package terms may include lesson counts, time blocks, exam preparation support, and optional car hire terms.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          If the Learner chooses a “learn until you pass” style oral/theory option, it means learning support continues until exam readiness is achieved, subject to reasonable attendance, responsible conduct, and the School’s scheduling capacity. It does not imply a guarantee of passing.
        </Typography>

        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Where car hire is offered (whether as a separate service or included in a promotion), availability depends on scheduling and operational factors. Test-day arrangements must be confirmed early, and learners should arrive on time with required documents.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          5. Learning process and progress expectations
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Learning to drive is a process. The School’s role is to teach a structured method and coach you into safe habits. The Learner’s role is to practice consistently, listen to feedback, and apply correction plans.
          Progress speed differs between learners. Some learners need more repetitions for maneuvers or confidence in traffic. We encourage learners to focus on mastery rather than rushing.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          6. Learner responsibilities
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The Learner agrees to behave respectfully, follow instructor directions, and prioritize safety. The Learner must disclose any relevant conditions that may impact safe driving practice where required by applicable rules. The Learner agrees not to drive under the influence of alcohol, drugs, or any substance that may impair driving.
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The Learner agrees to practice responsibly and apply safe driving habits. Instructors may stop or cancel a lesson if safety is compromised.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          7. Instructor responsibilities
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The School will provide qualified instruction, clear coaching, and structured feedback. Instructors aim to maintain a calm learning environment, correct unsafe habits, and guide the learner toward exam readiness.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          8. Cancellations and rescheduling
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Cancellation terms may depend on the specific package and booking schedule. As a general approach, learners are encouraged to provide as much notice as possible if they cannot attend. The School will aim to reschedule fairly.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          9. Communication channels
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Communication may occur via phone, WhatsApp, email, or in person. The Learner agrees that the School may use the contact details provided to communicate scheduling updates, confirmations, and relevant learning support messages.
        </Typography>

        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The Learner understands that WhatsApp messages require the Learner to press “send” in their WhatsApp app when using a website link, unless an official WhatsApp Business API integration is used. For urgent matters, the Learner should follow up by phone or visit the office.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          10. App and digital learning tools (coming soon)
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The School is preparing digital learning tools including a provisional test practice app with highway code support, notes, and progress records. These tools are intended to support learning. Where access is offered free to students or available by subscription to non-students, the School will communicate the final access terms at launch.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          11. No guarantee of test pass
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The School supports learners thoroughly, but passing depends on the learner’s preparedness, practice, and test-day performance. The School does not guarantee any test result.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          12. Respect, safety, and lesson termination
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The School aims to maintain a respectful learning environment. Abuse, harassment, dangerous behavior, or repeated refusal to follow safety instructions may result in lesson termination. If a lesson is terminated for safety reasons, the School may decide how to handle rescheduling or refunds fairly based on the circumstances.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          13. Privacy and learner information
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          The School may collect basic contact and booking information (such as name, phone number, email, lesson times, and progress notes) to deliver services effectively. We aim to handle learner information responsibly and use it primarily for scheduling, training support, and customer service.
          If the Learner wants to update or correct their details, they can request it through our admin team.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          14. Photos, videos, and testimonials
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          From time to time we may celebrate learner progress (for example pass photos, feedback, or testimonials). We will not intentionally publish personal information without consent.
          If the Learner chooses to provide a testimonial, the Learner confirms that the statement is honest and that the Learner grants the School permission to display it for promotional purposes.
          If a Learner later wishes to request removal of a testimonial or image, they can contact us and we will respond reasonably.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          15. Fees, credits, and refunds
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          Specific pricing and package inclusions are confirmed during booking. If a Learner cancels or reschedules, credits or refunds (if any) depend on the package terms and timing. We aim to be fair and transparent, taking into account scheduling impact and operational costs.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          16. Disputes and resolution
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          If a concern arises, the Learner agrees to contact the School first so we can resolve the matter quickly and professionally. Most issues can be solved through clear communication.
          Where a formal process is required, the applicable legal framework will apply.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          17. Changes to this agreement
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          This agreement may be updated. If a material change affects existing bookings, the School will attempt to communicate the change and apply it fairly.
        </Typography>

        <Typography variant="h5" fontWeight={900} gutterBottom>
          18. Contact
        </Typography>
        <Typography color="textSecondary" paragraph sx={{ lineHeight: 1.95 }}>
          If you have questions about this agreement, contact A Plus Driving School using the contact details provided on this website.
        </Typography>
      </Container>
    </Box>
  );
}
