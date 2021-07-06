<template>
  <li class="weather-days-item">
    <h4> {{ speed.toFixed() }} </h4>
  </li>
</template>

<script>
export default {
    props: {
        speed: Number
    }
};
</script>

<style>
</style>