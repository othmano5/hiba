---
name: Hiba Khaled Al-Zein — Developer Portfolio
description: A bilingual personal software studio for an illustrative university portfolio.
colors:
  bg: "#fbfafe"
  surface: "#fff"
  surface-alt: "#f3effa"
  text: "#252234"
  muted: "#6c6379"
  accent: "#7047ce"
  accent-hover: "#6641c5"
  accent-soft: "#eee8fc"
  line: "#eae6f0"
  green: "#2b7259"
  dark-bg: "#18161f"
  dark-surface: "#201d29"
  dark-surface-alt: "#292333"
  dark-text: "#f1edf8"
  dark-muted: "#b6adc6"
  dark-accent: "#b599ff"
  dark-accent-hover: "#c5aeff"
  dark-accent-soft: "#342a49"
  dark-line: "#35303e"
  dark-green: "#7ac6a5"
  dark-primary-ink: "#1e142d"
  dark-filter-ink: "#20132f"
  invalid-border: "#ba445d"
  error-text: "#a72d48"
  dark-error-text: "#ff9fb0"
typography:
  display:
    fontFamily: "Alexandria, Manrope, sans-serif"
    fontSize: "clamp(2.1rem, 3.4vw, 3.3rem)"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0"
  headline:
    fontFamily: "Alexandria, Manrope, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 600
    lineHeight: 1.7
    letterSpacing: "0"
  title:
    fontFamily: "Alexandria, Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.85
  body:
    fontFamily: "Alexandria, Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
  body-en:
    fontFamily: "Manrope, Alexandria, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Alexandria, Manrope, sans-serif"
    fontSize: ".875rem"
    fontWeight: 500
    lineHeight: 1.85
  label-latin:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".75rem"
    fontWeight: 500
    lineHeight: "normal"
  field:
    fontFamily: "Alexandria, Manrope, sans-serif"
    fontSize: ".875rem"
    fontWeight: 400
    lineHeight: 1.9
  code:
    fontFamily: "Consolas, monospace"
    fontSize: ".875rem"
    fontWeight: 400
    lineHeight: 2.1
rounded:
  surface: "16px"
  floating: "12px"
  control: "9px"
  field: "8px"
  filter: "7px"
  tag: "5px"
  round: "50%"
spacing:
  inline-small: "7px"
  control-gap: "10px"
  action-gap: "12px"
  field-column-gap: "15px"
  control-block: "11px"
  control-inline: "22px"
  gallery-column-gap: "26px"
  gallery-row-gap: "30px"
  container-inline: "62px"
  section-top: "84px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "11px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-dark:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-primary-ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "11px 22px"
  button-outline-hover:
    backgroundColor: "{colors.surface-alt}"
  icon-button:
    backgroundColor: "transparent"
    rounded: "{rounded.control}"
    height: "40px"
    width: "40px"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.field}"
    rounded: "{rounded.field}"
    padding: "11px 13px"
  nav-link:
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  nav-link-active:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.filter}"
    padding: "8px 19px"
  filter-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
  filter-active-dark:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-filter-ink}"
  project-tech:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.muted}"
    typography: "{typography.label-latin}"
    rounded: "{rounded.tag}"
    padding: "5px 8px"
  project-card:
    rounded: "{rounded.surface}"
    padding: "0"
  floating-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.floating}"
    padding: "12px 18px"
---

# Design System: Hiba Khaled Al-Zein — Developer Portfolio

## Overview

**Creative North Star: "A Personal Software Studio"**

The portfolio pairs confident Arabic headings with a quiet lavender workspace, generous margins, and tangible project imagery. A permanent navigation rail gives the desktop page a recognizable frame; restrained line icons and open project cards keep the work easy to explore.

This document records the implemented system in `styles.css`, `index.html`, and `script.js`, informed by `PRODUCT.md` and the portfolio design spec. The studio metaphor, atmosphere language, and descriptive color names are implementer choices under the user's delegated design authority, rather than confirmed personal branding. The sample identity and project illustrations remain visibly identified as illustrative.

