export default {
    namespaced: true,
    state() {
        return {
            lang: 'RU'
        }
    },
    getters: {
        getLenguage(state) {
            return state.lang
        }
    },
    mutations: {
        changeLanguage(state, secondLang) {
            state.lang = secondLang
            console.log(state.lang);
        }
    }
}