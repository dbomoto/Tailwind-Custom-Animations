module.exports = {
  // uncomment bellow to remove unused tailwing styles
  // enabled: true,
  mode: 'jit',
  // compare the classes used in the files declared in purge vs the tailwind source css to produce a smaller size css with only the relevant classes.
  purge: { 
    // content: ['./public/portfolio/portfolio.html'],
    content: ['./public/home/home.html'],
    options: {
      keyframes: true,
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
