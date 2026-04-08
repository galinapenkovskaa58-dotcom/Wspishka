import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070A12",
        neonBlue: "#2D7CFF",
        neonCyan: "#37D9FF",
        neonViolet: "#B04BFF",
        neonPink: "#FF4FD8"
      },
      boxShadow: {
        glowBlue: "0 0 40px rgba(45, 124, 255, 0.28)",
        glowPink: "0 0 40px rgba(255, 79, 216, 0.25)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      keyframes: {
        "soft-fade": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "soft-fade": "soft-fade 500ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
