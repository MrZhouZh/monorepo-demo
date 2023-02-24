<script setup lang="ts">
import Fuse from 'fuse.js'
import { timezones } from '../composables/data'
import { addToTimezone } from '../composables/state'
import type { Timezone } from '../types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

const input = ref('')
const index = ref(0)
const searchResult = computed(() => {
  return fuse.search(input.value)
})

function add(t: Timezone) {
  addToTimezone(t)
  input.value = ''
  index.value = 0
}
</script>

<template>
  <div relative>
    <input
      v-model="input" type="text" placeholder="Seach timezone..." px2 py1 border="~ gray/15 rounded" bg-transparent
      w-full
    >
    <div v-show="input" absolute bg-gray-900 top-full left-0 right-0>
      <button
        v-for="i of searchResult"
        :key="i.refIndex"
        flex gap2
        @click="addToTimezone(i.item)"
      >
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>

<style>
html {
  background-color: #222;
  color: #fff;
  color-scheme: dark;
}
</style>
