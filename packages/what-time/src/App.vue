<script setup lang="ts">
import { zones } from './composables/state'
</script>

<template>
  <div border="~ gray/20" m2>
    <ActionBar />
    <pre>{{ zones }}</pre>
  </div>
</template>

<style>
html {
  background-color: #222;
  color: #fff;
  color-scheme: dark;
}
</style>
