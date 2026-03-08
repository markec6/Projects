export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
        screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      }
    },
    extend: {
      colors: {
        primary: {
          light: 'rgb(255 255 255)',
          dark: 'rgb(30 41 59)'
        }
      }
    }
  }
}