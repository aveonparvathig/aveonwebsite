import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aveon Infotech collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-6 leading-relaxed text-navy-700">
          <p>
            This website collects personal information only when you submit it
            through our contact or demo booking forms — typically your name,
            email address, phone number and institution.
          </p>
          <p>
            We use this information solely to respond to your enquiry, schedule
            demos and share relevant product information. We do not sell or
            rent your personal information to third parties.
          </p>
          <p>
            For any privacy-related questions or to request deletion of your
            data, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary-600">
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="text-sm text-navy-500">
            Note: This is placeholder policy text for the new website build —
            replace with your legal team&apos;s approved policy before launch.
          </p>
        </div>
      </section>
    </>
  );
}
