<script lang="ts" setup>
const rotation = computed<[number, number, number]>(() => [
  degToRad(30),
  degToRad(180),
  degToRad(0),
]);

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}
</script>

<template>
  <TresCanvas alpha>
    <TresPerspectiveCamera
      :position="[0, 550, -1000]"
      :rotation="rotation"
      :fov="20"
    />
    <TresAmbientLight />
    <Suspense>
      <Car />
    </Suspense>
  </TresCanvas>
</template>
