/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui-kit/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui-kit/layouts/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        1: '8px',
        1.5: '10px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
      },
    },
  },
  plugins: [],
};
