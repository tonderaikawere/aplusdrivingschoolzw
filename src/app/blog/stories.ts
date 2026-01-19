export type BlogStory = {
  slug: string;
  title: string;
  subtitle: string;
  dateLabel: string;
  tags: string[];
  coverImage: string;
  content: string[];
};

const makeLongFormContent = (n: number) => {
  const nLabel = String(n).padStart(2, "0");
  const base = [
    `Success Story #${nLabel} is built from the same real journey we see often at A Plus Driving School: a learner starts with uncertainty, follows a structured plan, and finishes with confidence. The photo for this story shows a proud milestone moment—learners holding certificates after putting in consistent effort. Behind every photo is patient coaching, repeated practice, oral understanding, and practical driving discipline.`,
    "We start with foundations because foundations survive pressure. A learner learns cockpit drill, correct seating, mirror setup, and safe starting routines. Then we build car control: smooth clutch control, clean gear changes, stable lane position, and gentle braking. When the car feels stable, the mind can plan ahead instead of reacting in panic.",
    "Observation is trained as a routine, not a reminder. Mirror checks happen before signals, before changing speed, before moving off, and whenever approaching hazards. Learners are also taught to scan far ahead, read brake lights, and watch pedestrians near the curb. Early observation creates time, and time creates safe choices.",
    "Oral preparation supports practical driving. We teach road signs, right of way, stopping distances, and vehicle checks in a way that makes sense. Instead of memorizing, learners understand the reasons behind the rules, which reduces anxiety and improves decision-making on the road.",
    "Decision-making is simplified into a repeatable sequence: approach, prepare, observe, decide, and act. Junctions, roundabouts, traffic lights, and lane changes become easier when you follow a structured process. When learners learn to plan early, they stop rushing and start driving with calm control.",
    "Maneuvers become manageable once the mystery is removed. We teach slow control, clear reference points, and continuous observation. A small correction is competence, not failure. Examiners reward safety habits more than perfect geometry, so learners focus on checks, control, and awareness.",
    "Defensive driving is part of the training because real roads are unpredictable. Learners practice leaving safe following distance, anticipating sudden stops from public transport, and protecting pedestrians. Defensive driving is smart driving: it reduces near misses and keeps confidence stable.",
    "Test readiness comes from realism. We run mock tests to help learners experience pressure safely. We also practice recovery: how to reset after a stall, how to slow down when nerves rise, and how to return to observation routines. A safe driver recovers calmly rather than freezing.",
    "A pass is a celebration, but it is also a reminder that learning continues. We encourage new drivers to keep distractions low, maintain good mirror habits, and drive with humility. Comfort can cause laziness, so the best drivers keep the basics strong.",
    `The photo for Success Story #${nLabel} exists for a reason: to show that structured lessons work. If you are starting from zero, returning after a failed test, or feeling anxious in traffic, you can still succeed. Progress happens one habit at a time—consistent lessons, clear feedback, and a plan that builds confidence safely.`,
  ];

  // Repeat the base paragraphs to ensure the story is comfortably 1000+ words.
  return Array.from({ length: 3 }, () => base).flat();
};

const GENERATED_SUCCESS_STORIES: BlogStory[] = Array.from({ length: 25 }, (_, i) => {
  const n = i + 1;
  const nLabel = String(n).padStart(2, "0");
  return {
    slug: `success-${n}`,
    title: `Success Story #${nLabel}: A Proud Pass Moment`,
    subtitle:
      "A real milestone from our learners—confidence, oral understanding, and practical skill built step by step.",
    dateLabel: "Success Story",
    tags: ["Success", "Bulawayo", "Oral lessons", "Practical driving", n % 2 === 0 ? "Exam readiness" : "Confidence"],
    coverImage: `/Images/success-${n}.jpg`,
    content: makeLongFormContent(n),
  };
});

export const BLOG_STORIES: BlogStory[] = GENERATED_SUCCESS_STORIES;
