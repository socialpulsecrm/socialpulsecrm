# Social Pulse — Marketing Site & Landing Page

The official public landing page for **[Social Pulse](https://socialpulsecrm.com)** — the all-in-one AI social media management platform for creators, brands, and agencies.

> Plan, publish, engage, and grow across **13 platforms** — powered by **36 specialized AI agents** that write, schedule, reply, audit, and negotiate for you.

Served as a fast, zero-dependency, SEO-optimized **static site** via **GitHub Pages** on the custom domain `socialpulsecrm.com`.

---

## What Social Pulse Delivers

- **13 Supported Platforms**: Instagram, YouTube, TikTok, X (Twitter), LinkedIn, Threads, Bluesky, Facebook Pages, Facebook Groups, Pinterest, Reddit, Mastodon, and Google Business (plus WhatsApp & Email in the unified inbox).
- **36 Specialized AI Agents** across 4 suites:
  1. **Content & Studio (8 agents)**: Content Generator, Scheduling Optimizer, Creative Studio, Image Generator, Link-in-Bio Co-pilot, Memory-Grounded Writer (RAG), Strategy Planner, Hashtag Assistant.
  2. **Insights & Intelligence (7 agents)**: Analytics Insights, Trend Detection, Growth Copilot, Social Listening, Competitive Intelligence, Strategy Researcher, Post Analyser.
  3. **Engagement & Community (6 agents)**: Engagement Assistant, Collaboration Assistant, Automation Suggestions, Inbox Intent Classifier, Inbox FAQ Responder, Inbox Sentiment Classifier.
  4. **Campaigns & Matching (15 agents)**: Campaign Strategist, Sequence Writer, Outreach Reply Triage, Content Compliance Reviewer (FTC disclosure & brand safety), Usage Rights & Whitelisting Advisor, Creator Rate Advisor, Campaign Forecast, Report Narrative Generator, Discovery Copilot, Campaign Autopilot, Creator Matching, Agreement Reviewer, Paid Media Advisor, Paid Media Flight Doctor, Publishing Assistant.
  - **Pulse Copilot Reasoning Loop**: Autonomous multi-step tool-chaining engine that orchestrates multiple agents to execute complete workflows.
- **Enterprise Governance**: Multi-stage **Maker-Checker approval workflows** and a dedicated **Post Deletion Approval Gate** to safeguard brand reputation.
- **Agency Cockpit**: A single subscription covers **unlimited client workspaces** with isolated client channels, permissions, and admin impersonation.
- **Flexible Burst Allowances**: Weekly refills for Free accounts and monthly allowances for paid tiers to enable campaign burst weeks without mid-day throttling.

---

## Directory Structure

```
.
├── index.html            # Primary landing page (single file for crawlability & SEO)
├── 404.html              # Branded 404 not-found page
├── contact/index.html    # Contact & help page (mailto form)
├── privacy/index.html    # Privacy Policy & AI data governance
│   └── deletion/index.html # Meta & Facebook Data Deletion Instructions
├── terms/index.html      # Terms of Service & Maker-Checker rules
├── css/                  # Modular stylesheets
│   ├── tokens.css        #   Design tokens & CSS variables
│   ├── base.css          #   Reset, typography & layout helpers
│   ├── buttons.css       #   Button variants
│   ├── nav.css           #   Sticky nav & responsive mobile menu
│   ├── hero.css          #   Hero, trust pills & product mock
│   ├── features.css      #   Core pillars & feature deep dives
│   ├── ai.css            #   36 agent showcase, suite tabs & Copilot callout
│   ├── audience.css      #   Creator, Brand & Agency pain-point cards
│   ├── pricing.css       #   Pricing toggles (USD/INR, Mo/Yr) & plan cards
│   ├── faq.css           #   Accordion FAQ
│   ├── footer.css        #   CTA banner & footer navigation
│   └── legal.css         #   Legal & contact page formatting
├── js/                   # Vanilla ES modules
│   ├── main.js           #   Entry point
│   ├── nav.js            #   Navigation & mobile drawer
│   ├── pricing.js        #   USD/INR, Monthly/Yearly, and Plan switcher
│   ├── ai-showcase.js    #   Interactive 36-agent category filter
│   ├── faq.js            #   Accordion interaction
│   ├── reveal.js         #   IntersectionObserver scroll reveals
│   └── contact.js        #   Contact mailto helper
├── assets/
│   ├── favicon.svg       # Brand favicon mark
│   ├── favicon-*.png     # PWA / webmanifest icon sizes
│   └── og-image.svg      # Open Graph social preview (1200x630)
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── CNAME                 # socialpulsecrm.com
```

---

## Local Development

No build step or Node dependencies required. Serve directly with any static server:

```bash
# Using Python
python3 -m http.server 8080

# Or using Node / npx
npx serve .
```

Then visit `http://localhost:8080`.

---

## Deployment & Hosting

- **Continuous Deployment**: Pushing commits to `origin/main` automatically deploys via GitHub Pages.
- **Custom Domain**: `CNAME` maintains DNS mapping to `socialpulsecrm.com`.
- **App Portal Link**: CTAs redirect to `https://app.socialpulsecrm.com`.

---

## Compliance & Security

- **Encryption**: OAuth credentials encrypted at rest with AES-256-GCM.
- **AI Privacy**: Customer private posts and messages are never used to train public foundational LLM models.
- **Standards**: Structured JSON-LD (`SoftwareApplication`, `FAQPage`, `Organization`), Meta Graph API data deletion callback compliance, and strict multi-tenant isolation.
