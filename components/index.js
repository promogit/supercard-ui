import Vue from 'vue'
import overlays from './lib/overlays'
import buttons from './lib/buttons'

// get options passed from module.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// loop through components and register them

//concats all components
components = [].concat(overlays, buttons)

for (const name in components) {
  Vue.component(name, {
    // extend the original component
    extends: components[name],
  })
}