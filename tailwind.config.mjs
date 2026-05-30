/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        paper: "#f8fafc",
        line: "#e5e7eb",
        moss: "#166534",
        clay: "#475569",
        ocean: "#0f766e",
        gold: "#ca8a04"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(15, 23, 42, 0.05)"
      }
    }
  }
};