**Key Characteristics:**
- Arabic first, with a complete English layout and direction change.
- White and pale lavender surfaces, dark ink, and one iris-purple action accent.
- Large, readable headings paired with calm supporting copy.
- Image-led projects on open surfaces, with restrained borders and selective shadows.
- Local fonts, keyboard-visible controls, reduced-motion support, and a separate print CV.

## Colors

The palette uses cool paper and lavender neutrals around a darker iris accent; dark mode preserves the same roles with deep violet surfaces and a lighter accent. Frontmatter contains the exact current values, including the darker light-theme accent used by the finished implementation. The sidecar's tonal ramps are synthesized preview strips, not additional implemented CSS tokens.

### Primary

- **Iris purple** (`accent`): primary actions, headline emphasis, current navigation, timeline emphasis, focus outlines, and text links.
- **Deep iris** (`accent-hover`): primary-button hover state.
- **Pale iris wash** (`accent-soft`): selected navigation, icon backgrounds, and current-timeline halo.
- **Moonlit iris** (`dark-accent`, `dark-accent-hover`, `dark-accent-soft`): corresponding dark-theme roles. Primary-button and active-filter text use their specific dark ink tokens for contrast.

### Neutral

- **Cool paper** (`bg`) is the page canvas; **white** (`surface`) is the rail, fields, floating label, and dialog.
- **Lavender paper** (`surface-alt`) groups contact content, backs image frames and technology tags, and supplies quiet hover fills.
- **Plum ink** (`text`) carries primary text. **Muted mauve** (`muted`) carries descriptions and supporting labels. **Lavender line** (`line`) separates regions and outlines secondary controls.
- The `dark-` equivalents swap these roles together through the existing custom properties; they are theme values, not additional accents.
- **Learning green** (`green`, `dark-green`) marks availability. Error tokens are limited to invalid field borders and inline validation messages.
- The code window and small technology badges retain the local literal colors in `styles.css`; their colors belong to those components, rather than a second page-wide palette.

**The Theme Role Rule.** Apply shared color custom properties by role so canvas, surfaces, text, lines, and accent states change together when the theme changes.

## Typography

**Display and Body Fonts:** Alexandria first in Arabic; Manrope first in English, with the other family and `sans-serif` as fallbacks. Both families are self-hosted. Alexandria supplies separate Arabic and Latin subsets; Manrope supplies Latin.

**Code Font:** Consolas, with `monospace` fallback, inside the illustrative code window.

The pairing keeps Arabic headings substantial and English copy compact. Supporting copy uses generous line heights; labels and technical tokens remain smaller without competing with the project titles.

### Hierarchy

- **Display:** the hero uses the frontmatter `display` role. The name above it is a separate medium-weight line (1.75rem, weight 500, line height 1.4). English display tracking is tight (-.035em); Arabic explicitly resets it to zero.
- **Headline:** default section headings use `headline`. The learning-journey title is larger (1.9rem, line height 1.8); contact uses 1.75rem with line height 1.9. English section headings use -.02em tracking; Arabic resets it to zero.
- **Title:** project titles use `title`. Other small headings commonly use the same size with weight 500.
- **Body:** the current base is 1rem, with Arabic and English line heights recorded separately. Hero description uses line height 2.15 and a maximum width of 48ch; about copy uses 2.25. Project descriptions use .875rem with line height 2.
- **Label:** field labels use the recorded medium-weight label role. Navigation and buttons are 1rem at the base desktop size. Technology tags use the Latin label role and remain left to right in both languages.
- **Code:** the code role applies to preformatted content; its font shorthand resets line height to the value recorded in frontmatter.

