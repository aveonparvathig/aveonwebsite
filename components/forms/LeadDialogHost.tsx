"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import type { LeadTab } from "@/components/forms/LeadDialog";

const loadDialog = () => import("@/components/forms/LeadDialog");
const LeadDialog = dynamic(loadDialog, { ssr: false });

/** The contact-page link, if this event happened on one. */
function contactLink(event: Event): HTMLAnchorElement | null {
  const target = event.target as Element | null;
  const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (!link || link.dataset.leadPopup === "off") return null;
  return /^\/contact(?:[?#]|$)/.test(link.getAttribute("href") ?? "") ? link : null;
}

/**
 * Mounted once in the site layout. Every "Book a Demo" and "Contact" button on
 * the site is a plain link to /contact, and this turns a normal click on any of
 * them into the enquiry popup instead of a page change:
 *   /contact#demo            -> Book a Demo tab
 *   /contact, /contact?...   -> Send a Message tab (a `subject` value is kept)
 * The links stay real links, so crawlers, new-tab clicks and visitors without
 * JavaScript still reach the contact page, and a link added on a new page needs
 * no wiring. On the contact page itself the forms are already there, so clicks
 * are left alone. Links marked data-lead-popup="off" (the menu and footer
 * "Contact" items) always go to the contact page.
 */
export default function LeadDialogHost() {
  const pathname = usePathname();
  const { trackEvent } = useAnalytics();
  // The popup code (both forms and their validation) loads on first use only.
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<LeadTab>("demo");
  const [subject, setSubject] = useState<string | undefined>(undefined);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = contactLink(event);
      if (!link || link.hasAttribute("download")) return;
      if (link.target && link.target !== "_self") return;
      if (window.location.pathname === "/contact") return;

      // Runs in the capture phase, ahead of next/link's own handler, which
      // skips its navigation once the event is default-prevented.
      event.preventDefault();

      const url = new URL(link.href, window.location.origin);
      const nextTab: LeadTab = url.hash === "#demo" ? "demo" : "message";
      setTab(nextTab);
      setSubject(url.searchParams.get("subject") ?? undefined);
      setLoaded(true);
      setOpen(true);
      trackEvent("lead_popup_open", { tab: nextTab, page: window.location.pathname });
    }

    // Fetch the popup code as soon as a visitor points at or touches a contact
    // link, so it is ready by the time they click.
    function warm(event: Event) {
      if (!contactLink(event)) return;
      void loadDialog();
      document.removeEventListener("pointerover", warm);
      document.removeEventListener("touchstart", warm);
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("pointerover", warm, { passive: true });
    document.addEventListener("touchstart", warm, { passive: true });
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("pointerover", warm);
      document.removeEventListener("touchstart", warm);
    };
  }, [trackEvent]);

  if (!loaded) return null;

  return (
    <LeadDialog
      open={open}
      tab={tab}
      onTabChange={setTab}
      onClose={() => setOpen(false)}
      pageProduct={pathname.match(/^\/products\/([^/]+)/)?.[1]}
      defaultSubject={subject}
    />
  );
}
