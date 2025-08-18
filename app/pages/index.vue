<template>
  <div>
    <h1>I'm about page</h1>
    Current Count: {{ count }}
    <button @click="useMain().increment()">+</button>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";

const { count } = storeToRefs(useMain());
</script>
