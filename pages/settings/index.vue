<template>
  <div class="scoutSettingswrapper">
    <MobileNavigation title="Settings" icon="left-arrow-white" />

    <div class="scout-row">
      <div class="scout-col-12">
        <p class="scoutSettingsHeader">
          Settings
        </p>
      </div>
    </div>

    <div
      onClick="{handleToggleCoordinates}"
      class="scout-row scoutSettingsItem"
    >
      <div class="scout-col-10">
        <p class="scoutSettingsHeading">
          Show Coordinates
        </p>
        <p class="scoutSettingsBody">
          Display coorinates on the map
        </p>
      </div>
      <div class="scout-col-2 scout-v-center scout-right">
        <img
          src="~/assets/icons/unchecked.svg"
        >
      </div>
    </div>
    <div class="scoutSettingsDivider" />
    <div
      class="scout-row scoutSettingsItem"
    >
      <div class="scout-col-10">
        <p class="scoutSettingsHeading">
          Contact Us
        </p>
        <p class="scoutSettingsBody">
          Send our support team an email
        </p>
      </div>
      <div class="scout-col-2" />
    </div>
    <div class="scoutSettingsDivider" />
    <a href="/privacy">
      <a>
        <div class="scout-row scoutSettingsItem">
          <div class="scout-col-10 scout-v-center">
            <p class="scoutSettingsHeading">Privacy Policy</p>
          </div>
          <div class="scout-col-2 scout-v-center scout-right">
            <img src="~/assets/icons/right-arrow.svg">
          </div>
        </div>
      </a>
    </a>
    <div class="scoutSettingsDivider" />

    <div class="scout-row scoutSettingsItem">
      <div class="scout-col-10 scout-v-center">
        <p class="scoutSettingsHeading">
          Terms of Service
        </p>
      </div>
      <div class="scout-col-2 scout-v-center scout-right">
        <img src="~/assets/icons/right-arrow.svg">
      </div>
    </div>
  </div>
</template>

<script>
import MobileNavigation from '~/components/app/navigation/mobile'

export default {
  name: 'Settings',
  components: { MobileNavigation },
  layout: 'authenticated'
}
</script>
