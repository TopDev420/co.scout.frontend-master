<template>
  <ValidationProvider :rules="rules" :name="name" slim>
    <div class="scoutInputFieldWhite">
      <div :class="['scoutInputLabel', isFocused ? 'scoutInputLabelActive' : 'scoutInputLabelInactive']">
        <p>{{ label }}</p>
      </div>

      <input
        v-if="type !== 'textarea'"
        :id="id"
        :key="id"
        v-model="value"
        :placeholder="label"
        :type="type"
        :name="name"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @keyup="setValue($event, value)"
      >
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'Input',
  components: {
    ValidationProvider
  },
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default () {
        return 'input'
      }
    },
    rules: {
      type: String,
      required: false,
      default () {
        return 'required'
      }
    },
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isFocused: false,
    value: ''
  }),
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  },
  methods: {
    /**
     * Method to set value of the input.
     * @param {Event} event Event target
     * @param {string} value Value string
     * @returns {boolean|void}
     * @public
     */
    setValue (event, value) {
      if (event.target.type === 'email') { return event.target.setAttribute('value', value) }
      return false
    }
  }
}
</script>
