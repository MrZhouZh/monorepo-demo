<script setup lang="ts">
const props = defineProps<{
  name: string,
}>()

const uppercase = computed(() => props.name.toLocaleUpperCase())

</script>

<template>
  <div text="red-500 3xl" font="sans bold ">
    Hello, {{ uppercase }}
  </div>
  <div i-carbon-bee text="5xl yellow" ></div>
</template>
