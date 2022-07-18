<template>
  <div>
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/app/navigation'

export default {
  name: 'Authenticated',
  components: { Navigation }
}
</script>
