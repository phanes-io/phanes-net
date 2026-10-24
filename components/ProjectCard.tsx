interface ProjectLink {
  label: string;
  href: string;
  dimPrefix?: string;
}

interface ProjectCardProps {
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  links: ProjectLink[];
  lastUpdated?: string | null;
}

export default function ProjectCard({
  slug,
  name,
  subtitle,
  description,
  links,
  lastUpdated,
}: ProjectCardProps) {
  return (
    <article
      className="project-card"
      style={{
        borderLeft: "1px solid #1e1b2e",
        paddingLeft: "1rem",
        paddingTop: "0.125rem",
        paddingBottom: "0.25rem",
        transition: "border-color 0.2s ease",
      }}
    >
      <div style={{ marginBottom: "0.3rem", display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
        <span
          style={{
            color: "#e2e8f0",
            fontWeight: "600",
            fontSize: "0.8125rem",
            letterSpacing: "0.03em",
            fontFamily: "var(--font-mono)",
          }}
        >
          {name}
        </span>
        {subtitle && (
          <span
            style={{
              color: "#475569",
              fontSize: "0.72rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      <p
        style={{
          color: "#64748b",
          fontSize: "0.78rem",
          lineHeight: "1.6",
          marginBottom: "0.6rem",
          fontFamily: "var(--font-mono)",
        }}
      >
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0 1.25rem", alignItems: "baseline", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0 1.25rem" }}>
        {links.map((link) => (
          <span key={link.href} style={{ display: "inline-flex", alignItems: "baseline", gap: "0.2rem" }}>
            {link.dimPrefix && (
              <span
                style={{
                  color: "#334155",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                }}
              >
                {link.dimPrefix}
              </span>
            )}
            <a
              href={link.href}
              target={link.href.startsWith("/") ? undefined : "_blank"}
              rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
              data-rybbit-event={link.href.startsWith("https://github.com/") ? "repository_link_clicked" : "project_link_clicked"}
              data-rybbit-prop-project={slug}
              style={{
                color: "#7c3aed",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.02em",
                transition: "color 0.15s ease",
              }}
            >
              {link.label}
            </a>
          </span>
        ))}
        </div>
        {lastUpdated && (
          <span style={{ color: "#1e293b", fontSize: "0.68rem", fontFamily: "var(--font-mono)", letterSpacing: "0.03em", whiteSpace: "nowrap" }}>
            {lastUpdated}
          </span>
        )}
      </div>
    </article>
  );
}
