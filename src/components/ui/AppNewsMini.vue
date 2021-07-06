<template>
  <li class="news-list-item">
    <div class="news-list-card">
      <div class="news-list-card-img">
        <img
          :src="newsImage"
          alt="news1"
        />
      </div>
      <div class="news-list-card-body">
        <router-link :to="`/news/${page}`" class="news-list-card-text">
          {{ newsTitle }}
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
    props: {
        newsImage: String,
        newsTitle: String,
        page: Number
    }
};
</script>

<style>
</style>