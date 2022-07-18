<template>
  <div class="scoutGenericMobileNav">
    <div class="scout-row scout-h-100">
      <div class="scout-col-1 scout-col-xs-2 scout-v-center scout-no-gutter">
        <img class="scoutGenericMobileNavButton" :src="require(`~/assets/icons/${icon}.svg`)" @click="handleNavigateBack">
      </div>
      <div class="scout-col-11 scout-col-xs-10 scout-no-gutter scout-v-center">
        <p class="scoutGenericMobileNavText">
          {{ title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mobile',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'left-arrow-white'
    }
  },
  methods: {
    /**
     * Handles navigation back button.
     * @returns {void}
     * @public
     */
    handleNavigateBack () {
      return this.$router.back()
    }
  }
}
</script>
