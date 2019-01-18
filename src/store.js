import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projetosDev: [
      {
        nome: 'Randomaster',
        linkRepo: 'https://github.com/felipedacs/kros-randomaster',
        linkDeploy: 'https://felipedacs.pythonanywhere.com/randomaster',
        langs: ['python'],
        frameworks: ['flask'],
        libs: [],
        percentConcluido: 80
      },
      {
        nome: 'Kamas',
        linkRepo: 'https://github.com/felipedacs/kamas',
        linkDeploy: 'https://dacs.run/kamas',
        langs: ['javascript'],
        frameworks: [],
        libs: ['jquery'],
        percentConcluido: 95
      },
      {
        nome: 'Carrinho top',
        linkRepo: 'https://github.com/felipedacs/carrinho-top',
        linkDeploy: 'https://dacs.run/carrinho-top',
        langs: ['javascript'],
        frameworks: ['vuejs'],
        libs: [],
        percentConcluido: 75
      },
      {
        nome: 'Yugo',
        linkRepo: 'https://github.com/felipedacs/yugo',
        linkDeploy: 'https://dacs.run/yugo/',
        langs: ['go', 'javascript'],
        frameworks: ['vuejs'],
        libs: [],
        percentConcluido: 65
      }
    ]
  },
  mutations: {
  },
  actions: {
  }
})
