<template>
  <header class="position-absolute w-100">
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
      <div class="container-xl">
        <div class="navbar-brand">
          
          <h3><span class="color-yellow">Vue</span>Weather</h3>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <router-link :to="{ name: 'Main' }" class="nav-link"
                >Погода</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'News' }" class="nav-link"
                >Новости</router-link
              >
            </li>
            <li class="nav-item nav-item-sub">
              <a @click.prevent="$emit('openModal')" class="nav-link"
                >Подписаться на уведомления</a
              >
            </li>
          </ul>
        </div>
        <div class="navbar-search d-flex">
          <form
            class="ms-lg-2 navbar-input"
            @submit.prevent="searchNewLocation"
          >
            <div class="input-group input-group-border col-md-2">
              <input
                type="text"
                class="form-control"
                placeholder="Найдите свой город"
                v-model="city"
              />
              <button class="btn btn-primary">Поиск</button>
            </div>
          </form>
          <div class="dropdown me-lg-3">
            <button
              class="dropdown-toggle text-white btn"
              @click="dropdownToggle"
            >
              {{ lang }}
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              :class="{ show: dropdown }"
              v-if="dropdown"
            >
              <li class="dropdown-item" @click="changeLang('RU')">RU</li>
              <li class="dropdown-item" @click="changeLang('UA')">UA</li>
            </ul>
          </div>
          <button class="navbar-toggler" @click="navbarToggle">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  emits: ["openModal"],
  setup() {
    const store = useStore();
    const lang = ref("RU");
    const dropdown = ref(false);
    const navbarToggle = () =>
      document.querySelector(".navbar-collapse").classList.toggle("show");
    const dropdownToggle = () => (dropdown.value = !dropdown.value);
    const city = ref("");
    const changeLang = (val) => {
      lang.value = val;
      store.commit("language/changeLanguage", lang.value);
      dropdown.value = false;
    };
    const searchNewLocation = async () => {
      if (city.value.length >= 2) {
        await store.dispatch("location/updateNewLocation", city.value);
        city.value = ''
      } 
    };

    return {
      navbarToggle,
      dropdownToggle,
      lang,
      changeLang,
      dropdown,
      searchNewLocation,
      city,
    };
  },
};
</script>

<style>
.nav-item-sub {
  cursor: pointer;
}
.dropdown-menu-end {
  left: 0px;
}
@media (max-width: 1320px) {
  .dropdown-menu-end {
    left: -50px;
  }
}
</style>