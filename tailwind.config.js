module.exports = {
  purge: {
    enabled: true,
    content: [
      "website/index.html"
    ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      outline: ['active'],
      dropShadow: ['hover','active'],
    },
  },
  plugins: [],
}
