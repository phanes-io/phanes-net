# Next.js security update — 22 October 2026

Updates Next.js and its ESLint configuration to 16.4.2, React/React DOM to 19.2.9, and direct Sharp dependencies to 0.35.5. Lockfiles include compatible dependency security fixes. Obsolete Node runtime images are moved to Node 22 LTS where applicable.

References: https://nextjs.org/blog/nextjs-security-update-october-14-2026 and https://github.com/vercel/next.js/security/advisories.

Validation: production build, TypeScript and applicable existing tests passed. Headless desktop and mobile E2E navigation, interactive flows and browser error checks passed. Runtime dependency audit reports zero vulnerabilities. Full audit findings in the development lint/tooling dependency chain remain; no forced framework downgrade or audit suppression was applied. No application authentication, schema, environment-variable or payment behavior was changed.
