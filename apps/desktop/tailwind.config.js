/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui-kit/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
    './src/application/**/*.{js,ts,jsx,tsx}',
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
