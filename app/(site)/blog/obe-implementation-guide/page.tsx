import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Complete Guide to Outcome-Based Education (OBE) Implementation | Aveon",
  description: "Step-by-step guide to implementing Outcome-Based Education in your institution. Learn how to map learning outcomes, assess student performance, and achieve NAAC accreditation.",
  keywords: [
    "outcome-based education",
    "OBE implementation",
    "learning outcomes",
    "NAAC accreditation",
    "curriculum mapping",
    "institutional effectiveness",
  ],
};

export default function OBEGuide() {
  return (
    <article className="min-h-screen bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            ← Back to Blog
          </Link>
          <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-extrabold leading-tight text-navy-900">
            Complete Guide to Outcome-Based Education (OBE) Implementation
          </h1>
          <p className="text-lg text-navy-700">
            Learn how to successfully implement OBE in your institution and achieve NAAC accreditation.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-navy-600">
            <span>Published: March 2024</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-navy-800">
          <h2>What is Outcome-Based Education?</h2>
          <p>
            Outcome-Based Education (OBE) is an educational approach where emphasis is placed on what students are expected to learn and the demonstration of that learning. Unlike traditional teaching methods that focus on content delivery, OBE centers on measurable student outcomes.
          </p>

          <h2>Key Components of OBE</h2>
          <h3>1. Program Outcomes (POs)</h3>
          <p>
            Define what students will know and be able to do after completing your program. These should be broad, measurable statements aligned with institutional goals and accreditation standards.
          </p>

          <h3>2. Course Outcomes (COs)</h3>
          <p>
            Break down program outcomes into specific course-level outcomes. Each course should have 3-5 clear, measurable outcomes that contribute to the broader program outcomes.
          </p>

          <h3>3. Assessment Methods</h3>
          <p>
            Use multiple assessment tools to measure student achievement. These can include:
            <ul>
              <li>Direct assessments: Exams, projects, presentations, portfolios</li>
              <li>Indirect assessments: Surveys, focus groups, alumni feedback</li>
              <li>Institutional data: Grade distributions, retention rates, placement data</li>
            </ul>
          </p>

          <h2>Implementation Steps</h2>
          <p>Implement OBE systematically across your institution:</p>
          <ol>
            <li><strong>Define Outcomes:</strong> Faculty collaborate to define clear, measurable program and course outcomes.</li>
            <li><strong>Map Curriculum:</strong> Align courses with outcomes and identify gaps in coverage.</li>
            <li><strong>Assess Learning:</strong> Implement assessment methods to measure achievement against outcomes.</li>
            <li><strong>Analyze Data:</strong> Collect and analyze assessment data to understand student learning patterns.</li>
            <li><strong>Close the Loop:</strong> Use insights to improve courses, teaching methods, and curriculum design.</li>
            <li><strong>Report Findings:</strong> Document your OBE process for NAAC accreditation and institutional improvement.</li>
          </ol>

          <h2>How Aveon Supports OBE Implementation</h2>
          <p>
            Aveon's campus ERP platform includes built-in OBE framework tools:
          </p>
          <ul>
            <li><strong>Outcome Mapping Module:</strong> Define and map program, course, and assessment outcomes</li>
            <li><strong>Assessment Management:</strong> Track student performance against defined outcomes</li>
            <li><strong>Analytics Dashboard:</strong> Visualize learning patterns and institutional effectiveness</li>
            <li><strong>NAAC Reporting:</strong> Automated data collection and compliance documentation</li>
            <li><strong>Continuous Improvement:</strong> Data-driven insights for curriculum enhancement</li>
          </ul>

          <h2>Common Challenges & Solutions</h2>
          <h3>Challenge: Defining Clear Outcomes</h3>
          <p>
            <strong>Solution:</strong> Use action verbs (Bloom's Taxonomy) and ensure outcomes are specific, measurable, achievable, relevant, and time-bound (SMART).
          </p>

          <h3>Challenge: Assessment Overload</h3>
          <p>
            <strong>Solution:</strong> Integrate assessments into existing course activities rather than adding extra assessments. Use direct course assessments for multiple outcomes.
          </p>

          <h3>Challenge: Data Analysis & Interpretation</h3>
          <p>
            <strong>Solution:</strong> Use institutional research tools and dashboards to visualize data and make data-driven decisions. Aveon's analytics module simplifies this process.
          </p>

          <h2>Expected Benefits</h2>
          <ul>
            <li>Improved student learning and achievement</li>
            <li>Enhanced program quality and curriculum alignment</li>
            <li>Demonstrated institutional effectiveness for accreditation</li>
            <li>Data-driven decision making across departments</li>
            <li>Better placement and employment outcomes</li>
            <li>Increased stakeholder confidence in program quality</li>
          </ul>

          <div className="mt-12 rounded-lg bg-primary-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-900">
              Ready to Implement OBE at Your Institution?
            </h3>
            <p className="mb-6 text-navy-700">
              Aveon's OBE-compliant campus ERP platform makes implementation seamless. Let us show you how.
            </p>
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-bold text-white hover:bg-primary-700"
            >
              Request a Demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="mt-12 border-t border-navy-900/10 pt-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl">
              📚
            </div>
            <div>
              <p className="font-bold text-navy-900">Aveon Infotech</p>
              <p className="text-sm text-navy-600">
                Experts in higher education technology and institutional effectiveness
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}