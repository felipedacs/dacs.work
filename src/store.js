import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projetosDev: [
      {
        nome: "Randomaster",
        linkRepo: "https://github.com/felipedacs/kros-randomaster",
        linkDeploy: "https://felipedacs.pythonanywhere.com/randomaster",
        langs: ["html, css, js", "python"],
        frameworks: ["flask","bootstrap"],
        libs: [],
        percentConcluido: 80,
      },
      {
        nome: "Kamas",
        linkRepo: "https://github.com/felipedacs/kamas",
        linkDeploy: "https://dacs.run/kamas",
        langs: ["html, css, js"],
        frameworks: ['bootstrap'],
        libs: ["jquery"],
        percentConcluido: 95,
      },
      {
        nome: "Carrinho top",
        linkRepo: "https://github.com/felipedacs/carrinho-top",
        linkDeploy: "https://dacs.run/carrinho-top",
        langs: ["html, css, js"],
        frameworks: ["vuejs", "bulma"],
        libs: [],
        percentConcluido: 75,
      }
    ],
  },
  mutations:{
  },
  actions: {
  }
})
