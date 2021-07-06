<template>
        <section class="main-news">
            <div class="container-lg">
                <div class="news-header">
                    <h4>
                        <router-link  class="news-header-link" :to="{path: 'News'}">Все новости</router-link>
                    </h4>
                </div>
                <div class="news-body">
                    <ul class="news-body-list">
                           <AppNewsMiddle v-show="news" v-for="el,idx in news" :page="idx" :key="el" :icon="el.icons[0]" :title="el.title" :precipitation="el.description"/>
                    </ul>
                </div>
            </div>
        </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AppNewsMiddle from '../components/ui/AppNewsMiddle.vue'
export default {
    setup() {
        const store = useStore()
        const news = computed(() => store.getters['news/getNews'])
        return {
          news 
        }
    },
    components: { AppNewsMiddle }
}
</script>

<style >
.news-header-link{text-decoration: none;color: #000000 !important;}.news-description{ font-size: 15px;}
</style>