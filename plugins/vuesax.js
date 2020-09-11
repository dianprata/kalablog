import Vue from 'vue'
import Vuesax from 'vuesax'

const colors = {
  primary: '#181620',
  success: '#28C76F',
  danger: '#EA5455',
  warning: '#FF9F43',
  dark: '#1E1E1E'
}

Vue.use(Vuesax, { theme: { colors } })
