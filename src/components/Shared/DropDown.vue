<template lang="html">
  <div class="dropdown is-hoverable drop">
    <div class="dropdown-trigger">
      <button :class="{'button': true, 'is-small':true, 'is-fullwidth': true, 'is-primary': ip, 'is-info': ii, 'is-warning': iw}" aria-haspopup="true" aria-controls="dropdown-menu4">

        <slot></slot>

      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item">
          <div class="field">
            <!-- <button type="button" class="button" @click="up(itens.length)">Retrieve</button> -->
            <div class="field">
              <b-switch :type="classe" v-model="todos">
                on/off todos
              </b-switch>
            </div>
          </div>
          <hr class="dropdown-divider">
          <div class="field" v-for="(item, index) in itens" @click="change()">
            <b-switch :type="classe" v-model="tags[index]" :true-value="item" :false-value="null">
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

      todosV: true
    }
  },
  created() {
    //do something after creating vue instance
    this.leUsadas();

    this.change();
  },
  methods: {
    change(){
      switch (this.espec) {
        case 'linguagens':
        // console.log(this.tags);
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
    up(length){
      if (this.upTags) {
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
        this.upTags = false;
      } else {
        this.tags.splice(0,this.tags.length);
        this.upTags = true;
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
          this.upTags = false;
        } else {
          this.tags.splice(0,this.tags.length);
          this.upTags = true;
        }
        this.change();
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
