<template>
  <div class="scout-container scoutCoverContainer">
    <Head>
      <title>Login - Scout</title>
    </Head>

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
        class="scout-col-6 scout-col-md-12 scout-no-gutter scout-v-100 scoutRightColMeta"
      >
        <img
          src="~/assets/images/cover.webp"
          class="scout-h-100 scout-w-100 scout-cover-image scoutMobileImage"
        >
        <div class="scoutHomeActionGroup">
          <div class="scoutHomeWelcomeWrapper">
            <img src="~/assets/logo.svg" class="scout-logo">
            <p class="scoutWelcomText" style="margin-top: 40px'">
              Login With Email
            </p>
          </div>
          <validation-observer ref="form" v-slot="{ errors: { email, password }, handleSubmit }" slim>
            <form @submit.prevent="handleSubmit(submit)">
              <div class="scoutAuthForm">
                <Input
                  id="email"
                  v-model="form.email"
                  rules="required"
                  label="Email"
                  name="email"
                />

                <Input
                  id="password"
                  v-model="form.password"
                  rules="required"
                  label="Password"
                  name="password"
                  type="password"
                />
              </div>
              <div v-if="email || password || error " class="scoutError">
                <p class="scout-error">
                  {{ email[0] || password[0] || error }}
                </p>
              </div>

              <div class="scoutAuthAction">
                <Button :is-loading="isSending">
                  <p>Login</p>
                </Button>
              </div>
            </form>
          </validation-observer>

          <div class="scoutAuthMeta">
            <a href="/forgot-password">
              Forgot Password?
            </a>
          </div>

          <div class="scoutAuthOr">
            <a href="/register">
              <a>
                <p>Don't have an account?</p>
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ValidationObserver } from 'vee-validate'
import Input from '~/components/app/elements/Input'
import Button from '~/components/app/elements/Button'

export default {
  name: 'Login',
  components: {
    ValidationObserver,
    Button,
    Input
  },
  data: () => ({
    error: '',
    isSending: false,
    form: {
      email: null,
      password: null
    }
  }),
  methods: {
    ...mapActions('authentication', [
      'login'
    ]),
    /**
     * Submits a login request.
     */
    async submit () {
      this.isSending = true

      const payload = {
        email: this.form.email,
        password: this.form.password
      }

      try {
        await this.login(payload)
      } catch (error) {
        this.error = error.message
      } finally {
        this.isSending = false
      }
    }
  }

}
</script>
