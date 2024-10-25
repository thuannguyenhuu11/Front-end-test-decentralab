import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'contact-gradient': 'linear-gradient(90deg, #ABECA2 0%, #2FB3FE 25%, #6A8EEA 50%, #A185F4 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
