<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div border="~ gray/20" p2>
    <TimezoneSearch />
  </div>
</template>
