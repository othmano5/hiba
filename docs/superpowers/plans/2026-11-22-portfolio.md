# Hiba Khaled Al-Zein Portfolio Implementation Plan

> **For agentic workers:** Use inline execution for this self-contained static deliverable.

**Goal:** Build and deliver an Arabic university portfolio with generated artwork and a full-page screenshot.

**Architecture:** Semantic single-page HTML, responsive CSS, and a vanilla JavaScript configuration/controller. No application server. Locally hosted fonts and artwork.

**Tech Stack:** HTML5, CSS, JavaScript, Playwright for interaction checks and screenshots.

**Spec:** docs/superpowers/specs/2026-11-22-portfolio-design.md

## Global Constraints
- All biography and work are explicitly illustrative.
- RTL by default, mobile responsive, local assets, accessible keyboard controls.
- Contact messages are prepared locally; do not claim delivery.

## Review Focus
- Mobile overflow and navigation closing/focus.
- Language switch updates direction and retains theme.
- Category filters and project lightbox focus/Escape.
- Validation and message compose text.
- Offline font/image loading and print output.

## Tasks
- [x] Build the complete responsive page and configure illustrative content.
- [x] Save generated images and self-hosted fonts with provenance.
- [x] Implement language, theme, navigation, filtering, lightbox, print and contact compose.
- [x] Verify desktop/mobile, interactions, print and offline asset loading; capture previews.
- [x] Package a clean ZIP and write Arabic run/customization instructions.

Verification: browser checks passed RTL, filtering, project details/Escape, theme and language persistence, validation and message preparation, print, decoded images, mobile navigation and no horizontal overflow across 320–1920px. Direct file opening also passed without external network requests. The A4 PDF is one page and was rendered for visual inspection. An independent screenshot/source review returned disposition `ship` at the supplied evidence scope.
