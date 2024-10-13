import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        galleria: {
          black: 'hsl(0, 0%, 0%)',
          darkGray: '#7D7D7D',
          lightGray: 'hsl(0, 0%, 90%)',
          veryLightGray: 'hsl(0, 0%,95%)',
          white: 'hsl(0, 0%, 100%)'
        }
      },
      fontSize: {
        heading1: [
          '56px',
          {
            lineHeight: '64px'
          }
        ],
        heading2: [
          '24px',
          {
            lineHeight: '29px'
          }
        ],
        heading3: [
          '18px',
          {
            lineHeight: '22px'
          }
        ],
        subhead1: [
          '15px',
          {
            lineHeight: '19px'
          }
        ],
        subhead2: [
          '13px',
          {
            lineHeight: '17px'
          }
        ],
        button1: [
          '12px',
          {
            lineHeight: '15px',
            letterSpacing: '2.5px'
          }
        ],
        button2: [
          '9px',
          {
            lineHeight: '11px',
            letterSpacing: '2px'
          }
        ],
        body: [
          '14px',
          {
            lineHeight: '28px'
          }
        ],
        display: [
          '200px',
          {
            lineHeight: '150px'
          }
        ]
      }
    }
  },
  plugins: []
};
export default config;
