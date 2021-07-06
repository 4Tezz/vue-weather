<template>
  <section class="main-section">
    <div class="container-lg d-flex justify-content-center">
      <div class="weather-box p-lg-4 p-md-4">
        <div class="weather-card">
          <div
            class="
              weather-card-header
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <h5 class="weather-city">
              <a
                :href="`https://www.google.com/search?q=${city}`"
                target="_blank"
              >
                {{ city || "Город" }}
              </a>
            </h5>
            <small class="weather-change">
              <router-link to="/main">
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
            </small>
          </div>
          <div class="wether-body row">
            <div class="second-weather current-weather">
              <ul class="weather-days">
                <AppWeatherCard
                  v-for="el in dayWeather"
                  :key="el"
                  :temp="el.temp"
                  :time="el.dt"
                  :icon="el.weather[0].icon"
                />
              </ul>
              <p class="weather-days-windy">Скорость ветра, м/с</p>
              <ul class="weather-days">
                <AppWindySpeed
                  v-for="el in dayWeather"
                  :key="el"
                  :speed="el.wind_speed"
                />
              </ul>
              <p class="weather-days-windy">Вероятность выпадения осадков</p>
              <ul class="weather-days">
                <AppWindyPrecipitation
                  v-for="el in dayWeather"
                  :key="el"
                  :precipitation="el.pop"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import converterKelvin from "@/utils/converterKelvin.js";
import converterUnix from "@/utils/converterUnix.js";
import AppWindySpeed from "@/components/ui/AppWindySpeed";
import AppWeatherCard from "@/components/ui/AppWeatherCard.vue";
import AppWindyPrecipitation from "@/components/ui/AppWindyPrecipitation.vue";

export default {
  props: ["currentWeather"],
  setup() {
    const store = useStore();
    const city = computed(() => store.getters["location/getLocation"]);
    const dayWeather = computed(() =>
      store.getters["weather/getDayWeather"].filter((el, idx) => {
        if (idx % 5 == 0 && idx <= 35)
          return el;
      })
    );

    return {
      city,
      converterKelvin,
      converterUnix,
      dayWeather,
    };
  },
  components: { AppWindySpeed, AppWeatherCard, AppWindyPrecipitation },
};
</script>

<style>
</style>