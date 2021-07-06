import store from './../index.js'

export default {
    namespaced: true,
    state() {
        return {
            currentWeather: { temp: 666, feels_like: 999, wind_speed: 999, humidity: 999, uvi: 999, pressure: 999, sunrise: 999, sunset: 999, weather: [{ description: "солнечно", icon: "01d" }] },
            dayWeather: []
        }
    },
    getters: {
        getCurrentWeather(state) {
            return state.currentWeather
        },
        getDayWeather(state) {
            return state.dayWeather
        }
    },
    mutations: {
        setCurrentWeather(state, val) {
            state.currentWeather = val
        },
        setDayWeather(state, val) {
            state.dayWeather = val
        },
    },
    actions: {
        async loadWeather({ commit }, { lat, lon }) {
            const key = process.env.VUE_APP_WEATHER_KEY
            const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&exclude=daily&appid=${key}`).then(el => el.json())
            commit('setCurrentWeather', data.current)
            commit('setDayWeather', data.hourly)
        },
        updateWeather({dispatch}) {
            setTimeout(() => {
                 dispatch('loadWeather' , store.getters['location/getCordiate'])
             }, 1800 * 1000)
        }
    }
}