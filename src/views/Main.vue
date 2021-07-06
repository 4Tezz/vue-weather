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
                <a :href="`https://www.google.com/search?q=${city}`" target="_blank"> {{ city || "Город" }} </a>
              </h5>
              <small class="weather-change">
                <router-link to="/weather/daily">Посмотреть на весь день</router-link>
              </small>
            </div>
            <div class="wether-body row">
              <div class="col-5 first-weather">
                <div class="weather-paraments d-flex">
                  <h1 class="mt-auto">
                    {{ converterKelvin(currentWeather.temp) }}
                  </h1>
                  <div class="d-flex ms-4">
                    <img
                      :src="`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`"
                      class="weather-paraments-img"
                      alt="icon"
                    />
                    <p class="mt-auto">
                      {{ currentWeather.weather[0].description }}
                    </p>
                  </div>
                </div>
                <div class="weather-options">
                  <ul class="weather-list p-0">
                    <li class="weather-item d-flex justify-content-between">
                      <span>По ощущению</span>
                      <p>{{ converterKelvin(currentWeather.feels_like) }}</p>
                    </li>
                    <li class="weather-item d-flex justify-content-between">
                      <span>Ветер</span>
                      <p>{{ currentWeather.wind_speed.toFixed() }} м/с, СВ</p>
                    </li>
                    <li class="weather-item d-flex justify-content-between">
                      <span>Влажность</span>
                      <p>{{ currentWeather.humidity }}%</p>
                    </li>
                    <li class="weather-item d-flex justify-content-between">
                      <span>Осадки</span>
                      <p>{{ currentWeather.uvi }}mm</p>
                    </li>
                    <li class="weather-item d-flex justify-content-between">
                      <span>Давления</span>
                      <p>{{ currentWeather.pressure }}</p>
                    </li>
                    <li class="weather-item d-flex justify-content-between">
                      <span>Восход</span>
                      <p>
                        {{ converterUnix(currentWeather.sunrise, "getTime") }}
                      </p>
                    </li>
                    <li class="weather-item d-flex justify-content-between">
                      <span>Заход</span>
                      <p>
                        {{ converterUnix(currentWeather.sunset, "getTime") }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-7 second-weather">
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
        <section class="news-section">
      <div class="container-lg  d-flex justify-content-center">
        <div class="news-box">
          <div class="news-box-header">
            <h4>
              <router-link class="news-box-header-link" :to="{path: 'News'}">Новости Украины</router-link>
            </h4>
          </div>
          <div class="news-box-body">
            <ul class="news-list">
              <AppNewsMini  v-for="el,idx in newsGroupMini" :page="idx" :key="el" :newsTitle="el.title" :newsImage="el.icons[0]"/>
            </ul>
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
import AppWindyPrecipitation from '@/components/ui/AppWindyPrecipitation.vue'
import AppNewsMini from '@/components/ui/AppNewsMini.vue'

export default {
  setup() {
    const store = useStore();
    const city = computed(() => store.getters["location/getLocation"]);
    const currentWeather = computed( () => store.getters["weather/getCurrentWeather"] );
    const newsGroupMini = computed(() => store.getters['news/getNews'].filter((el , idx) => {if(idx <= 4) return el}))
    const dayWeather = computed(() =>
      store.getters["weather/getDayWeather"].filter((el, idx) => {
        if (idx == 18 || idx == 21 || idx == 24 || idx == 27 || idx == 30)
          return el;
      })
    );

    return {
      city,
      currentWeather,
      converterKelvin,
      converterUnix,
      dayWeather,
      newsGroupMini,
    };
  },
  components: { AppWindySpeed, AppWeatherCard , AppWindyPrecipitation , AppNewsMini },
};
</script>

<style>
</style>