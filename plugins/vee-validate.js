import { extend, localize, ValidationObserver, ValidationProvider } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import Vue from 'vue'

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  })
}

const localization = {
  en: {
    messages: {
      required: field => `${field} field is required`
    }
  }
}

localize(localization)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
