import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 space-y-4"
    >
      <h2
        id="contact-heading"
        className="text-xs font-mono uppercase tracking-[0.18em] text-[#e2e8f0]"
      >
        Contact
      </h2>
      <p className="max-w-2xl text-sm text-[#e2e8f0]">
        Ready to collaborate or want to learn more about my work? Reach out via
        email or connect on GitHub and LinkedIn.
      </p>
      <div className="flex flex-wrap gap-2 text-sm">
        {profile.socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target={link.id === "email" ? undefined : "_blank"}
            rel={link.id === "email" ? undefined : "noreferrer"}
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-[#e2e8f0] transition hover:border-slate-500 hover:opacity-90"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

