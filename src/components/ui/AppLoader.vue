<template>
  <div :class="['spinner-border' , color ]" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
    props: {
        color: String
    }
};
</script>

<style>
</style>