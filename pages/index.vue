<template>
  <div class="scoutIndex">
    <div>
      <div class="scoutIndexContainer">
        <!-- Navigation -->
        <Navigation />

        <!-- Hero -->
        <Hero />

        <!-- Divider -->
        <div class="landingDivider" />
        <Parcels />
        <Search />
        <Organized />
        <Skiptracing />

        <div class="landingDivider" />
        <Pricing />
        <Desktop />
        <Create />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/landing/navigation/index'
import Hero from '~/components/landing/hero'
import Parcels from '~/components/landing/sections/parcels'
import Search from '~/components/landing/sections/search'
import Organized from '~/components/landing/sections/organized'
import Skiptracing from '~/components/landing/sections/skiptracing'
import Pricing from '~/components/landing/sections/pricing'
import Desktop from '~/components/landing/sections/desktop'
import Create from '~/components/landing/sections/create'
import Footer from '~/components/landing/footer'

export default {
  name: 'Index',
  components: {
    Navigation,
    Hero,
    Parcels,
    Search,
    Organized,
    Skiptracing,
    Pricing,
    Desktop,
    Create,
    Footer
  }
}
</script>
