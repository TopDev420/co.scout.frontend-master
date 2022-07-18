<template>
  <div style="height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden;">
    <div
      id="map"
      style="
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          overflow: hidden"
    >
      <Map />
    </div>
  </div>
</template>

<script>
import Map from '@/components/map'

export default {
  name: 'Dashboard',
  components: {
    Map
  },
  layout: 'authenticated'
}
</script>
