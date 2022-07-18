<template>
  <div id="landingNav" class="scoutLandingNav">
    <div class="scoutLandingNavContainer">
      <div
        :class="[!isMenuVisible
          ? 'scoutLandingDrawerWrapper'
          : 'scoutLandingDrawerWrapperActive']"
        @click="handleToggleMenu"
      >
        <div
          :class="[!isMenuVisible
            ? 'scoutLandingDrawer'
            : 'scoutLandingDrawerActive']"
          @click="handleToggleMenu"
        >
          <div class="scoutLandingDrawerHead">
            <img
              class="scoutLandingMenu"
              :src="[isMenuVisible
                ? require('~/assets/icons/landing-cross.svg')
                : require('~/assets/icons/landing-hamburger.svg')]"
              @click="handleToggleMenu"
            >

            <img
              class="scoutLogo"
              src="~/assets/icons/scout-black.svg"
            >
          </div>

          <div class="scoutLandingDrawerMenuItems">
            <p>About</p>
            <p>Pricing</p>
            <p>Desktop</p>
            <a href="/register">f
              <p>Sign up</p>
            </a>
          </div>
        </div>
      </div>

      <div class="scout-row scout-h-100">
        <div
          class="scout-col-8 scoutLandingNavLeftCol"
        >
          <img
            class="scoutLandingMenu"
            :src="[isMenuVisible
              ? require('~/assets/icons/landing-cross.svg')
              : require('~/assets/icons/landing-hamburger.svg')]"
            @click="handleToggleMenu"
          >
          <a>
            <img src="~/assets/icons/scout-white.svg">
          </a>

          <!-- Desktop menu -->
          <ul class="desktopMenu">
            <li>
              <a> About</a>
            </li>
            <li>
              <a>
                Pricing
              </a>
            </li>
            <li>
              <a>
                Desktop
              </a>
            </li>
            <li>
              <a href="/register">
                <a>Sign up</a>
              </a>
            </li>
          </ul>
        </div>

        <!-- Login button -->
        <div class="scout-col-4 scoutLandingNavRightCol">
          <a href="/login">
            <a>
              <button>Login</button>
            </a>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    isMenuVisible: false
  }),
  methods: {
    handleToggleMenu () {
      this.isMenuVisible = !this.isMenuVisible
    }
  }
}
</script>
