<template>
  <li class="weather-days-item">
    <h4>{{ (precipitation * 100).toFixed() }}% </h4>
  </li>
</template>

<script>
export default {
  props: {
    precipitation: Number,
  },
};
</script>

<style >
</style>