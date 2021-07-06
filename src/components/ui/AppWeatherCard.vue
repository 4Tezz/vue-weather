<template>
  <li class="weather-days-item">
    <h4> {{ converterUnix(time, 'hours') }}<span class="badge">00</span></h4>
    <div class="weather-days-img">
      <img :src="`https://openweathermap.org/img/w/${icon}.png`" alt="icon" />
    </div>
    <h4> {{ converterKelvin(temp) }} </h4>
  </li>
</template>

<script>
import  converterKelvin  from '@/utils/converterKelvin.js'
import converterUnix from '@/utils/converterUnix.js'

export default {
    props: {
        temp: Number,
        time: Number,
        icon: String
    },
    setup() {
        return {
            converterKelvin,
            converterUnix,
        }
    }
    
};
</script>

<style>
</style>