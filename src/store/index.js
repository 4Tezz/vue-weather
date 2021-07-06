import { createStore } from 'vuex'
import location from './modules/location.module.js'
import weather from './modules/weather.module.js'
import language from './modules/language.module.js'
import news from './modules/news.module.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    subscriptionNotifications(_, val) {
      if(val == true ) {
        console.log('subscriptioActive');
      } else {
        console.log('subscriptioDeActive');
      }
    }
  },
  modules: {
    location,
    weather,
    language,
    news
  }
})
