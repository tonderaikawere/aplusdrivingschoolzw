"use client";

import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqPage() {
  const [query, setQuery] = React.useState("");

  const extra = {
    booking: [
      {
        q: "How far in advance should I book?",
        a: "Booking early helps you get the time slots you prefer. If you have a test date, earlier booking also gives you more flexibility for a steady plan.\n\nIf you are booking for weekends or evenings, it is best to book as early as possible because those slots fill quickly.",
      },
      {
        q: "Can I reschedule a lesson?",
        a: "Yes. If you need to reschedule, let us know as early as possible so we can move your slot to another time.\n\nRescheduling early helps you keep consistent progress and helps us manage the schedule fairly.",
      },
      {
        q: "What happens if I arrive late?",
        a: "If you arrive late, the lesson time may be shorter because the schedule usually has other learners after you.\n\nIf you know you will be late, share a quick update so we can plan the lesson properly.",
      },
      {
        q: "What happens if I need to cancel?",
        a: "If you need to cancel, let us know early so we can reschedule and keep your progress on track.\n\nEarly notice also helps us offer the slot to another learner.",
      },
      {
        q: "Do you offer intensive training?",
        a: "Intensive training can be arranged depending on availability and your current level.\n\nWe still keep training structured, so we focus on control first and then build to test readiness.",
      },
      {
        q: "Do you offer short practice sessions?",
        a: "Short practice sessions can be arranged depending on availability.\n\nShort sessions work best for targeted skills, like parking, hill starts, or a specific maneuver.",
      },
      {
        q: "Can I book lessons for someone else?",
        a: "Yes. You can book on behalf of someone else.\n\nShare the learner’s full name, phone number, license class, and availability so we can confirm the right plan.",
      },
      {
        q: "Do you send reminders before lessons?",
        a: "We can confirm the lesson time and meeting point during booking.\n\nIf you need reminders, mention it when booking so communication stays clear.",
      },
      {
        q: "Can I request back to back sessions on the same day?",
        a: "Sometimes yes, depending on availability and how well it fits your training plan.\n\nBack to back sessions can help, but we still manage fatigue so you stay focused and safe.",
      },
      {
        q: "What is the best lesson frequency for quick progress?",
        a: "Most learners progress faster with consistent sessions each week.\n\nThe best frequency depends on your schedule, but steady repetition helps build habits more quickly than occasional sessions.",
      },
      {
        q: "Do you accept last minute bookings?",
        a: "If there is an open slot, yes.\n\nHowever, booking early is better because it gives you more options and supports consistent progress.",
      },
      {
        q: "Can I change my training plan later?",
        a: "Yes. Plans can be adjusted as you progress.\n\nAfter a few sessions, we can increase difficulty or focus on weak areas based on your performance.",
      },
      {
        q: "Do you train during public holidays?",
        a: "Holiday schedules depend on availability.\n\nIf you want holiday sessions, request your preferred dates early so we can confirm.",
      },
      {
        q: "How do you handle schedule changes due to traffic?",
        a: "Traffic can affect timing, especially during busy hours.\n\nWe plan meeting points and routes carefully to protect lesson time and keep training safe.",
      },
    ],
    location: [
      {
        q: "Do you train in residential areas first?",
        a: "Yes, for beginners we usually start in calmer areas where you can focus on control.\n\nOnce control improves, we progress to busier roads in a structured way.",
      },
      {
        q: "Do you practice in busy town areas?",
        a: "Yes, when you are ready.\n\nTown driving is introduced after basics are stable, so busy areas feel manageable rather than stressful.",
      },
      {
        q: "Can you train me on the routes near my test center?",
        a: "Yes, route familiarity can be helpful.\n\nWe use routes to build confidence and habit consistency, not to memorise, so your skills work in any area.",
      },
      {
        q: "Do lessons always start at the same meeting point?",
        a: "Often yes, but meeting points can change depending on the lesson plan and schedule.\n\nWe confirm meeting points clearly before each lesson.",
      },
      {
        q: "Can I request training in a specific suburb?",
        a: "In many cases yes.\n\nIt depends on the day’s schedule and your learning goals, but we can usually include areas that help your confidence.",
      },
      {
        q: "Do you train on open roads?",
        a: "If required for your plan, yes.\n\nOpen road training focuses on safe speed choice, spacing, and steady control.",
      },
      {
        q: "Do you train at night?",
        a: "Night training can be discussed if needed and if availability allows.\n\nNight driving focuses on visibility, safe speed, and hazard awareness.",
      },
      {
        q: "Do you train in rainy conditions?",
        a: "If it is safe, rain can be used as a learning opportunity.\n\nWe focus on smoother control, longer stopping distances, and safe decision making.",
      },
      {
        q: "Can lessons include parking practice at shopping centers?",
        a: "Yes, when it is appropriate and safe.\n\nPractical environments help learners build confidence, but we choose times and locations carefully.",
      },
      {
        q: "Do you train near schools and pedestrian areas?",
        a: "Yes, when you are ready.\n\nThese areas teach patience, speed control, and careful observation.",
      },
    ],
    learner: [
      {
        q: "Do you train adults who are starting late?",
        a: "Yes. Many learners start later and still become excellent drivers.\n\nWe teach at a steady pace and focus on calm routines that build confidence.",
      },
      {
        q: "Do you train teenagers?",
        a: "We train learners who meet the requirements for their learner documentation.\n\nFor younger learners, we focus strongly on safe habits and calm decision making.",
      },
      {
        q: "Can I request a specific instructor?",
        a: "If available, yes.\n\nTell us your preference when booking and we will confirm what is possible.",
      },
      {
        q: "Can I request a female instructor?",
        a: "If available, we can discuss preferences during booking.\n\nThe main goal is to make the learner comfortable and confident in training.",
      },
      {
        q: "Do you train learners who failed before?",
        a: "Yes. Many learners pass after focused correction and confidence building.\n\nWe identify weak areas, then repeat the correct routines until they are consistent.",
      },
      {
        q: "Do you help learners with driving anxiety?",
        a: "Yes. Anxiety reduces when the learner has a clear routine and repeatable steps.\n\nWe teach calm control and build progress in safe stages.",
      },
      {
        q: "Can you train someone who has never used a manual car?",
        a: "Yes. Manual training starts with clutch control and slow practice.\n\nWe focus on smooth starts, stopping, and gear changes without rushing.",
      },
      {
        q: "Do you offer one on one lessons?",
        a: "Yes. Most lessons are one on one because it helps focus and progress.\n\nThis also gives you more time for corrections and repetition.",
      },
      {
        q: "Do you offer group lessons?",
        a: "Group options depend on availability and safety.\n\nMost training is one on one so the learner gets full attention and clear feedback.",
      },
      {
        q: "Can a parent or friend sit in the car during lessons?",
        a: "It depends on safety and the lesson plan.\n\nIf it is allowed, we confirm it before the lesson so it does not affect training quality.",
      },
      {
        q: "Do you help learners who struggle with confidence in traffic?",
        a: "Yes. We build confidence by using staged exposure, starting with calmer roads and increasing complexity.\n\nWe also focus on spacing and observation so the learner stays calm.",
      },
      {
        q: "Can I switch from manual to automatic training?",
        a: "This can be discussed depending on vehicle availability and your goal.\n\nWe can adjust the plan so you learn the right skills for your chosen vehicle.",
      },
      {
        q: "Can I focus only on test preparation?",
        a: "Yes, if your basics are already stable.\n\nIf basics need correction, we still include them because test preparation depends on strong fundamentals.",
      },
      {
        q: "Do you help learners with steering control?",
        a: "Yes. Steering improves with correct hand position, looking far ahead, and controlled speed.\n\nWe also practice smooth turns and lane discipline.",
      },
    ],
    skills: [
      {
        q: "Do you teach mirror checks and observation routines?",
        a: "Yes. Observation routines are part of every lesson.\n\nWe teach a repeatable pattern so mirrors and blind spots become automatic.",
      },
      {
        q: "Do you teach safe following distance?",
        a: "Yes. Following distance is one of the strongest safety habits.\n\nWe teach spacing rules and how to adjust spacing in different traffic conditions.",
      },
      {
        q: "Do you teach lane changes?",
        a: "Yes. Lane changes require observation, signaling, and safe gaps.\n\nWe teach a step by step routine so lane changes are calm and safe.",
      },
      {
        q: "Do you teach merging?",
        a: "Yes. Merging is taught with observation and correct timing.\n\nWe focus on matching speed safely and choosing gaps without panic.",
      },
      {
        q: "Do you teach overtaking?",
        a: "We explain safe principles and practice only when it is appropriate.\n\nOvertaking is trained with strong judgment because safety matters more than speed.",
      },
      {
        q: "Do you teach speed control?",
        a: "Yes. Speed control starts from the first lessons.\n\nWe focus on smooth control, safe choices, and maintaining spacing.",
      },
      {
        q: "Do you teach defensive driving?",
        a: "Yes. Defensive driving is about hazard awareness and calm decision making.\n\nWe teach you to anticipate risks and keep safe options.",
      },
      {
        q: "Do you teach hazard perception?",
        a: "Yes. Hazard awareness is part of safe driving.\n\nYou learn how to scan ahead, read other road users, and adjust early.",
      },
      {
        q: "Do you teach right of way rules?",
        a: "Yes. Right of way is taught with practical examples.\n\nWe focus on safe judgment and avoiding risky assumptions.",
      },
      {
        q: "Do you teach how to use indicators correctly?",
        a: "Yes. Correct signaling is part of every lesson.\n\nWe teach timing so signals communicate your intention clearly.",
      },
      {
        q: "Do you teach correct stopping distance?",
        a: "Yes. We teach safe braking distance based on speed and road conditions.\n\nThis helps prevent panic braking and reduces risk.",
      },
      {
        q: "Do you teach how to handle pedestrians safely?",
        a: "Yes. We teach awareness and safe response near pedestrians.\n\nYou learn how to slow down early and avoid sudden decisions.",
      },
      {
        q: "Do you teach how to handle cyclists safely?",
        a: "Yes. We teach safe spacing and careful observation.\n\nCyclists can change speed quickly, so patience and spacing are key.",
      },
      {
        q: "Do you teach how to handle animals on the road?",
        a: "Yes. We explain safe slowing and decision making.\n\nThe goal is to stay calm, reduce speed, and avoid sudden risky swerves.",
      },
      {
        q: "Do you teach how to handle narrow roads?",
        a: "Yes. Narrow roads need clear positioning and safe passing judgment.\n\nWe teach how to slow down and give space.",
      },
      {
        q: "Do you teach how to drive near large trucks?",
        a: "Yes. We teach safe spacing, blind spot awareness, and patience around heavy vehicles.\n\nLarge vehicles need more stopping distance and space.",
      },
      {
        q: "Do you teach fuel saving driving habits?",
        a: "Yes. Smooth control and correct speed choices reduce fuel use.\n\nWe teach habits like gentle acceleration and steady speed.",
      },
      {
        q: "Do you teach basic road signs and markings?",
        a: "Yes. We explain signs and markings with practical examples.\n\nThe goal is not memorising only, it is understanding how to apply them.",
      },
      {
        q: "Do you teach reversing with mirrors?",
        a: "Yes. We teach reversing using mirrors and correct observation checks.\n\nWe also teach slow control so you stay accurate.",
      },
      {
        q: "Do you teach parallel parking?",
        a: "If it applies to your training goal, yes.\n\nWe teach reference points, slow control, and repetition until it feels natural.",
      },
      {
        q: "Do you teach three point turns?",
        a: "If required for your class and test expectations, yes.\n\nWe teach safe checks, slow control, and correct positioning.",
      },
      {
        q: "Do you teach U turns?",
        a: "Yes, when appropriate.\n\nWe focus on safe checks, choosing the right location, and completing the turn smoothly.",
      },
      {
        q: "Do you teach reversing around a corner?",
        a: "If it is part of your maneuver requirements, yes.\n\nWe teach controlled steering, mirror use, and steady speed.",
      },
      {
        q: "Do you teach how to judge gaps safely?",
        a: "Yes. Gap judgment is a key skill in traffic and at intersections.\n\nWe teach how to wait patiently and move only when safe.",
      },
      {
        q: "Do you teach how to handle busy intersections?",
        a: "Yes, once you are ready.\n\nWe focus on observation, lane choice, and calm decisions.",
      },
      {
        q: "Do you teach how to handle roundabout lane choice?",
        a: "Yes. Lane choice is taught with clear rules and practice.\n\nWe also practice signaling and safe entry.",
      },
      {
        q: "Do you teach how to handle stop and yield situations?",
        a: "Yes. We teach full stops where required and safe entry after checks.\n\nWe also teach patience so you do not rush.",
      },
    ],
    test: [
      {
        q: "What are common reasons learners fail a test?",
        a: "Common reasons include poor observation, incorrect signaling, unsafe spacing, and loss of control during maneuvers.\n\nWe correct these by building routines that stay consistent under pressure.",
      },
      {
        q: "How do you help learners manage test nerves?",
        a: "We teach a simple routine that you repeat before and during the test, setup, mirrors, observation, calm control.\n\nWhen routines are consistent, nerves reduce because your mind knows what to do.",
      },
      {
        q: "Do you practice the exact maneuvers used in the test?",
        a: "Yes, when they apply to your class and test requirements.\n\nWe practice with corrections so the technique becomes repeatable and calm.",
      },
      {
        q: "How many mock tests should I do?",
        a: "It depends on your level. Some learners need one or two, others need more.\n\nWe use mock tests to identify weak points and measure consistency.",
      },
      {
        q: "Do you teach how to follow examiner instructions?",
        a: "Yes. We teach you to listen, confirm if needed, and act calmly.\n\nWe also teach you to keep your observation routine even when instructions feel rushed.",
      },
      {
        q: "What should I do if I make a mistake during the test?",
        a: "Stay calm and continue safely. Many tests are not failed by one small mistake.\n\nThe biggest risk is panic. We teach recovery routines so you keep control.",
      },
      {
        q: "How do you know which weak areas to fix?",
        a: "We look at patterns in control, observation, and decision making.\n\nThen we build a correction plan with repetition until it becomes consistent.",
      },
      {
        q: "Do you help with pre test preparation routines?",
        a: "Yes. We teach a simple routine, seat setup, mirrors, calm breathing, and focus.\n\nA steady routine helps reduce stress and improves performance.",
      },
      {
        q: "How long before my test should I start training?",
        a: "Starting earlier is always better because skills improve with steady repetition.\n\nIf you start close to the test date, we still help, but we keep training focused and structured.",
      },
      {
        q: "Do you help with oral test preparation?",
        a: "Yes. Oral preparation covers signs, rules, and how to answer clearly.\n\nWe focus on understanding and clear explanation, not memorising only.",
      },
      {
        q: "Do you teach common oral questions?",
        a: "Yes. We cover common oral topics and how to explain answers confidently.\n\nWe also help you understand why each rule exists so answers make sense.",
      },
      {
        q: "How can I improve my oral confidence?",
        a: "Oral confidence improves when you understand the topic and practice explaining it out loud.\n\nWe teach simple ways to remember key signs and rules.",
      },
      {
        q: "What should I focus on the week before the test?",
        a: "Focus on consistency, observation routines, and maneuvers you struggle with.\n\nAvoid rushing. Calm repetition is more useful than panicked practice.",
      },
      {
        q: "Do you teach what to do at a stop line?",
        a: "Yes. We teach full stops, correct mirror checks, and safe entry.\n\nStop lines are common test points because they show observation discipline.",
      },
      {
        q: "Do you teach correct turning positions for the test?",
        a: "Yes. Turning positions are trained step by step with clear lane placement rules.\n\nCorrect positioning reduces risk and improves test scoring.",
      },
      {
        q: "Do you teach how to avoid examiner penalties?",
        a: "Yes. We teach habits that prevent common penalties, like forgetting mirrors, late signaling, and unsafe spacing.\n\nStrong routines are the best protection.",
      },
    ],
    safety: [
      {
        q: "Do you teach seat belt and passenger safety?",
        a: "Yes. Safety procedures are included.\n\nWe teach correct seat belt use, safe seating, and why safety checks matter.",
      },
      {
        q: "Do you teach how to check tyre condition?",
        a: "Yes. We cover basic tyre safety and what to look out for.\n\nTyres affect braking and grip, so learners should understand the basics.",
      },
      {
        q: "Do you teach basic brake safety?",
        a: "Yes. We explain braking distance and what affects stopping, speed, tyres, and road conditions.\n\nWe also teach smooth braking control.",
      },
      {
        q: "Do you teach what to do if a warning light appears?",
        a: "We explain general guidance and safety steps, like slowing down safely and checking the vehicle.\n\nIf a warning suggests danger, the priority is to stop safely and avoid risk.",
      },
      {
        q: "Do you teach safe driving in heavy traffic?",
        a: "Yes. Heavy traffic driving focuses on spacing, patience, and observation.\n\nWe teach calm routines so the learner stays controlled and safe.",
      },
      {
        q: "Do you teach safe driving near pedestrians at night?",
        a: "Yes, if night driving is part of the plan.\n\nWe focus on slower speed, scanning, and extra caution near crossings and dark areas.",
      },
      {
        q: "Do you teach safe use of headlights?",
        a: "Yes. We explain when to use lights and how to use them responsibly.\n\nVisibility is safety, so correct light use matters.",
      },
      {
        q: "Do you teach what to do after a minor incident?",
        a: "We focus on prevention first, but we also explain calm steps like stopping safely and checking for danger.\n\nThe priority is always safety and avoiding further risk.",
      },
      {
        q: "Do you teach how to handle mechanical issues during a lesson?",
        a: "Yes. If something feels wrong, we teach you to slow down safely and communicate immediately.\n\nWe keep training safe and we do not push through risky situations.",
      },
      {
        q: "Do you teach safe spacing around buses and kombis?",
        a: "Yes. Public transport vehicles stop often and change lanes quickly.\n\nWe teach spacing and anticipation so you stay safe.",
      },
      {
        q: "Do you teach safe driving near road works?",
        a: "Yes. Road works require lower speed and careful observation.\n\nWe teach how to follow signs, cones, and workers safely.",
      },
    ],
    payments: [
      {
        q: "Do you offer different packages?",
        a: "Yes. Packages are designed for different goals like beginner foundation, confidence building, and test readiness.\n\nWe recommend a package after you share your class and current level.",
      },
      {
        q: "Can I change packages later?",
        a: "Yes. If your needs change, we can adjust the plan.\n\nThe goal is to match training to your progress and target date.",
      },
      {
        q: "Do you offer package lessons for families?",
        a: "Family arrangements can be discussed depending on schedules.\n\nWe still focus on individual training needs because each learner progresses differently.",
      },
      {
        q: "Do you confirm costs before training starts?",
        a: "Yes. We keep it clear and confirm the approach before lessons start.\n\nThat way you know what to expect and can plan properly.",
      },
      {
        q: "Can I pay in parts?",
        a: "Payment approach depends on the package and agreement.\n\nWe can discuss options during booking so it stays clear and fair.",
      },
      {
        q: "Do you offer corporate training?",
        a: "Corporate arrangements can be discussed depending on the training needs.\n\nWe can structure sessions around safety and defensive driving habits.",
      },
      {
        q: "Do you provide receipts?",
        a: "If you need payment confirmation, we can discuss what documentation is available.\n\nTell us your needs during booking.",
      },
      {
        q: "Does pricing change for different license classes?",
        a: "Pricing can vary by class because training requirements and vehicle needs can differ.\n\nWe confirm pricing based on your class and plan.",
      },
      {
        q: "Does pricing change for intensive training?",
        a: "It can, depending on the schedule and lesson length.\n\nWe confirm details clearly before training begins.",
      },
      {
        q: "Do you offer a trial lesson?",
        a: "We can arrange an initial session to assess your level and create a plan.\n\nThat first session helps us recommend the right training approach.",
      },
    ],
    tips: [
      {
        q: "How can I improve faster if I do not have a car to practice with?",
        a: "You can still improve by reviewing theory, visualising routines, and practicing observation habits mentally.\n\nConsistency matters. Even without extra driving, structured lessons and clear routines can build strong progress.",
      },
      {
        q: "What shoes are best for driving lessons?",
        a: "Flat, comfortable shoes with a thin sole are best because you can feel the pedals clearly.\n\nAvoid heavy boots or slippery soles because they reduce control.",
      },
      {
        q: "What is the best way to learn clutch control?",
        a: "Clutch control improves with slow repetition and correct foot positioning.\n\nWe teach bite point awareness and smooth release without rushing.",
      },
      {
        q: "How can I stop rushing gear changes?",
        a: "Rushing usually comes from fear of stalling.\n\nWe focus on calm timing, listening to the engine, and using smooth clutch coordination.",
      },
      {
        q: "How can I improve my steering accuracy?",
        a: "Look far ahead, keep your speed controlled, and use smooth hand movement.\n\nWe also teach lane reference points so you stay centered.",
      },
      {
        q: "How can I improve my braking control?",
        a: "Braking improves with early planning, smooth pressure, and correct spacing.\n\nWe teach you to brake earlier and smoother rather than late and harsh.",
      },
      {
        q: "How do I handle pressure from other drivers?",
        a: "Stay calm and drive safely. Pressure from other drivers is not a reason to rush.\n\nWe teach you to keep safe spacing and follow your routine.",
      },
      {
        q: "How do I handle honking while learning?",
        a: "Honking can be stressful, but it should not change your safety decisions.\n\nFocus on your observation routine and move only when it is safe.",
      },
      {
        q: "What should I do if I forget a step during a maneuver?",
        a: "Pause safely, reset your routine, and continue calmly.\n\nWe teach recoveries so you do not panic during parking or reversing.",
      },
      {
        q: "How do I build confidence for the first town drive?",
        a: "Confidence comes from strong basics.\n\nWe prepare you with control routines first, then move to town driving in stages so it feels manageable.",
      },
      {
        q: "How do I improve my observation at intersections?",
        a: "Slow down early and follow a repeatable check pattern.\n\nWe teach you to scan left, right, and mirrors before moving.",
      },
      {
        q: "What should I do if I keep drifting in my lane?",
        a: "Lane drifting is often caused by looking too close in front of the car.\n\nWe teach you to look farther ahead and use reference points to stay centered.",
      },
      {
        q: "How can I improve my parking reference points?",
        a: "Reference points improve with repetition in the same method.\n\nWe teach consistent steps so you build reliable landmarks.",
      },
      {
        q: "How do I handle steep hills calmly?",
        a: "Steep hills require controlled clutch and careful braking routines.\n\nWe teach calm steps that prevent rollback and reduce panic.",
      },
      {
        q: "How can I improve my confidence in roundabouts?",
        a: "Roundabout confidence improves with lane choice clarity and observation routines.\n\nWe practice entry judgment, signaling, and safe spacing.",
      },
      {
        q: "What should I do if I miss a turn?",
        a: "Missing a turn is not a problem. Continue safely and take the next safe option.\n\nWe teach calm decision making so you never rush a last second turn.",
      },
      {
        q: "How do I handle speed bumps smoothly?",
        a: "Slow down early, keep steady control, and avoid harsh braking on the bump.\n\nSmooth speed control protects the vehicle and keeps passengers comfortable.",
      },
      {
        q: "How do I avoid rolling back at traffic lights?",
        a: "Rollback reduces with strong clutch control and correct footwork.\n\nWe teach routines that keep the car stable on inclines.",
      },
      {
        q: "How do I improve my mirror discipline?",
        a: "Mirror discipline improves when mirrors are checked for a reason, not randomly.\n\nWe teach you when to check mirrors and how often, based on the situation.",
      },
      {
        q: "How do I prepare for the first lesson if I feel very nervous?",
        a: "It helps to rest well, wear comfortable shoes, and arrive early.\n\nWe start slowly and build confidence step by step, so you do not need to feel pressured.",
      },
    ],
  };

  const categories = [
    {
      title: "Booking and scheduling",
      description: "How to start, how lessons are planned, and what to expect on your first day.",
      items: [
        {
          q: "How do I book lessons?",
          a: "Booking is simple. Send your name, phone number, license class, and the days and times you prefer.\n\nWe confirm a suitable slot and agree on a meeting point before the first lesson.",
        },
        {
          q: "How long is one lesson?",
          a: "Lesson length depends on the training plan and the available schedule for that week.\n\nWhen you book, we confirm the session length and what the lesson will focus on so you know what to expect.",
        },
        {
          q: "Do you offer weekend lessons?",
          a: "Yes, depending on availability.\n\nWeekend sessions tend to fill quickly, so it helps to share your preferred weekend times early.",
        },
        {
          q: "Can I choose days and times?",
          a: "Yes. Share your preferred days and time window, then we confirm what is available.\n\nIf your schedule is tight, we can recommend a routine that still keeps your progress consistent.",
        },
        {
          q: "Do you support early morning lessons?",
          a: "Schedule depends on availability.\n\nIf you prefer early lessons, share your preferred time range and we will confirm the closest available slot.",
        },
        {
          q: "Do you support evening lessons?",
          a: "Schedule depends on availability.\n\nEvening sessions work well for learners who have school or work during the day.",
        },
        {
          q: "Can I pause lessons and continue later?",
          a: "Yes. You can pause and continue later.\n\nFor best results, we recommend steady practice because long gaps can slow down confidence and consistency.",
        },
        ...extra.booking,
      ],
    },
    {
      title: "Location and coverage",
      description: "Where training happens and how meeting points are arranged.",
      items: [
        {
          q: "Where do lessons take place?",
          a: "Lessons take place in Bulawayo. Training routes depend on your current level and what you are practicing.\n\nWe start with calm areas for control, then progress to busier roads when you are ready.",
        },
        {
          q: "What areas do you cover in Bulawayo?",
          a: "Coverage depends on the schedule and the lesson goals.\n\nWhen you book, we confirm a practical meeting point and we choose routes that support your learning and test readiness.",
        },
        {
          q: "Do you pick up learners?",
          a: "Pickup points depend on the area and the day’s schedule.\n\nWe confirm pickup or meeting point options during booking so the lesson starts smoothly.",
        },
        {
          q: "Can lessons start near my area?",
          a: "Yes, in many cases.\n\nShare your area and we will agree on a safe and practical meeting point based on your lesson goals and the route plan.",
        },
        ...extra.location,
      ],
    },
    {
      title: "Learner level and lesson types",
      description: "Beginners, nervous learners, refresher lessons, and targeted practice.",
      items: [
        {
          q: "Do you teach beginners?",
          a: "Yes. We start with basic vehicle control and correct setup, then build up to road driving and test readiness.\n\nBeginners learn step by step so confidence grows naturally.",
        },
        {
          q: "Do you train for first time learners who have never driven?",
          a: "Yes. Many learners start with no experience.\n\nWe begin with simple control routines and only move to traffic when the basics are stable.",
        },
        {
          q: "Do you help nervous learners?",
          a: "Yes. We teach at a steady pace and build confidence with repeatable routines.\n\nWe focus on calm control, safe spacing, and clear decision making in traffic.",
        },
        {
          q: "Do you offer refresher lessons?",
          a: "Yes. Refresher lessons are ideal if you have experience but feel rusty or nervous.\n\nWe focus on confidence, parking, observation routines, and safe habits that make driving feel normal again.",
        },
        {
          q: "Can I start with theory only?",
          a: "Yes. Theory sessions can help you understand road rules, signs, and examiner expectations before practical lessons.\n\nThis is also useful if you want to build confidence first.",
        },
        {
          q: "Can I start with yard only?",
          a: "Yes. We can focus on yard practice first, then progress to road driving.\n\nThis helps learners who want control and maneuver confidence before town driving.",
        },
        {
          q: "Can I focus on parking only?",
          a: "Yes. Targeted sessions can focus only on parking and maneuvers.\n\nWe use reference points, slow control, and repetition until the technique becomes natural.",
        },
        {
          q: "Can I focus on hill starts only?",
          a: "Yes. Hill start practice can be targeted.\n\nWe teach safe handbrake or footbrake routines, clutch control, and calm recovery if the vehicle stalls.",
        },
        ...extra.learner,
      ],
    },
    {
      title: "Training skills and techniques",
      description: "The core driving skills we train during lessons.",
      items: [
        {
          q: "Which classes do you train for?",
          a: "We support Class 1 to Class 4 training.\n\nThe best training plan depends on your class, your current level, and your test goal.",
        },
        {
          q: "Do you teach seat position and mirror setup?",
          a: "Yes. Setup is done before driving begins.\n\nCorrect seating and mirror positioning improves control, visibility, and confidence.",
        },
        {
          q: "Do you teach clutch control?",
          a: "Yes. We teach clutch control early because it affects every other skill in a manual vehicle.\n\nOnce clutch control improves, smooth starts and safe speed control become much easier.",
        },
        {
          q: "Do you teach smooth gear changes?",
          a: "Yes. We teach gear changes with correct timing and smooth coordination.\n\nYou will learn how to change gears without rushing and without losing control.",
        },
        {
          q: "Do you teach how to handle stalls?",
          a: "Yes. Stalling is normal for beginners.\n\nWe teach safe recovery, clutch control improvement, and routines that reduce stalling over time.",
        },
        {
          q: "Do you teach hill starts?",
          a: "Yes. Hill starts are taught as part of control and safety skills.\n\nWe focus on preventing rollback and moving off smoothly and safely.",
        },
        {
          q: "Do you teach parking?",
          a: "Yes. We teach parking step by step with clear reference points.\n\nWe repeat the technique until you can do it calmly and consistently.",
        },
        {
          q: "Do you teach reversing?",
          a: "Yes. Reversing is taught in a controlled environment first, then applied in maneuvers and parking.\n\nWe focus on slow control, observation, and safe steering.",
        },
        {
          q: "Do you teach turning techniques?",
          a: "Yes. Turning control and positioning are part of core training.\n\nYou learn correct approach speed, lane position, and safe observation before turning.",
        },
        {
          q: "Do you teach lane discipline?",
          a: "Yes. Lane discipline helps safety and test performance.\n\nWe teach clear positioning rules and how to correct early if you drift.",
        },
        {
          q: "Do you teach roundabouts?",
          a: "Yes. We cover approach, observation, safe entry, and correct lane choice.\n\nWe also practice calm decision making and signaling.",
        },
        {
          q: "Do you teach intersections and stop signs?",
          a: "Yes. We practice safe approaches and correct stopping.\n\nYou learn how to judge gaps, check blind spots, and enter safely.",
        },
        {
          q: "Do you teach emergency braking?",
          a: "Yes. We cover safe braking and controlled stopping.\n\nYou learn how to brake firmly without losing steering control.",
        },
        {
          q: "Do you teach wet weather driving?",
          a: "Yes. We explain safe adjustments for rain and low grip.\n\nThis includes slower speed choices, longer stopping distance, and smoother steering.",
        },
        ...extra.skills,
      ],
    },
    {
      title: "Test preparation and examiner expectations",
      description: "Mock tests, route practice, and how to know when you are ready.",
      items: [
        {
          q: "Do you help with mock tests?",
          a: "Yes. Mock tests help you understand what the examiner checks and where mistakes usually happen.\n\nAfter the mock test, we correct the weak areas and repeat until it becomes consistent.",
        },
        {
          q: "Do you help with test routes?",
          a: "Yes. We practice routes and focus on the skills the examiner checks.\n\nRoute practice is used to build familiarity, not to memorise. We train safe habits that work everywhere.",
        },
        {
          q: "Do you teach common examiner expectations?",
          a: "Yes. We explain what is assessed, what causes failures, and what strong driving looks like.\n\nYou also learn how to stay calm and follow a routine during the test.",
        },
        {
          q: "How do I know if I am ready for the test?",
          a: "You are close to ready when control and observation are consistent, and you need few corrections.\n\nWe also check your ability to handle busy roads, parking, and examiner style instructions calmly.",
        },
        {
          q: "Do you help after a failed test?",
          a: "Yes. We review what happened, identify the weak areas, and build a correction plan.\n\nMany learners pass after focused correction sessions.",
        },
        {
          q: "Can you train me for a specific test date?",
          a: "Yes. Share your test date and your current level.\n\nWe plan the training stages so you reach readiness without rushing and without skipping fundamentals.",
        },
        ...extra.test,
      ],
    },
    {
      title: "Vehicles and lesson safety",
      description: "Training vehicles, vehicle checks, and safety routines.",
      items: [
        {
          q: "Do you provide a training vehicle?",
          a: "Yes. Lessons are done in our training vehicles unless we agree otherwise.\n\nUsing a training vehicle helps keep lessons consistent and safe.",
        },
        {
          q: "Can I use my own car?",
          a: "In some cases yes.\n\nWe confirm based on your goals, the vehicle condition, and what will be safest for the lesson.",
        },
        {
          q: "Do you train automatic or manual?",
          a: "Training depends on available vehicles and your preference.\n\nIf you are not sure which is best for your goal, we can discuss your needs and recommend an option.",
        },
        {
          q: "Do you maintain your vehicles regularly?",
          a: "Yes. We keep vehicles in good condition for safe training.\n\nGood maintenance improves lesson quality and reduces risk.",
        },
        {
          q: "Do you teach basic vehicle checks?",
          a: "Yes. We can show basic checks that support safe driving.\n\nThis includes simple checks that every driver should understand before a trip.",
        },
        ...extra.safety,
      ],
    },
    {
      title: "Payments and packages",
      description: "How packages work and how pricing is handled.",
      items: [
        {
          q: "Can I book a package?",
          a: "Yes. Packages are based on your class and your goal.\n\nWe recommend a package after you share your experience level and your target test date.",
        },
        {
          q: "Do you offer pay per lesson?",
          a: "We can discuss the payment approach during booking.\n\nThe best option depends on how many lessons you need and your preferred schedule.",
        },
        {
          q: "Do you take deposits?",
          a: "Payment methods depend on the package.\n\nWe confirm the exact requirements clearly before lessons start.",
        },
        {
          q: "Do you offer discounts?",
          a: "Discounts depend on the package and the season.\n\nIf a discount is available, we confirm it clearly during booking.",
        },
        ...extra.payments,
      ],
    },
    {
      title: "Practical tips for faster progress",
      description: "Small habits that make a big difference in confidence and consistency.",
      items: [
        {
          q: "What should I bring for my first lesson?",
          a: "Bring a valid ID and any learner documentation you have. Wear comfortable shoes.\n\nIf you have glasses you use for driving, bring them too. Comfort and clear vision matter.",
        },
        {
          q: "How many lessons do I need?",
          a: "The number depends on your confidence, practice consistency, and how quickly you pick up control routines.\n\nAfter your first session we can estimate a plan based on your starting level and your goal.",
        },
        {
          q: "What is the best way to prepare between lessons?",
          a: "Review your lesson notes, practice theory, and repeat key routines like observation and signaling.\n\nEven short practice sessions can help, as long as you stay consistent.",
        },
        {
          q: "How can I reduce mistakes in parking?",
          a: "Move slowly, use clear reference points, and follow the same steps every time.\n\nThe goal is consistency. Speed comes naturally after control is stable.",
        },
        {
          q: "How can I improve observation?",
          a: "Build a routine for mirrors, blind spots, and scanning ahead.\n\nThe routine should be repeated so it becomes automatic and calm.",
        },
        {
          q: "How can I stop stalling?",
          a: "Stalling reduces with clutch control practice, smooth starts, and correct gear choice.\n\nWe also teach recovery routines so you stay calm even when it happens.",
        },
        {
          q: "How can I stay calm in traffic?",
          a: "Drive at a safe pace, keep space, and focus on your observation routine.\n\nConfidence comes from doing the basics well, even in busy areas.",
        },
        ...extra.tips,
      ],
    },
  ];

  const normalizedQuery = query.trim().toLowerCase();
  const matches = (text: string) => text.toLowerCase().includes(normalizedQuery);

  const filteredCategories = categories
    .map((c) => ({
      ...c,
      items: c.items.filter((i) => {
        if (!normalizedQuery) return true;
        return matches(i.q) || matches(i.a);
      }),
    }))
    .filter((c) => c.items.length > 0);

  const renderAnswer = (text: string) => {
    const parts = text.split("\n\n");
    return (
      <Stack spacing={1.25}>
        {parts.map((p) => (
          <Typography key={p} color="textSecondary" sx={{ lineHeight: 1.9 }}>
            {p}
          </Typography>
        ))}
      </Stack>
    );
  };

  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 10 },
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 60%, rgba(250,250,250,1) 100%), url(/Images/driving-2.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} sx={{ color: "#fff", maxWidth: 980 }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.88)", mt: 1.5, maxWidth: 980, lineHeight: 1.8 }}>
            Clear answers that help you understand training, booking, and test preparation.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <TextField
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a question or keyword"
          sx={{ mb: 3 }}
        />

        {filteredCategories.length === 0 ? (
          <Typography color="textSecondary">No matching questions found.</Typography>
        ) : (
          <Stack spacing={4}>
            {filteredCategories.map((cat) => (
              <Box key={cat.title}>
                <Typography variant="h5" fontWeight={900} gutterBottom>
                  {cat.title}
                </Typography>
                <Typography color="textSecondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {cat.description}
                </Typography>
                <Divider sx={{ mb: 2 }} />

                {cat.items.map((item) => (
                  <Accordion key={item.q} sx={{ borderRadius: 2, mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight={800}>{item.q}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>{renderAnswer(item.a)}</AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
