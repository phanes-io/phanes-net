export interface Contribution {
  name: string;
  description: string;
  href: string;
  repo: string; // "owner/repo" displayed as label
}

export interface ProjectLink {
  label: string;
  href: string;
  dimPrefix?: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  details: string;
  links: ProjectLink[];
  githubRepo?: string; // "owner/repo" for last-commit sorting
}

export const projects: Project[] = [
  {
    slug: "solun",
    name: "Solun",
    subtitle: "solun.pm",
    description:
      "Minimal, secure text sharing. End-to-end encrypted or fast encrypted-at-rest — ephemeral by default.",
    details:
      "Solun has two modes. Quick pastes are AES-256-GCM encrypted at rest with a server-side key and deleted after the first read — zero effort for the sender. Secure pastes are end-to-end encrypted in the browser via the Web Crypto API; the decryption key lives only in the URL fragment and is never transmitted to the server. Both modes are burn-after-read by default. The stack is a pnpm monorepo: Next.js 16 frontend, Express + Prisma + PostgreSQL API, deployed via Docker. Available as a hosted service at solun.pm and fully self-hostable under MIT.",
    githubRepo: "solun-pm/solun",
    links: [
      { label: "solun.pm", href: "https://solun.pm", dimPrefix: "→" },
      {
        label: "solun-pm/solun",
        href: "https://github.com/solun-pm/solun",
        dimPrefix: "gh/",
      },
    ],
  },
  {
    slug: "jsde-me",
    name: "jsde.me",
    subtitle: "personal site",
    description: "Personal site and digital identity hub.",
    details:
      "jsde.me is my personal Next.js site and engineering notebook. It brings together articles, projects, social links, and contact information. The site is self-hosted and uses our self-hosted Rybbit instance for cookieless page-view analytics; it is not a site without analytics requests. The privacy information linked from jsde.me explains the data collection.",
    githubRepo: "Jannik-Schroeder/jsde-me",
    links: [
      { label: "jsde.me", href: "https://jsde.me", dimPrefix: "→" },
      { label: "Jannik-Schroeder/jsde-me", href: "https://github.com/Jannik-Schroeder/jsde-me", dimPrefix: "gh/" },
    ],
  },
  {
    slug: "nyxproxy",
    name: "NyxProxy",
    subtitle: "rotating IPv6 proxy",
    description:
      "High-performance Go proxy that assigns a fresh IPv6 address to every request from your own /64 subnet.",
    details:
      "Every hosting provider that gives you a /64 IPv6 subnet hands you 18 quintillion addresses. NyxProxy puts them to work: a pre-populated pool of 200 IPs is kept ready, each replaced after 100 uses or 30 minutes. The result is a different exit IP per request with no coordination overhead. Single-IP proxies get rate-limited, fingerprinted, and blocked. NyxProxy makes each request look like a different user. Written in Go, MIT-licensed, ships with a one-command Debian/Ubuntu installer and a systemd unit. Typical use cases: web scraping without rate limits, multi-user API testing, and privacy-conscious browsing.",
    githubRepo: "phanes-io/nyxproxy-oss",
    links: [
      {
        label: "phanes-io/nyxproxy-oss",
        href: "https://github.com/phanes-io/nyxproxy-oss",
        dimPrefix: "gh/",
      },
    ],
  },
  {
    slug: "sequencessh",
    name: "sequencessh",
    subtitle: "multi-server SSH",
    description: "CLI tool to run a command on multiple SSH servers simultaneously from a single line.",
    details:
      "sqssh reads named server lists from ~/.config/sqssh/config and fans out a single command to every host in the list via SSH, displaying each server's output in sequence. Useful for fleet management, batch deployments, or any situation where you need the same command to run across a group of servers without reaching for a full orchestration tool.",
    githubRepo: "Jannik-Schroeder/sequencessh",
    links: [
      { label: "Jannik-Schroeder/sequencessh", href: "https://github.com/Jannik-Schroeder/sequencessh", dimPrefix: "gh/" },
    ],
  },
  {
    slug: "win11-tsl12-enable",
    name: "win11-tsl12-enable",
    subtitle: "Raspberry Pi Pico",
    description: "Pico-based HID automation to apply the TLS 1.2 registry fix required for Uni-Paderborn certificates on Windows 11.",
    details:
      "Built during my apprenticeship as a helper tool for a former employer. A Raspberry Pi Pico running CircuitPython acts as a USB HID keyboard and executes a Ducky Script payload that applies the Windows registry entry needed to enable TLS 1.2 for Uni-Paderborn user certificates. Plug in, wait half a second, done — no manual steps. A GPIO jumper puts the device into setup mode so you can edit the payload without it triggering on your own machine.",
    githubRepo: "Jannik-Schroeder/win11-tsl12-enable",
    links: [
      { label: "Jannik-Schroeder/win11-tsl12-enable", href: "https://github.com/Jannik-Schroeder/win11-tsl12-enable", dimPrefix: "gh/" },
    ],
  },
  {
    slug: "workflows",
    name: "Workflows",
    subtitle: "reusable CI/CD",
    description: "Shared GitHub Actions workflows — one source of truth for CI/CD across all projects.",
    details:
      "A centralised collection of reusable GitHub Actions workflows. Instead of duplicating pipeline logic across every repo, projects call these workflows directly. Changes propagate everywhere at once, keeping CI/CD consistent and easy to maintain.",
    githubRepo: "Jannik-Schroeder/workflows",
    links: [
      { label: "Jannik-Schroeder/workflows", href: "https://github.com/Jannik-Schroeder/workflows", dimPrefix: "gh/" },
    ],
  },
  {
    slug: "peakmoto",
    name: "PeakMoto",
    subtitle: "motorcycle nav",
    description:
      "Free & open-source motorcycle navigation app — curvy road routing, offline maps, no tracking.",
    details:
      "PeakMoto is a privacy-first motorcycle navigation app built with Flutter. It uses OpenStreetMap for map rendering and BRouter for motorcycle-optimised routing with adjustable curvy-road intensity. Turn-by-turn voice guidance, offline maps, and GPX import/export are built in. All compute-heavy work — routing, rendering, GPX processing — runs on-device; there is no account, no tracking, and no subscription. Touch targets are sized for gloved operation and the dark theme is designed for outdoor readability. Licensed under AGPL-3.0.",
    githubRepo: "phanes-io/peakmoto",
    links: [
      {
        label: "phanes-io/peakmoto",
        href: "https://github.com/phanes-io/peakmoto",
        dimPrefix: "gh/",
      },
    ],
  },
  {
    slug: "commitgen-nvim",
    name: "commitgen.nvim",
    subtitle: "Neovim plugin",
    description:
      "Neovim plugin that generates conventional commit messages from staged changes via OpenAI.",
    details:
      "commitgen.nvim reads your staged diff (git diff --cached) and sends it to OpenAI's chat completions API to generate a conventional commit message. The result appears in an editable floating window inside Neovim — press Enter to commit, Esc to cancel. The entire flow runs asynchronously via vim.fn.jobstart so Neovim never blocks. Supports model selection, language preference, auto-staging, and SSH commit signing with FIDO hardware keys. Built for lazy.nvim, written in pure Lua, MIT-licensed.",
    githubRepo: "Jannik-Schroeder/commitgen.nvim",
    links: [
      { label: "Engineering note: why I built it", href: "/blog/why-i-built-commitgen" },
      {
        label: "Jannik-Schroeder/commitgen.nvim",
        href: "https://github.com/Jannik-Schroeder/commitgen.nvim",
        dimPrefix: "gh/",
      },
    ],
  },
  {
    slug: "omarchy-kurenai-theme",
    name: "omarchy-kurenai-theme",
    subtitle: "color scheme",
    description:
      "Deep crimson color scheme for the Omarchy platform — Neovim, VS Code, Zed, btop, Hyprland, and more.",
    details:
      "A cohesive dark color scheme built around deep crimson and warm amber tones, inspired by Japanese aesthetics. Ships with configurations for Neovim, VS Code, Zed, btop, Obsidian, Hyprland, and Waybar. Colors are managed via a central TOML palette and meet WCAG AA contrast requirements. Includes five matching wallpapers.",
    githubRepo: "Jannik-Schroeder/omarchy-kurenai-theme",
    links: [
      {
        label: "Jannik-Schroeder/omarchy-kurenai-theme",
        href: "https://github.com/Jannik-Schroeder/omarchy-kurenai-theme",
        dimPrefix: "gh/",
      },
    ],
  },
  {
    slug: "phanes-net",
    name: "phanes.net",
    subtitle: "this site",
    description: "Personal project showcase. Minimal client-side JS, fully static, monospace purple.",
    details:
      "The site you're looking at. Built with Next.js 16 App Router, React Server Components, and Tailwind CSS v4. Client-side JavaScript is limited to two animation components — the ASCII art typewriter on the home page and the twinkling star effect on the blog. Everything else is statically rendered: no database, no CMS, no tracking. Blog powered by MDX files in the repo. Projects sorted by last GitHub commit via the GitHub API with 6-hour ISR revalidation.",
    githubRepo: "phanes-io/phanes-net",
    links: [
      { label: "phanes.net", href: "https://phanes.net", dimPrefix: "→" },
      { label: "phanes-io/phanes-net", href: "https://github.com/phanes-io/phanes-net", dimPrefix: "gh/" },
    ],
  },
];

// Alphabetically sorted by name — add entries here as needed
export const contributions: Contribution[] = [
  {
    name: "Plunk",
    description: "Open-source email platform on AWS SES — transactional emails, campaigns, workflows, and analytics.",
    href: "https://github.com/useplunk/plunk",
    repo: "useplunk/plunk",
  },
];
