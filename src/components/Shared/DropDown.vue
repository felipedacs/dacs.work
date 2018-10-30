<template lang="html">
  <div class="dropdown is-hoverable drop">
    <div class="dropdown-trigger">
      <b-switch :type="classe" v-model="todos" :true-value="true" :false-value="false">
      </b-switch>
    </div>
    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item">
          <hr class="dropdown-divider">
          <div class="field" v-for="(item, index) in tagsOrigin">
            <b-switch :type="classe" v-model="tags[index]" :true-value="item" :false-value="null" @click.native="switchChange()">
              {{item}}
            </b-switch>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: ['titulo','espec', 'ip', 'ii', 'iw', 'classe'],
  data(){
    return{
      qtdProjetos: 0,
      tags: [], //tags filtradas
      tagsOrigin: [], //TODAS tags dos projetos, podendo ser linguagem, frameworks, libs etc

      todosV: true, // propriedade de retorno da computed todos
      ligaTodos: true,
    }
  },
  created() {
    // mapeia todas tags da store
    this.mapeiaTags();

    // emite mudanças para atualizar o componente pai
    this.emitChange();
  },
  watch: {
      // sempre que a as tags forem modificadas será executada essa função
      tags: function (newValues, oldValues) {
        // tags nulas
        let tagsNulas = true;

        // loop para descobrir se existem tags diferentes de nulo
        for (var i = 0; i < newValues.length; i++) {
          if (newValues[i] != null) {
            tagsNulas = false;
            break;
          }
        }

        // caso existam somente tags nulas
        // o switch 'todos' será modificado para falso
        if (tagsNulas) {
          this.todosV = false;
        }
      }
    },
  methods: {
    switchChange(tag){
      // caso todos estejam desativados
      // o switch todos deve ser true novamente
      if (!this.todosV) {
        this.ligaTodos = false;
        this.todosV = true;
      }
    },

    // emite ação para componente mapActions
    emitChange(){
      switch (this.espec) {
        case 'linguagens':
        this.$emit('alteraLinguagem', this.tags)
        break;
        case 'frameworks':
        this.$emit('alteraFramework', this.tags)
        break;
        case 'bibliotecas':
        this.$emit('alteraBiblioteca', this.tags)
        break;
      }
    },


    mapeiaTags() {
      // per project
      for (var i = 0; i < this.$store.state.projetosDev.length; i++) {

        switch (this.espec) {
          case 'linguagens':
          this.especFiltrada(this.$store.state.projetosDev[i].langs);
          break;
          case 'frameworks':
          this.especFiltrada(this.$store.state.projetosDev[i].frameworks);
          break;
          case 'bibliotecas':
          this.especFiltrada(this.$store.state.projetosDev[i].libs);
          break;
        }
      }
    },
    especFiltrada(attrProject){
      //per attr in project
      for (var j = 0; j < attrProject.length; j++) {
        let encontrou = false;
        // per attr in component
        for (var q = 0; q < this.tagsOrigin.length; q++) {
          if (this.tagsOrigin[q] == attrProject[j]) {
            encontrou = true;
          }
        }
        if (!encontrou) {
          // variavel com o valor modelo de todas tags
          this.tagsOrigin.push(attrProject[j]);

          // variavel auxiliar modificavel
          // começa cheia
          this.tags.push(attrProject[j]);
        }
      }
    }
  },
  computed: {
    todos: {
      get: function () {
        return this.todosV;
      },

      // será setado em duas possibilidades:
      // 1) ao clicar sobre o mesmo
      // 2) ao alterar o valor do switch "todos" para ligado quando uma ou mais tags forem ativados,
      set: function (newValue) {
        // this.ligaTodos será falso caso a função seja chamada de switchChange
        if (this.ligaTodos) {
          if (newValue) {
              this.tags = this.tagsOrigin.slice();
          } else {
            for (var i = 0; i < this.tags.length; i++) {
              this.tags[i] = null;
            }
          }
        }

        // habilita ligaTodos para ser possivel ligar todos novamente
        this.ligaTodos = true;

        // atualiza componente pai
        this.emitChange();

        // atualiza variavel computada dessa função
        this.todosV = newValue;
      }
    }
  }
}
</script>

<style lang="css">
.dropdown-content{
  text-align: left !important;
}

.drop{
  margin: 0 !important;
}
</style>
