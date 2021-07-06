<template>
  <section class="news-layout">
    <div class="container-lg">
      <div class="news-layout-back">
        <router-link :to="{name: 'News'}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          Вернуться назад
        </router-link>
      </div>
      <div class="news-layout-container d-flex flex-column">
        <h3 class="news-layout-title">
           {{ currentNew.title }}
        </h3>
        <p class="news-layout-prescription pe-5">
           {{ currentNew.description }}
        </p>
        <div class="news-layout-img">
          <img
            :src="currentNew.icons[0]"
            alt="1"
          />
        </div>
        <p class="news-layout-text pe-5">
           {{ currentNew.text }}
        </p>
        <div class="news-layout-img" v-if="currentNew.icons[1]">
          <img
            :src="currentNew.icons[1]"
            alt="1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  props: ['id'],
  setup(props) {
    const store = useStore()
    const currentNew = computed(() => store.getters['news/getNews'][props.id])
    return {
      currentNew
    }
  }
};
</script>

<style>
</style>
