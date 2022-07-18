import ScoutError from '~/errors/ScoutError'

export default {
  /**
   * Attempts to authenticate a user.
   * @param {Object} param0 Vue param
   * @param {Object} payload Post payload
   * @returns {Promise<void>}
   * @public
   */
  async login ({ commit }, { email, password }) {
    try {
      await this.$auth.loginWith('local', { data: { email, password } })
    } catch (error) {
      const { data } = error.response
      throw new ScoutError(data)
    }
  }
}
