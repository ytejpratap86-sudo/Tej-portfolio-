import type { Config } from "tailwindcss";
export default { darkMode: "class", content: ["./src/**/*.{ts,tsx}"],
 theme: { extend: { colors: { bg: "var(--bg)", fg: "var(--fg)", mute: "var(--mute)", card: "var(--card)", line: "var(--line)", blue: "#3b82f6", violet: "#8b5cf6" },
 fontFamily: { display: ["var(--f-display)"], sans: ["var(--f-body)"] } } }, plugins: [] } satisfies Config;
