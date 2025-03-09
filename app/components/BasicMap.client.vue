<script lang="ts" setup>
// import type { LngLatLike } from "maplibre-gl";

const style = useMapStyle();
const center: [number, number] = [8.310296009215529, 47.050761999302146];
const zoom = 18;
</script>

<template>
  <MglMap
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="100svh"
    :pitch="60"
  >
    <div
      class="absolute left-1/2 top-1/2 size-[80px] -translate-x-1/2 -translate-y-1/2"
    >
      <CarCanvas />
    </div>
  </MglMap>
</template>

<style>
.maplibregl-ctrl-attrib {
  display: none !important;
}
</style>
