<template>
  <div>
    <div class="scout-desktop-nav-wrapper ">
      <div class="scout-desktop-nav scout-row scout-no-gutter">
        <div class="scout-col-2 scout-col-sm-3 scout-no-gutter scout-v-center">
          <a href="/map">
            <img
              style="cursor: pointer;"
              class="scout-desktop-nav-logo"
              src="~/assets/logoblack.svg"
            >
          </a>
        </div>
        <div class="scout-col-8 scout-col-sm-6 scout-no-gutter scout-v-center scout-h-center ">
          <input
            v-model="search"
            class="scout-desktop-nav-input"
            placeholder="Search owner, address or parcel ID"
            @change="handleSearch"
          >
        </div>
        <div class="scout-col-2 scout-col-sm-3 scout-no-gutter scout-v-center scout-right">
          <div class="scout-row">
            <div class="scout-col-6">
              <img src="~/assets/icons/profile.svg">
            </div>
            <div
              class="scout-col-6 scoutDesktopMenuWrapper"
            >
              <img
                class="scoutDesktopMenuToggle"
                src="~/assets/icons/down-arrow.svg"
                @click="handleDropdownToggle"
              >

              <div
                :class="[
                  'scoutNavDropdown',
                  isDropdownVisible
                    ? 'scoutNavDropdownActive'
                    : 'scoutNavDropdownInActive',
                ]"
              >
                <img
                  class="scoutDesktopMenuPolygon"
                  src="~/assets/icons/menu-polygon.svg"
                >

                <div class="scoutDesktopMenuDropdown">
                  <a href="/profile">
                    <div
                      class="scout-row scout-no-gutter scoutDropdownMenu"
                    >
                      <div class="scout-col-2 scout-no-gutter scout-v-center">
                        <div class="scoutDropdownMenuProfile">
                          <!-- <img :src="user.avatar"> -->
                        </div>
                      </div>

                      <div class="scout-col-10 scout-no-gutter scout-v-center">
                        <p class="scoutDropdownMenuProfileText">
                          My Account
                        </p>
                      </div>
                    </div>
                  </a>

                  <a href="/saved">
                    <div
                      class="scout-row scout-no-gutter scoutDropdownMenu"
                    >
                      <div class="scout-col-2 scout-no-gutter scout-v-center">
                        <img src="~/assets/icons/drawer-saved-location.svg">
                      </div>
                      <div class="scout-col-10 scout-no-gutter scout-v-center">
                        <p>Saved Locations</p>
                      </div>
                    </div>
                  </a>

                  <a href="/settings">
                    <div
                      class="scout-row scout-no-gutter scoutDropdownMenu"
                    >
                      <div class="scout-col-2 scout-no-gutter scout-v-center">
                        <img src="~/assets/icons/cog.svg">
                      </div>
                      <div class="scout-col-10 scout-no-gutter scout-v-center">
                        <p>Settings</p>
                      </div>
                    </div>
                  </a>

                  <div
                    onClick="{handleLogout}"
                    class="scout-row scout-no-gutter scoutDropdownMenu"
                  >
                    <div class="scout-col-2 scout-no-gutter scout-v-center">
                      <img src="~/assets/icons/logout.svg">
                    </div>

                    <div class="scout-col-10 scout-no-gutter scout-v-center" @click="logout()">
                      <p>Log Out</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  data: () => ({
    isDropdownVisible: false,
    search: ''
  }),
  computed: {
    auth: mapState('auth', [
      'user'
    ])
  },
  methods: {
    /**
     * Handles drop down toggle.
     * @returns {void}
     * @public
     */
    handleDropdownToggle () {
      this.isDropdownVisible = !this.isDropdownVisible
    },
    /**
     * Handles search.
     */
    handleSearch () {

    },
    /**
     * Logs a user out.
     * @returns {Promise<void>}
     * @public
     */
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
