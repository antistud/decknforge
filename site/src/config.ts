// =====================================================================
// DeckNForge site config — change these in ONE place.
// =====================================================================

// Set this to your real public GitHub repo URL.
// Used in nav, footer, contribute page, and home invite section.
export const GITHUB_URL = "https://github.com/antistud/decknforge";

// Issues / discussions URLs derive from the repo URL by default.
export const GITHUB_ISSUES_URL = `${GITHUB_URL}/issues`;
export const GITHUB_DISCUSSIONS_URL = `${GITHUB_URL}/discussions`;

// Where contributors should send playtest reports if not GitHub.
// Leave as null to hide.
export const PLAYTEST_EMAIL: string | null = null;
