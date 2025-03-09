<script lang="ts" setup>
import { useFBX } from "@tresjs/cientos";

const scene = await useFBX("/3d/opelcorsac.fbx");
</script>

<template>
  <primitive :object="scene" />
</template>
