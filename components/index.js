import Vue from 'vue'
import overlays from './lib/overlays'
import buttons from './lib/buttons'


function addComponents(components) {
  for (const name in components) {
    Vue.component(name, {
      // extend the original component
      extends: components[name],
    })
  }  
}

addComponents(overlays)
addComponents(buttons)