At 1200px and below the hero is 2.45rem, with 2.55rem at the 850px breakpoint, then 2.45rem and line height 1.6 at 600px. At 360px it becomes 2.1rem. At 1700px and above it is 3.5rem. Section headings become 1.35rem on small screens. These explicit overrides take precedence over the base display clamp.

**The Script Rhythm Rule.** Preserve the language-specific family order, line height, direction, and Arabic tracking resets when extending the typography.

## Layout

The desktop rail occupies the inline start: the right side in Arabic and the left side in English. Its base width is 240px; the main content offsets by the same custom property. At 1200px and below the rail narrows to 210px. Content is centered within a 1410px maximum width with 62px inline padding, reduced to 36px at 1200px, 30px at 850px, 22px at 600px, and 17px at 360px.

The base hero has two columns (1.03fr and 1fr), a 30px gap, and a 570px minimum height. The introduction uses two columns (1.17fr and 1fr); journey and contact pair a narrower introduction with a wider content column. Project galleries use two equal columns with 30px row gaps and 26px column gaps. They become a single column at 600px, alongside the hero, introduction, journey, and contact.

At 850px and below a sticky mobile header (68px high) replaces the permanent rail. The rail becomes a 240px drawer beneath that header, entering from the appropriate language side over a dim overlay. The main content no longer has a rail offset. The menu manages focus, Escape, and background scrolling; its closed links are inert. Section scroll offsets increase to 90px beneath the header.

The page uses measured section spacing rather than a single universal scale: most sections begin with 84px, projects use 90px, and these reduce to 65px at 850px and 56px at 600px. The frontmatter spacing aliases name actual recurring or structural CSS values; they do not claim a separate token file exists.

Print uses a dedicated CV surface, A4 paper, and 16mm page margins. Screen navigation, main content, dialogs, and toast disappear. Print copy uses point-based sizing and a white background, with a separate purple heading color defined in the print CSS. The CV follows the current language.

## Elevation & Depth

Most regions remain flat. Tonal shifts, whitespace, fine separators, image frames, and an inset secondary-button stroke establish structure. Shadows identify the floating hero label, code window, modal dialog, and transient toast; they do not wrap every project in a raised card.

### Shadow Vocabulary

- **Floating surface:** the shared `--shadow` value is `0 16px 45px -22px rgba(47,29,86,.28)`, changing to `0 18px 45px -20px rgba(0,0,0,.5)` in dark mode. It appears on the hero label, dialog close control, and toast.
- **Code window:** `0 20px 40px -28px rgba(34,23,59,.55)` gives the dark code sample a quiet lift.
- **Modal:** `0 24px 80px -24px rgba(0,0,0,.45)` separates the project dialog from its dim backdrop.
- **Inset stroke:** `inset 0 0 0 1px var(--line)` outlines secondary buttons, small detail controls, and skill tags without adding exterior depth.

**The Selective Lift Rule.** Keep gallery cards open and flat; reserve exterior shadows for the implemented floating, code, modal, and transient surfaces.

## Shapes

Large image frames, the code window, contact group, and dialog share gently curved corners through the surface radius. Buttons and navigation use the smaller control radius; fields and reveal labels use the field radius. The floating hero label is between those sizes. Technology tags are compact rounded rectangles; status dots, navigation dots, detail controls, and timeline markers are circular.

Project imagery clips inside its rounded frame. Its base aspect ratio is 1.48, changing to 1.42 on phones. The hero image uses 1.02 at the base size, 1.14 on wide screens, and 1.27 on phones. Dialog imagery uses a wider crop (1.85, or 1.5 on phones). Preserve those intentional image containers instead of applying one universal crop.

## Components

### Buttons

Calm, legible controls use a minimum height of 48px, medium-weight type, a 10px icon gap, and the control radius. The primary variant uses accent fill and white text in light mode; dark mode supplies its distinct ink override. The secondary variant is transparent with an inset line-colored stroke. The rail CV button uses lavender paper and accent text.

