<template>
  <div class="scout-container scoutCoverContainer">
    <div class="scout-row scout-no-gutter scout-h-100">
      <div
        class="scout-col-6 scout-no-gutter scout-no-overflow scout-v-100 scoutHomeLeftBanner"
      >
        <img
          src="~/assets/images/cover.webp"
          class="scout-h-100 scout-w-100 scout-cover-image"
        >
      </div>
      <div
        class="scout-col-6 scout-col-md-12 scout-no-gutter scout-v-100 scoutRightCol"
      >
        <img
          src="~/assets/images/cover.webp"
          class="scout-h-100 scout-w-100 scout-cover-image scoutMobileImage"
        >
        <div class="scoutHomeActionGroup">
          <div class="scoutHomeWelcomeWrapper">
            <img src="~/assets/logo.svg" class="scout-logo">
            <p class="scoutWelcomText" style="margin-top: 40px">
              Create An Account
            </p>
          </div>
          <div class="scoutAuthForm">
            <Input
              id="first_name"
              rules="required"
              label="First Name"
              name="first_name"
            />

            <Input
              id="last_name"
              rules="required"
              label="Last Name"
              name="last_name"
            />
            <Input
              id="email"
              rules="required"
              label="Email Address"
              name="email"
            />

            <Input
              id="password"
              rules="required"
              label="Password"
              name="password"
              type="password"
            />

            <Input
              id="password"
              rules="required"
              label="Confirm Password"
              name="password"
              type="password"
            />
          </div>
          <div class="scoutError">
            <p class="scout-error">
              {error}
            </p>
          </div>

          <div class="scoutAuthAction">
            <Button :is-loading="isSending">
              <p>Login</p>
            </Button>
          </div>
          <div class="scoutAuthTerms">
            By creating an account you agree to the Terms & Conditions that
            may apply.
          </div>

          <div class="scoutAuthOr">
            <a href="/login">
              <a>
                <p>Already have an account?</p>
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '~/components/app/elements/Input'
import Button from '~/components/app/elements/Button'

export default {
  name: 'Register',
  components: {
    Input,
    Button
  },
  data: () => ({
    error: '',
    isSending: false,
    form: {
      fist_name: null,
      last_name: null,
      email: null,
      password: null
    }
  }),
  methods: {
    /**
     * Submits a login request.
     */
    submit () {
      this.isSending = true
    }
  }
}
</script>
