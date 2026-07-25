"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// A collapsible reveal for the secondary project rows. The featured work stays
// visible; everything else lives behind this so the page opens light and the
// reader chooses to go deeper.
export default function CollapsibleRows({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  // Clip only while animating height. Once open and settled, release overflow so
  // each row's hover wash (which bleeds -1rem left/right) renders exactly like
  // the featured rows above, instead of being clipped by the animation box.
  const [clip, setClip] = useState(true);
  const noun = count === 1 ? "project" : "projects";

  return (
    <div>
      {/* Revealed rows continue the work list directly, so they read as part of
          the section rather than a separate block below the toggle. */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="rows"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setClip(false)}
            style={{ overflow: clip ? "hidden" : "visible" }}
          >
            <div className="flex flex-col">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setClip(true); // clip while the height animates, both opening and closing
          setOpen((o) => !o);
        }}
        aria-expanded={open}
        className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card/60 py-3.5 text-sm font-medium text-muted hover:text-foreground hover:border-accent/30 transition-colors duration-300"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <span>{open ? "Show fewer" : `Show ${count} more ${noun}`}</span>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
