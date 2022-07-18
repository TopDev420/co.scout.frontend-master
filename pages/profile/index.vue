<template>
  <div class="scoutProfileWrapper">
    <MobileNavigation title="Profile" icon="left-arrow-white" />

    <div
      class="scout-row scout-h-100 scoutProfileRow"
    >
      <div class="scout-col-6 scout-col-md-12 scout-no-gutter">
        <p
          class="scoutProfileHeading scoutProfileLeftHeader"
        >
          Account
        </p>
        <div
          class="scout-row scoutProfileContainer"
        >
          <div class="scoutProfileColLeft">
            <div class="scoutProfilePictureWrapper">
              <img :src="user.avatar">
            </div>
          </div>
          <div class="scoutProfileColRight">
            <p class="scoutProfileUserName">
              {{ user.firstName }}   {{ user.lastName }}
            </p>
            <p class="scoutProfileEmail">
              {{ user.email }}
            </p>
            <p class="scoutProfileChangePic">
              Change Photo
            </p>
          </div>
        </div>

        <div class="scoutAccountVerificationStatus">
          <div class="scout-row">
            <p>
              Verification status:
              <span
                :style="{ 'font-size': 14, cursor: user.verified ? 'none' : 'none'}"
                :class="[user.verified ? 'scout-success-green' : 'scout-error']"
              >
                {{ user.verified ? "Verified" : "Verify Account" }}
              </span>
            </p>
          </div>
          <div class="scout-row" style="margin-top: 32px;">
            <p class="scout-error">
              {verificationEmailStatus}
            </p>
            <p class="scout-success-black">
              {verificationEmailStatus}
            </p>
            <p>Sending verification email....</p>
            )}
          </div>
        </div>
      </div>
      <div
        class="scout-col-6 scout-col-md-12 scout-no-gutter"
      >
        <p class="scoutProfileHeading">
          License
        </p>
        <div
          class="scout-row scoutProfileContainer"
        >
          <div class="scoutProfileLicenseCard">
            <p class="scoutProfileLicenseCardHead">
              something
            </p>
            <p class="scoutProfileLicenseCardExpiryDate">
              Expires: {e
            </p>
            <p class="scoutProfileLicenseCardExpiryDate">
              Next Invoice: e
            </p>
            <button>
              <div class="scout-row">
                <img src="~/assets/icons/upgrade.svg">
                <p>Upgrade</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div class="scoutProfileMobileLogout">
        <div>
          <img src="~/assets/icons/logout-grey.svg">
          <p onClick="{handleLogout}">
            Log Out
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MobileNavigation from '~/components/app/navigation/mobile'

export default {
  name: 'Profile',
  components: { MobileNavigation },
  layout: 'authenticated',
  computed: mapState('auth', [
    'user'
  ])
}
</script>
