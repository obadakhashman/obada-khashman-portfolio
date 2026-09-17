import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#0D0F12",
          soft: "#131722",
          panel: "#171B24"
        },
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#B8974A",
          dim: "#8A733F"
        },
        ink: {
          DEFAULT: "#ECE7DC",
          dim: "#A7A99F",
          faint: "#6C7079"
        }
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        arabic: ["var(--font-tajawal)", "sans-serif"]
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212,175,55,0.15)",
        "gold-glow-lg": "0 0 45px rgba(212,175,55,0.18)"
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.08), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
