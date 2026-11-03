"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

const INTERACTION_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

// Keeps the ~77KB chat bundle out of the initial load: it mounts once the
// browser is idle or the visitor first interacts, whichever comes first.
export default function LazyChatWidget() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;
    const activate = () => setReady(true);

    const hasIdle = typeof window.requestIdleCallback === "function";
    const id = hasIdle
      ? window.requestIdleCallback(activate, { timeout: 4000 })
      : window.setTimeout(activate, 3000);

    INTERACTION_EVENTS.forEach((e) =>
      window.addEventListener(e, activate, { once: true, passive: true }),
    );

    return () => {
      if (hasIdle) window.cancelIdleCallback(id);
      else window.clearTimeout(id);
      INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, activate));
    };
  }, [ready]);

  return ready ? <ChatWidget /> : null;
}
