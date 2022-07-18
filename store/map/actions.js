export default {
  async createMapInstance ({ dispatch }, { mapbox }) {
    await dispatch('SET_MAP')
  }
}
