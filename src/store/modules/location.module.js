export default {
    namespaced: true,
    state() {
        return {
            city: null,
            lat: null,
            lon: null
        }
    },
    getters: {
        getLocation(state) {
            return state.city
        },
        getCordiate(state) {
            return {
                lat: state.lat,
                lon: state.lon,
            }
        }
    },
    mutations: {
        setLocation(state , val) {
            state.city = val.city
            state.lat = val.lat
            state.lon = val.lon
        },
    },
    actions: {
       async loadLocation({commit }) {
           const data = await fetch('http://ipwhois.app/json/?lang=ru').then(el => el.json())
            commit('setLocation' ,{
                city :  data.city,
                lat : data.latitude,
                lon : data.longitude
            })
            return {
                lat : data.latitude,
                lon : data.longitude
            }
        },
        async updateNewLocation({ commit , dispatch } , city) {
            const key = process.env.VUE_APP_LOCATION_KEY
            const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?components=route:Annankatu|administrative_area:${city}&language=RU&key=${key}`).then(el => el.json())
            const town = await data.results[0]
            commit('setLocation', {
                lat: town['geometry'].location.lat,
                lon: town['geometry'].location.lng,
                city: city
            })
            dispatch('weather/loadWeather' , {
                lat: town['geometry'].location.lat,
                lon: town['geometry'].location.lng,
            } , {root: true})
        }
    }
}