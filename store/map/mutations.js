export default {
  SET_MAP (state, { map }) {
    state.map = map
  },
  ADD_LAYER (state, { layer }) {
    state.map.addLayer(layer)
  }
}
