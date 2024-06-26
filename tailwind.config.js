/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#FF98E2",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#AC6AFF",
          7: "#FFFCE1",
          8: "#9f53ff",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
          14: "#292D3E",
          15: "linear-gradient(to top right,#7ADB78, #858DFF, #9F53FF, #79FFF7, #FF98E2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
        lexend: "var(--font-lexend)",
        inter: "var(--font-inter)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      animation: {
        blob: "blob 7s infinite",
        "loop-scroll": "loop-scroll 20s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        tilt: "tilt 10s infinite linear",
        gradient: "gradient 6s linear infinite",
        "spin-slow": "spin 6s linear infinite",
        despin: "despin 6s linear infinite",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        despin: {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
      },
      transitionDuration: {
        DEFAULT: "200ms",
        blink: "1000ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "grainy-texture": `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKC0xNTAsIDAuNSwgMC41KSIgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImdnZ3JhaW4tZ3JhZGllbnQyIj48c3RvcCBzdG9wLWNvbG9yPSIjRkY5OEUyIiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iLTAlIj48L3N0b3A+PHN0b3Agc3RvcC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwKSIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDE1MCwgMC41LCAwLjUpIiB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iZ2dncmFpbi1ncmFkaWVudDMiPjxzdG9wIHN0b3AtY29sb3I9IiM3OUZGRjciIHN0b3Atb3BhY2l0eT0iMSI+PC9zdG9wPjxzdG9wIHN0b3AtY29sb3I9InJnYmEoMjU1LDI1NSwyNTUsMCkiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJnZ2dyYWluLWZpbHRlciIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBwcmltaXRpdmVVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNTUiIG51bU9jdGF2ZXM9IjIiIHNlZWQ9IjEwNiIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgogIDxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0iY29sb3JtYXRyaXgiPjwvZmVDb2xvck1hdHJpeD4KICA8ZmVDb21wb25lbnRUcmFuc2ZlciB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJjb2xvcm1hdHJpeCIgcmVzdWx0PSJjb21wb25lbnRUcmFuc2ZlciI+CiAgICA8ZmVGdW5jUiB0eXBlPSJsaW5lYXIiIHNsb3BlPSIzIj48L2ZlRnVuY1I+CiAgICA8ZmVGdW5jRyB0eXBlPSJsaW5lYXIiIHNsb3BlPSIzIj48L2ZlRnVuY0c+CiAgICA8ZmVGdW5jQiB0eXBlPSJsaW5lYXIiIHNsb3BlPSIzIj48L2ZlRnVuY0I+CiAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogIDxmZUNvbG9yTWF0cml4IHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49ImNvbXBvbmVudFRyYW5zZmVyIiByZXN1bHQ9ImNvbG9ybWF0cml4MiIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMAogICAgICAgICAgMCAxIDAgMCAwCiAgICAgICAgICAwIDAgMSAwIDAKICAgICAgICAgIDAgMCAwIDE5IC0xMSI+PC9mZUNvbG9yTWF0cml4PgogIDwvZmlsdGVyPjwvZGVmcz48Zz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZjODc2Ij48L3JlY3Q+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnZ2dyYWluLWdyYWRpZW50MykiPjwvcmVjdD48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dnZ3JhaW4tZ3JhZGllbnQyKSI+PC9yZWN0PjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50IiBmaWx0ZXI9InVybCgjZ2dncmFpbi1maWx0ZXIpIiBvcGFjaXR5PSIxIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQiPjwvcmVjdD48L2c+PC9zdmc+Cgo=")`,
        "noisy-texture": `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGZpbHRlciBpZD0iZmlsdGVyIj4KICAgICAgICA8ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuNywwLjgiIHNlZWQ9IjAiCiAgICAgICAgdHlwZT0iZnJhY3RhbE5vaXNlIgogICAgICAgIHJlc3VsdD0ic3RhdGljIi8+CiAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDEgMCAwIDAKICAgICAgICAgIDAgMCAxIDAgMAogICAgICAgICAgMCAwIDAgMTkgLTExIi8+CiAgICA8L2ZpbHRlcj4KICAgIDxyZWN0IHdpZHRoPSIyMDAwIiBoZWlnaHQ9IjIwMDAiIGZpbHRlcj0idXJsKCNmaWx0ZXIpIi8+Cjwvc3ZnPgo=")`,
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        parallax: "linear-gradient",
        "linear-gradient":
          "linear-gradient(to top right,#9f53ff, #ff98e2, #ffc876)",
        "form-gradient":
          "linear-gradient(to bottom, #0E0C15, #FF98E2, #0E0C15)",
        "footer-gradient":
          "linear-gradient(to top left, #0E0C15, #FF98E2, #0E0C15)",
        "linear-slide-l": "linear-gradient(to left, transparent, #0E0C15 )",
        "linear-slide-r": "linear-gradient(to right, transparent, #0E0C15 )",
        "linear-gradient-hover":
          "linear-gradient(to bottom left,#FFC876, #79FFF7, #9F53FF, #FF98E2)",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2rem] sm:text-[2.5rem] leading-[2.25rem] lg:text-[2.75rem] sm:leading-[3.25rem] lg:leading-[3.75rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[1.5rem] sm:text-[2rem] font-semibold xl:text-[2.5rem]":
            {},
        },
        ".h4": {
          "@apply sm:text-[1.5rem] md:text-[1.8rem] xl:text-[2.2rem] leading-normal font-semibold":
            {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-lexend font-light text-xs tracking-tagline": {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
