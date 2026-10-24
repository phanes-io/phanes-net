import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {canonical:"https://phanes.net/legal"},
  title: "Legal Notice — phanes.net",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0f",
        padding: "3rem 1.5rem",
        maxWidth: "640px",
        margin: "0 auto",
        fontFamily: "var(--font-mono)",
      }}
    >
      <nav style={{ marginBottom: "2.5rem" }}>
        <Link
          href="/"
          style={{
            color: "#7c3aed",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
          }}
        >
          ← phanes.net
        </Link>
      </nav>

      <h1
        style={{
          color: "#e2e8f0",
          fontSize: "1rem",
          fontWeight: "700",
          letterSpacing: "0.08em",
          marginBottom: "2rem",
          textTransform: "uppercase",
        }}
      >
        Legal Notice
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          color: "#94a3b8",
          fontSize: "0.8125rem",
          lineHeight: "1.7",
        }}
      >
        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Information pursuant to § 5 TMG
          </h2>
          <p>Jannik Schröder</p>
          <p style={{ color: "#64748b", fontStyle: "italic" }}>
            [Address available on request]
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: "#1a1a26" }} />

        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Contact
          </h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:hello@phanes.net"
              style={{ color: "#a78bfa" }}
            >
              hello@phanes.net
            </a>
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: "#1a1a26" }} />

        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Disclaimer
          </h2>
          <p>
            The content of this site has been compiled with the utmost care.
            However, no guarantee can be given for the accuracy, completeness,
            or timeliness of the information provided.
          </p>
        </section>

        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            External Links
          </h2>
          <p>
            This website contains links to external third-party websites over
            whose content we have no control. The respective provider or
            operator of those pages is always responsible for their content.
          </p>
        </section>
      </div>

      <footer
        style={{
          marginTop: "3rem",
          paddingTop: "1rem",
          borderTop: "1px solid #1a1a26",
        }}
      >
        <span style={{ color: "#64748b", fontSize: "0.75rem" }}>
          phanes.net
        </span>
      </footer>
    </div>
  );
}
