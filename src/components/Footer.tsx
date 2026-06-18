import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#", // TODO: add LinkedIn URL
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#", // TODO: add X/Twitter URL
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#", // TODO: add GitHub URL
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:charles.csz@hotmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e4e4e7] mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Brand */}
          <div>
            <p
              className="text-sm font-semibold text-[#09090b] mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Charles Chua
            </p>
            <p className="text-xs text-[#71717a]">
              Product Manager · Singapore
            </p>
          </div>

          {/* Nav + socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* Nav links */}
            <nav className="flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[#71717a] hover:text-[#09090b] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="text-[#71717a] hover:text-[#2563eb] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#71717a]">
          <span>© {new Date().getFullYear()} Charles Chua. All rights reserved.</span>
          <a
            href="mailto:charles.csz@hotmail.com"
            className="hover:text-[#2563eb] transition-colors duration-200"
          >
            charles.csz@hotmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
