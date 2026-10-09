import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy - Aveon CMS Mobile App",
  alternates: { canonical: "/campus-management-system-privacy-policy.html" },
};

const h2Class = "mt-10 text-2xl font-extrabold text-navy-900";
const h3Class = "mt-6 text-lg font-bold text-navy-900";
const ulClass = "mt-3 list-disc space-y-1.5 pl-6";

export default function CmsPrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy for Aveon CMS Mobile App" compact />
      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="space-y-4 leading-relaxed text-navy-700">
          <p>
            <strong className="text-navy-900">Effective Date:</strong> 09/09/2024
          </p>
          <p>
            Aveon Infotech Pvt. Ltd. (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy and ensuring that your personal information is secure when you use the Aveon CMS mobile application (the &quot;App&quot;). This Privacy Policy outlines the information we collect, how we use it, and the measures we take to ensure your data is safe.
          </p>

          <h2 className={h2Class}>1. Information We Collect</h2>
          <p>We collect and process the following types of information when you use the Aveon CMS mobile app:</p>

          <h3 className={h3Class}>a. Personal Information</h3>
          <p>We may collect personal details that you voluntarily provide when using the App, such as:</p>
          <ul className={ulClass}>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Institution details</li>
            <li>Login credentials (username, password)</li>
          </ul>

          <h3 className={h3Class}>b. Usage Data</h3>
          <p>We collect data on how the app is used, including:</p>
          <ul className={ulClass}>
            <li>Device information (type, operating system, unique device identifiers)</li>
            <li>App interaction (features used, time spent on the app)</li>
            <li>Log data (IP address, browser type, and access times)</li>
          </ul>

          <h3 className={h3Class}>c. Location Data</h3>
          <p>If enabled, the app may collect location data to provide location-based features.</p>

          <h3 className={h3Class}>d. Cookies and Similar Technologies</h3>
          <p>We may use cookies or similar technologies to collect information on your interactions with the app and to enhance user experience.</p>

          <h2 className={h2Class}>2. How We Use Your Information</h2>
          <p>We use the collected data for various purposes, including:</p>
          <ul className={ulClass}>
            <li>To operate and maintain the App</li>
            <li>To authenticate users and manage accounts</li>
            <li>To personalize the user experience and improve app functionality</li>
            <li>To communicate with users about updates, features, and technical issues</li>
            <li>To respond to inquiries or provide customer support</li>
            <li>To analyze and monitor usage to improve the app’s performance</li>
            <li>To ensure compliance with legal obligations and security purposes</li>
          </ul>

          <h2 className={h2Class}>3. Data Sharing and Disclosure</h2>
          <p>We do not sell or rent your personal information. However, we may share your data under the following circumstances:</p>
          <ul className={ulClass}>
            <li>
              <strong className="text-navy-900">With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer support.
            </li>
            <li>
              <strong className="text-navy-900">With Educational Institutions:</strong> If you are associated with an educational institution using Aveon CMS, your data may be shared with authorized representatives of that institution.
            </li>
            <li>
              <strong className="text-navy-900">For Legal Requirements:</strong> We may disclose your personal information if required to do so by law, regulation, or governmental request, or to protect our legal rights and interests.
            </li>
          </ul>

          <h2 className={h2Class}>4. Data Security</h2>
          <p>
            We take the security of your data seriously and implement appropriate technical and organizational measures to protect your information. This includes encryption, secure servers, and limited access to personal data. However, no method of transmission over the internet or mobile network is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className={h2Class}>5. Retention of Data</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Once this information is no longer required, we will securely delete or anonymize it.
          </p>

          <h2 className={h2Class}>6. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul className={ulClass}>
            <li>
              <strong className="text-navy-900">Access:</strong> You can request access to your personal information and obtain a copy.
            </li>
            <li>
              <strong className="text-navy-900">Correction:</strong> You can request the correction of inaccurate or incomplete information.
            </li>
            <li>
              <strong className="text-navy-900">Deletion:</strong> You may request that we delete your personal data under certain conditions.
            </li>
            <li>
              <strong className="text-navy-900">Withdrawal of Consent:</strong> You can withdraw your consent for data collection and processing at any time, but this may limit your ability to use some features of the App.
            </li>
          </ul>
          <p>To exercise any of these rights, please contact us at [Insert Contact Email].</p>

          <h2 className={h2Class}>7. Children&apos;s Privacy</h2>
          <p>
            The Aveon CMS mobile app is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.
          </p>

          <h2 className={h2Class}>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Effective Date&quot; at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
          </p>

          <h2 className={h2Class}>9. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
          <address className="not-italic">
            Aveon Infotech Pvt. Ltd.
            <br />
            No.33, Kathir Avenue, Andal Street, Hope College, Peelamedu, Coimbatore - 641004.
            <br />
            Phone: 8754006483
            <br />
            Email:{" "}
            <a href="mailto:ceo@aveoninfotech.com" className="font-semibold text-primary-600 hover:text-primary-700">
              ceo@aveoninfotech.com
            </a>
          </address>
          <p>By using the Aveon CMS mobile app, you agree to this Privacy Policy.</p>
        </div>
      </section>
    </>
  );
}
