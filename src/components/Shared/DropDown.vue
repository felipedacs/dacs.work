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
          <div class="field" v-for="(item, index) in itens">
            <b-switch :type="classe" v-model="tags[index]" :true-value="item" :false-value="null" @click.native="switchChange(item)">
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
      langs: [],
      frameworks: [],
      libs: [],
      tags: [],


      todosV: true,
      ligaTodos: true,
    }
  },
  created() {
    //do something after creating vue instance
    this.leUsadas();

    this.emitChange();
  },
  watch: {
      // sempre que a pergunta mudar, essa função será executada
      tags: function (newValues, oldValues) {
        let nenhumaTag = true;
        for (var i = 0; i < newValues.length; i++) {
          if (newValues[i] != null) {
            nenhumaTag = false;
            break;
          }
        }
        if (nenhumaTag) {
          this.todosV = false;
        }
      }
    },
  methods: {
    switchChange(tag){
      if (!this.todosV) {
        this.ligaTodos = false;
        this.todosV = true;
      }
    },
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
    leUsadas() {
      // per project
      for (var i = 0; i < this.$store.state.projetosDev.length; i++) {

        switch (this.espec) {
          case 'linguagens':
          this.especFiltrada(this.$store.state.projetosDev[i].langs, this.langs);
          break;
          case 'frameworks':
          this.especFiltrada(this.$store.state.projetosDev[i].frameworks, this.frameworks);
          break;
          case 'bibliotecas':
          this.especFiltrada(this.$store.state.projetosDev[i].libs, this.libs);
          break;
        }
      }
    },
    especFiltrada(attrProject, attrComponent){
      //per attr in project
      for (var j = 0; j < attrProject.length; j++) {
        let encontrou = false;
        // per attr in component
        for (var q = 0; q < attrComponent.length; q++) {
          if (attrComponent[q] == attrProject[j]) {
            encontrou = true;
          }
        }
        if (!encontrou) {
          attrComponent.push(attrProject[j])
          this.tags.push(attrProject[j])
        }
      }
    }
  },
  computed: {
    todos: {
      // getter
      get: function () {
        return this.todosV
      },
      // setter
      set: function (newValue) {
        if (this.ligaTodos) {
          if (newValue) {
            switch (this.espec) {
              case 'linguagens':
              this.tags = this.langs.slice()
              break;
              case 'frameworks':
              this.tags = this.frameworks.slice()
              break;
              case 'bibliotecas':
              this.tags = this.libs.slice()
              break;
            }
          } else {
            for (var i = 0; i < this.tags.length; i++) {
              this.tags[i] = null
            }
          }
        }
        this.ligaTodos= true;
        this.emitChange();
        this.todosV = newValue;
      }
    },
    itens: function(){
      let retorno;
      switch (this.espec) {
        case 'linguagens':
        retorno = this.langs
        break;
        case 'frameworks':
        retorno = this.frameworks
        break;
        case 'bibliotecas':
        retorno = this.libs
        break;
      }
      return retorno;
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
