<template>
  <button
    class="scout-success-button"
    :disabled="isLoading || disabled"
    @click="$emit('click')"
  >
    <span v-if="isLoading" class="spinner-grow spinner-grow-sm" />

    <span v-if="!isLoading">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
