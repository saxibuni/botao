module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 100,
      exclude: /adapter\.scss/,
    },
  }
}
