<template>
  <li class="news-body-item d-flex mb-lg-3">
    <div class="news-body-item-img">
      <img
        :src="icon"
        alt="#"
      />
    </div>
    <div class="news-body-item-text">
      <router-link :to="`/news/${page}`" class="news-body-item-link">
        <h4>
         {{ title }}
        </h4>
      </router-link>
      <p class="news-description">
       {{ precipitation }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
    props: {
        icon: String , 
        title: String,
        precipitation: String,
        page: Number
    }
};
</script>

<style >
</style>