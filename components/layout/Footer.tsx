import { SITE } from "@/lib/data/site";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact-footer" className="border-t border-obsidian-line bg-obsidian">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-bone">
              Moosavi<span className="text-ledger-400">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone-muted">
              {SITE.bio.short}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: SITE.social.github, icon: Github, label: "GitHub" },
                { href: SITE.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: SITE.social.twitter, icon: Twitter, label: "X (Twitter)" },
                { href: `mailto:${SITE.social.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  data-cursor-hover
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-bone-muted transition-colors hover:text-ledger-400"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Reach</p>
            <ul className="mt-4 space-y-2 text-sm text-bone-muted">
              <li>
                <a href={`mailto:${SITE.social.email}`} className="hover:text-bone">
                  {SITE.social.email}
                </a>
              </li>
              <li>
                <a href={SITE.social.whatsapp} className="hover:text-bone" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>{SITE.location.city}, {SITE.location.region}, {SITE.location.country}</li>
              <li>Mon–Sat · 9 AM – 7 PM IST</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-bone-muted">
              <li className="text-bone">{SITE.company}</li>
              <li>{SITE.role}</li>
              <li>
                <a href="https://shalimoosavi.github.io/SAYANJALI_NEXUS/" className="hover:text-bone" target="_blank" rel="noreferrer">
                  Company site ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-obsidian-line pt-6 font-mono text-xs uppercase tracking-wide text-bone-faint md:flex-row md:items-center">
          <span>© {year} {SITE.company} · All rights reserved</span>
          <span>Designed &amp; built by {SITE.name}</span>
        </div>
      </div>
    </footer>
  );
}
