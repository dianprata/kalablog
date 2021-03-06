/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#22292f',
      white: '#ffffff',
      grey: '#757575',
      'grey-light': '#dae1e7',
      primary: '#181620',
      success: '#28C76F',
      danger: '#EA5455',
      warning: '#FF9F43',
      dark: '#1E1E1E',
      blue: '#154276'
    },
    textColor: theme => ({
      inherit: 'inherit',
      ...theme('colors')
    }),
    backgroundColor: theme => theme('colors'),
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
