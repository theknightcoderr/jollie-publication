/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "var(--color-burgundy)",
        cream: "var(--color-cream)",
        gold: "var(--color-gold)",
        charcoal: "var(--color-charcoal)",
        orange: "var(--color-orange)",
        white: "var(--color-white)",
        paper: "var(--color-paper)",
        "paper-deep": "var(--color-paper-deep)",
        "ink-soft": "var(--color-ink-soft)",
        line: "var(--color-line)",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "Cambria", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h1: ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        h2: ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        "article-body": ["1.1875rem", { lineHeight: "1.78" }],
        caption: ["0.84375rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        container: "1200px",
        reading: "720px",
        prose: "68ch",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "4px",
        full: "999px",
      },
      boxShadow: {
        hover: "0 8px 24px rgba(37, 37, 42, 0.08)",
      },
    },
  },
  plugins: [],
};