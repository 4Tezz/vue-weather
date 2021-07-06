<template>
  <AppModal v-if="modal" :visibility="modal" @closeModal="modal = false" />
  <div class="loader-box" v-if="loader">
    <AppLoader color="text-primary" />
  </div>
  <div v-else>
    <the-navbar @openModal="modal = true"></the-navbar>
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppModal from "@/components/ui/AppModal.vue";
import { useStore } from "vuex";
import { onBeforeMount, ref } from "vue";
export default {
  setup() {
    onBeforeMount(async () => {
      const cordinate = await store.dispatch("location/loadLocation");
      await store.dispatch("weather/loadWeather", cordinate);
      store.dispatch("weather/updateWeather");
      loader.value = false;
    });
    const store = useStore();
    const loader = ref(true);
    const modal = ref(false);

    return {
      loader,
      modal,
    };
  },
  components: { TheNavbar, AppLoader, AppModal },
};
</script>

<style>
.loader-box {
  width: 100%;
  height: 100vh;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;
}
</style>