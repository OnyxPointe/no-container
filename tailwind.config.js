module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/*.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    extend: { 
      colors: {
        'darkest': '#2B2B2B',
        'dark': '#393939', 
      },  
      fontFamily: {
        logo: ['Tenor Sans', 'sans-serif'],
        featured: ['Lora', 'serif'],
        header: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
