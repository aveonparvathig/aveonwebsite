export type Testimonial = {
  name: string;
  role: string;
  institution: string;
  text: string;
  rating: number;
};

/** Fallback content mirroring the Sanity `testimonial` schema. */
export const testimonials: Testimonial[] = [
  {
    name: "Dr. R. Subramanian",
    role: "Registrar",
    institution: "Leading University, Tamil Nadu",
    text: "Aveon's University ERP replaced six disconnected systems on our campus. Examinations that took our COE office three weeks to process now close in four days.",
    rating: 5,
  },
  {
    name: "Prof. Meena Krishnan",
    role: "Principal",
    institution: "Autonomous Arts & Science College",
    text: "The implementation team understood college workflows out of the box, including attendance, internals, and fee collection. Our staff needed just one week of training to go live.",
    rating: 5,
  },
  {
    name: "S. Anand",
    role: "Administrator",
    institution: "CBSE Senior Secondary School",
    text: "Parents love the instant alerts and the fee portal. For the office, everything from admissions to transport is finally in one place.",
    rating: 4,
  },
];
