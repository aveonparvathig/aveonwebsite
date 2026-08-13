import { siteConfig } from "@/lib/constants";
import SocialIcon from "@/components/ui/SocialIcons";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: "linkedin" },
  { label: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { label: "X", href: siteConfig.social.twitter, icon: "twitter" },
  { label: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
];

export default function TopBar() {
  return (
    <div className="bg-primary-600 text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-primary-100"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden items-center gap-2 hover:text-primary-100 sm:flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {siteConfig.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-6 w-6 items-center justify-center rounded bg-white/15 hover:bg-white/30"
            >
              <SocialIcon name={s.icon} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
