/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', wide: '1400px' },
    extend: {
      // Figma text boxes use 100% line-height (Sora ≈ 1.26)
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.26' }],
        base: ['1rem', { lineHeight: '1.26' }],
        xl: ['1.25rem', { lineHeight: '1.26' }],
        '2xl': ['1.5rem', { lineHeight: '1.26' }],
        '4xl': ['2.25rem', { lineHeight: '1.26' }],
      },
      colors: { accent: '#179800', cream: '#efebe3', ink: '#111111', sun: '#ffdc26' },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        adlam: ['"ADLaM Display"', 'cursive'],
      },
    },
  },
  plugins: [],
};
