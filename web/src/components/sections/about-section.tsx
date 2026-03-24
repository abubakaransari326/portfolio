const aboutLinkClass =
  "font-medium text-[#e2e8f0] transition-colors hover:text-[#5EEAD5]";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 space-y-3">
      <h2
        id="about-heading"
        className="text-xs font-mono uppercase tracking-[0.18em] text-[#e2e8f0] lg:hidden"
      >
        About
      </h2>
      <div className="max-w-2xl space-y-4 text-pretty text-sm text-[#94a3b8] sm:text-base">
        <p>
          I&apos;m a full-stack software engineer with 4+ years of experience
          building production-ready applications across frontend and backend
          systems. I specialize in designing APIs, database-driven applications,
          and modern web interfaces using Java, Spring Boot, JavaScript, and
          Vue.js. I enjoy working at the intersection of product and engineering,
          where clear requirements meet robust, maintainable code.
        </p>
        <p>
          Currently, I&apos;m an MS student in Computer Science at{" "}
          <a
            href="https://www.stevens.edu/"
            className={aboutLinkClass}
            target="_blank"
            rel="noreferrer"
          >
            Stevens Institute of Technology
          </a>{" "}
          and a{" "}
          <a
            href="https://us.fulbrightonline.org/"
            className={aboutLinkClass}
            target="_blank"
            rel="noreferrer"
          >
            Fulbright Scholar
          </a>
          , deepening my foundation in system design, databases, and scalable
          architectures. In parallel, I&apos;m actively exploring ML/AI through
          coursework in NLP, deep learning, and computer vision.
        </p>
        <p>
          Previously, I&apos;ve worked in enterprise software and fintech—at{" "}
          <a
            href="https://nakisa.com/"
            className={aboutLinkClass}
            target="_blank"
            rel="noreferrer"
          >
            Nakisa Inc.
          </a>
          , I led the migration of a shared analytics platform from Vue.js 2 to
          Vue.js 3, modernizing the frontend architecture across multiple
          applications and building dynamic configuration systems with
          JSON Patch-based deltas. At{" "}
          <a
            href="https://ubldigital.com/"
            className={aboutLinkClass}
            target="_blank"
            rel="noreferrer"
          >
            United Bank Limited
          </a>
          , I automated mission-critical workflows, developed integration APIs
          for core banking systems, and designed scalable message flows in a
          high-compliance environment. These experiences have shaped how I think
          about building systems that are both well-architected and practical to
          ship.
        </p>
      </div>
    </section>
  );
}
