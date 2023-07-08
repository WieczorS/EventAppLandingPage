/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  content: ['./src/**/*.{html,js}'],

  theme: {
    extend: {},
  },
  plugins: [],
}

