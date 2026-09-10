"use client";

import Image from "next/image";

export default function TestimonialsWithRatings() {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Vice Chancellor",
      institution: "Vellore Institute of Technology",
      rating: 5,
      text: "Aveon's OBE-compliant platform helped us streamline our NAAC accreditation process. Implementation was smooth and the team's understanding of Indian education standards was exceptional.",
      image: "👨‍🎓",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Dean of Academics",
      institution: "Christ University",
      rating: 5,
      text: "The AI-powered analytics dashboard provides real-time insights into student performance. We've reduced data collection time by 60% and improved our academic outcomes tracking.",
      image: "👩‍💼",
    },
    {
      name: "Mr. Vikram Patel",
      role: "Director of Administration",
      institution: "Symbiosis International",
      rating: 4.5,
      text: "Managing multiple campuses became seamless with Aveon. The unified platform for admissions, academics, and operations saved us significant operational costs.",
      image: "👨‍💼",
    },
    {
      name: "Dr. Anjali Nair",
      role: "Registrar",
      institution: "FLAME University",
      rating: 5,
      text: "Outstanding support team and product. AICTE compliance features are built-in, and the system handles our complex curriculum requirements effortlessly.",
      image: "👩‍🏫",
    },
    {
      name: "Mr. Suresh Gupta",
      role: "Principal",
      institution: "Delhi Public School",
      rating: 4.5,
      text: "Parent communication, fee management, and student information is now centralized. Both staff and parents appreciate the transparency and ease of use.",
      image: "👨‍🏫",
    },
    {
      name: "Dr. Meera Desai",
      role: "Chief Academic Officer",
      institution: "Ashoka University",
      rating: 5,
      text: "Aveon's platform is built for outcome-based education. The learning outcome tracking and performance analytics align perfectly with our institutional goals.",
      image: "👩‍💻",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : i < rating
              ? "fill-amber-400 text-amber-400 opacity-50"
              : "fill-gray-300 text-gray-300"
        }`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-navy-900">
              4.8 out of 5 stars • 250+ Institutions
            </span>
          </div>

          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-tight text-navy-900">
            Trusted by India's Leading
            <span className="block text-primary-600">
              Universities, Colleges & Schools
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-relaxed text-navy-700 sm:mt-6">
            5000+ institutions rely on Aveon for unified campus management, OBE compliance, and institutional excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-navy-900/8 bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-primary-600/30 hover:shadow-[0_20px_60px_-10px_rgb(29_111_242_/_0.15)]"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="mb-6 text-sm leading-relaxed text-navy-700">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-navy-600">
                    {testimonial.role}, {testimonial.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 sm:mt-16">
          <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 p-6 text-center">
            <div className="text-2xl font-bold text-primary-600 sm:text-3xl">
              250+
            </div>
            <p className="mt-2 text-sm font-medium text-navy-700">
              Institutions Served
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100/50 p-6 text-center">
            <div className="text-2xl font-bold text-accent-500 sm:text-3xl">
              5000+
            </div>
            <p className="mt-2 text-sm font-medium text-navy-700">
              Active Users
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 p-6 text-center">
            <div className="text-2xl font-bold text-green-600 sm:text-3xl">
              4.8★
            </div>
            <p className="mt-2 text-sm font-medium text-navy-700">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}