Hover lifts standard buttons by 2px and updates their fill over .2s; the outline variant fills with the alternate surface. Icon-only buttons are 40px square and gain an accent wash on hover. Every keyboard-focused control uses a 3px accent outline with 5px offset. Disabled buttons reduce opacity to .5 and use a disabled cursor. More compact form and preview buttons retain their source-specific padding and heights.

### Filters and Tags

Gallery filters are rounded text buttons, with a minimum height of 39px at the base size. Hover uses lavender paper and accent text; selection uses accent fill and light text, with a separate dark-theme ink override. JavaScript updates both visible projects and `aria-pressed`, and updates the visible count.

Project technology tags use Latin type, alternate-surface fill, and compact padding. Skill tags use white surfaces, inset outlines, and small colored technology initials. They are informational labels, not clickable filters.

### Cards / Containers

Project cards put an image frame above a title, description, and technology row, without a separate card background or exterior shadow. The complete card is one button. Hover scales the image to 1.04 over .65s; an image-corner detail label appears on hover or keyboard focus and remains visible on phones. The category badge stays visible in the other upper corner.

The hero's floating label uses a white surface, a soft shadow, and a lavender icon tile. The code window uses its own dark surface and chrome in both themes, with Consolas content, syntax colors, and a compact status bar.

### Inputs / Fields

Fields use white/theme-surface fills on the lavender contact container, a transparent 1px border, field-radius corners, and 11px by 13px padding. Inputs have a 45px minimum height; the message area starts at 130px and can be resized vertically. On phones, editable fields use 1rem type. Focus uses the shared outline; invalid fields gain a specific error border plus inline text with a dark-mode color override.

The contact form validates locally and reveals a message preview, copy control, and mail-app link. Its state labels explain that preparing a message does not send it. Changing a field hides the previous preview until the message is prepared again.

### Navigation

Rail links pair small line icons with text. Muted default links gain alternate-surface fill on hover; the current location uses the accent wash, accent text, heavier weight, and a visible end dot. The scroll handler updates the current link and `aria-current`. Language switching reverses the document direction, reorders the font stack, translates copy, and retains the theme; both preferences persist when local storage is available.

### Project Dialog and Feedback

Project details use a native modal dialog with the surface radius, a width of `min(780px, calc(100% - 32px))`, and a maximum height of 90dvh (92dvh on phones). A dim backdrop, close icon, Escape behavior, outside click, and restored trigger focus complete the interaction. Details retain the visible illustrative-project note.

The toast uses inverted surface/text roles, a soft shadow, and a short slide/fade; it announces status through a polite live region and disappears after 3600ms.

The hero copy and image enter once over .8s and 1s respectively using `cubic-bezier(.16,1,.3,1)`. No later section waits for an entrance reveal. Reduced-motion preference removes animations and transitions, disables smooth scrolling, and suppresses hover transforms.

## Do's and Don'ts

### Do:

- **Do** preserve the Arabic-first layout and make the rail follow inline start when switching languages.
- **Do** use the current shared color roles and their dark-mode overrides, including the primary-button and active-filter ink overrides.
- **Do** keep readable supporting copy, generous Arabic line heights, and the visible keyboard focus outline.
- **Do** keep project illustrations and sample identity clearly described as illustrative.
- **Do** retain one-column phone galleries, reduced-motion behavior, and the dedicated A4 print surface.
- **Do** keep fonts and image assets local so the buildless page remains usable offline.

### Don't:

- **Don't** replace the current accent and typography with older values from metadata or design drafts; the implemented stylesheet is the extraction source.
- **Don't** add exterior shadows or enclosing white panels to every open gallery card.
- **Don't** hide project details behind hover alone; retain keyboard focus treatment and the phone-visible detail label.
- **Don't** apply English letter spacing or direction to Arabic headings, or reverse Latin technology labels.
- **Don't** present the local contact-message preparation as an automatic send action.
