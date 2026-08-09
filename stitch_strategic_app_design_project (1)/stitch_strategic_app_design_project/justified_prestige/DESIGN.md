---
name: Justified Prestige
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#331200'
  on-tertiary-container: '#cf6721'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  premium-gold: '#D97706'
  success-green: '#059669'
  error-red: '#DC2626'
  member-tag-bg: '#EFF6FF'
  member-tag-text: '#1E40AF'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  status-badge:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  max-width: 1200px
---

## Brand & Style

The design system is built on the core philosophy of **"Objective Authority."** Since the platform serves as a "shield" for general managers—providing clear, evidence-based justifications (명분) for their decisions to peers—the visual language must prioritize trust, transparency, and systematic precision.

The chosen style is **Corporate / Modern** with a focus on **Information Hierarchy**. It utilizes a clean, professional aesthetic that balances B2B stability with the exclusivity of a private club. The interface is characterized by generous whitespace, a structured grid, and high-contrast typography that makes complex data (budgets, schedules, member tags) easy to scan. It avoids "decorative" elements in favor of functional clarity, ensuring the user feels in control of an automated, high-stakes process.

**Key Visual Principles:**
- **Clarity over Ornament:** Every border and shadow serves to define a relationship between data points.
- **Evidence-Based UI:** Specific tags and "reasoning labels" are visually prioritized to support the "justification" narrative.
- **Efficient Switching:** The architecture supports rapid transitions between multiple meeting profiles without losing context.

## Colors

The palette is anchored by **Deep Navy (#0F172A)**, representing institutional trust and professional rigor. This primary color is used for headings, primary navigation, and core brand elements.

**Refined Blue (#2563EB)** serves as the secondary color, driving functional interactions, automated status indicators, and call-to-action buttons. It signals movement and system intelligence.

**Premium Gold (#B45309)** is used sparingly as a tertiary accent to highlight exclusivity, such as "Member-owned Stores" (회원사 매장) or "Priority Reservations" (우대예약). This ensures these high-value items stand out without compromising the professional tone.

The **Neutral palette (#F8FAFC)** provides a clean, breathable canvas. Backgrounds should remain light to ensure that "Status Badges" and "Member Tags" are immediately legible. For semantic feedback, use **Success Green** for confirmed reservations and **Error Red** for billing failures or late responses.

## Typography

This system uses a tiered font strategy to balance approachability with technical precision. 

**Plus Jakarta Sans** is used for headlines to provide a modern, welcoming, yet professional tone. Its clean geometric structure ensures that page titles like "Multi-Meeting Hub" feel organized.

**Inter** is the primary workhorse for body text and interface elements. Its high legibility at small sizes is critical for reading "Match Reasons" and restaurant descriptions.

**JetBrains Mono** is utilized for metadata and data-driven labels, such as D-Day counters (D-14), currency values, and timestamps. This monospaced choice reinforces the "automated" and "systematic" nature of the platform, signaling that the information is calculated and objective.

- **Scale:** On mobile, reduce H1 sizes to maintain information density.
- **Hierarchy:** Use FontWeight 600 (Semi-bold) for section headers to distinguish them from the supporting body text.

## Layout & Spacing

The design system employs a **Fixed Grid** on desktop and a **Fluid Grid** on mobile. The spacing rhythm is strictly based on a **4px/8px baseline**, ensuring a consistent vertical cadence across complex data lists.

**Layout Model:**
- **Desktop (1200px+):** A 12-column grid with 24px gutters. Content is centered. Sidebars for "Multi-Meeting Hub" switching should be pinned or accessible via a persistent top-tier navigation.
- **Tablet (768px - 1199px):** 8-column grid with 16px gutters and margins. Card layouts transition from horizontal to stacked if the "Match Reason" text overflows.
- **Mobile (<767px):** Single column fluid layout with 16px side margins. Horizontal scrolling is permitted for "Quick-Switch Tabs" at the top of the screen to allow managers to jump between groups easily.

**Spacing Rhythm:**
- Use `gutter-lg` (24px) for separating major sections (e.g., separating "Attendance Status" from "Restaurant Recommendations").
- Use `gutter-sm` (8px) for internal card padding and grouping related labels.

## Elevation & Depth

To maintain a professional, "software-as-a-service" feel, the system uses **Tonal Layers** combined with **Ambient Shadows**. This creates a hierarchy that feels grounded and organized rather than floating or ethereal.

- **Level 0 (Background):** Slate-50 (#F8FAFC). The foundational canvas.
- **Level 1 (Cards/Containers):** Pure White (#FFFFFF) with a 1px solid border (#E2E8F0). No shadow. This is used for standard restaurant list items and profile cards.
- **Level 2 (Active/Interactive):** Pure White with a soft, diffused shadow (Blur: 12px, Y: 4px, Color: rgba(15, 23, 42, 0.08)). Used for the "Selected Candidate" or the active meeting hub card.
- **Level 3 (Overlays/Modals):** High-diffuse shadow (Blur: 24px, Y: 12px, Color: rgba(15, 23, 42, 0.12)). Used for approval modals and the "Handoff Process" (인계) interface.

**Outlines:** Use 1px low-contrast outlines for all input fields and inactive states to maintain a flat, structured look.

## Shapes

The shape language is **Rounded (Level 2)**, conveying a modern and approachable feel while maintaining professional boundaries. 

- **Primary Cards/Containers:** 0.5rem (8px). This provides enough softness to be user-friendly without appearing "playful" or consumer-grade.
- **Interactive Elements (Buttons/Inputs):** 0.5rem (8px).
- **Status Badges & Tags:** Full Pill (rounded-xl / 1.5rem). Labels like "Member-operated" or "Confirmed" should always be pill-shaped to distinguish them from actionable buttons and structural cards.

## Components

**Buttons**
- **Primary:** Deep Navy background, White text. High-contrast for final confirmations like "Return Confirmation" (복귀 확인).
- **Secondary:** White background, 1px Navy border. Used for "Copy Notice" (복사하기).
- **Tertiary:** Transparent background, Blue text. Used for "View Detail" or "Change Criteria."

**Cards (The "Evidence" Card)**
- Must feature a dedicated slot for "Match Reason" tags at the bottom.
- Top-right corner reserved for "Member-owned" gold badges.
- Use a clear horizontal split between restaurant imagery and the "Why this restaurant?" data block.

**Status Indicators**
- **Badges:** Use small, high-contrast text (label-mono) inside pill shapes. 
- **Progress Stepper:** A thin horizontal line with circles for "Request > Confirmed > Completed." The active step is Blue; completed steps are Navy; pending steps are Light Grey.

**Multi-Meeting Hub (Switcher)**
- A persistent top tab bar or a floating sidebar.
- Each item displays the Group Name and a "D-Day" badge (e.g., D-14) in the corner to highlight urgency.

**Inputs & Modals**
- Inputs use a 1px Slate-200 border, turning Blue on focus.
- Modals for "Handoff" must include a "Progressive Disclosure" pattern, showing step-by-step instructions for the transition of authority.