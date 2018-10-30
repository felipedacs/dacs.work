<template lang="html">
  <div class="">
    <h1 class="has-text-centered">Projetos</h1>

    <!-- visualizar resultados -->
    <!-- {{langs}}
    {{frameworks}}
    {{libs}} -->

    <div class="columns">
      <div class="column is-one-quarter">
        <div class="notification is-light has-text-centered">
          <p class="title n-project">{{qtdProjetos}}/{{$store.state.projetosDev.length}}</p>
          <p class="help">{{textoQtdProjetos}}</p>

          <div class="drops">

            <b-tooltip label="Linguagens de programação">
              <dropdown @alteraLinguagem="alteraLinguagem($event)" :ip="true" classe="is-primary" espec="linguagens">
                <!-- <span class="icon-hammer"></span> -->
              </dropdown>
            </b-tooltip>

            <b-tooltip label="Frameworks" type="is-info">
              <dropdown @alteraFramework="alteraFramework($event)" :ii="true" classe="is-info" espec="frameworks">
                <!-- <span class="icon-magic-wand"></span> -->
              </dropdown>
            </b-tooltip>

            <b-tooltip label="Bibliotecas" type="is-warning">
              <dropdown @alteraBiblioteca="alteraBiblioteca($event)" :iw="true" classe="is-warning" espec="bibliotecas">
                <!-- <span class="icon-books"></span> -->
              </dropdown>
            </b-tooltip>

          </div>
        </div>
      </div>
      <div class="column">

        <div class="columns is-multiline">
          <div class="column is-narrow" v-for="(projeto, index) in this.$store.state.projetosDev">
            <Project :projeto="projeto" v-show="mostraProjeto(projeto)"></Project>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import dropdown from '@/components/Shared/DropDown.vue'
import Project from '@/components/Devs/Project.vue'
export default {
  created() {
  },
  components: {
    dropdown,
    Project,
  },
  data(){
    return{
      textoQtdProjetos: '',
      langs: [],
      frameworks: [],
      libs: [],
    }
  },
  computed: {
    qtdProjetos: function(){
      let contador = 0;
      let encontrou;
      let projetos = this.$store.state.projetosDev;
      for (var k = 0; k < projetos.length; k++) {
        encontrou = false;

        for (var i = 0; i < projetos[k].langs.length; i++) {
          for (var j = 0; j < this.langs.length; j++) {
            if (!encontrou && projetos[k].langs[i] == this.langs[j]) {
              // console.log(projeto.nome);
              encontrou = true;
              contador++;
              break;
            }
          }
        }
        for (var i = 0; i < projetos[k].frameworks.length; i++) {
          for (var j = 0; j < this.frameworks.length; j++) {
            if (!encontrou && projetos[k].frameworks[i] == this.frameworks[j]) {
              // console.log(projeto.nome);
              encontrou = true;
              contador++;
              break;
            }
          }
        }
        for (var i = 0; i < projetos[k].libs.length; i++) {
          for (var j = 0; j < this.libs.length; j++) {
            if (!encontrou && projetos[k].libs[i] == this.libs[j]) {
              // console.log(projeto.nome);
              encontrou = true;
              contador++;
              break;
            }
          }
        }
      }
      if (contador == 0 || contador > 1) {
        this.textoQtdProjetos = "projetos filtrados"
      } else {
        this.textoQtdProjetos = "projeto filtrado"
      }
      return contador;


    }
  },
  methods: {
    alteraLinguagem(linguagens){
      this.langs = linguagens;
    },
    alteraFramework(frameworks){
      this.frameworks = frameworks;
    },
    alteraBiblioteca(libs){
      this.libs = libs;
    },
    mostraProjeto(projeto) {
      // let retorno = false;
      for (var i = 0; i < projeto.langs.length; i++) {
        for (var j = 0; j < this.langs.length; j++) {
          if (projeto.langs[i] == this.langs[j]) {
            // console.log(projeto.nome);
            return true;
          }
        }
      }
      for (var i = 0; i < projeto.frameworks.length; i++) {
        for (var j = 0; j < this.frameworks.length; j++) {
          if (projeto.frameworks[i] == this.frameworks[j]) {
            // console.log(projeto.nome);
            return true;
          }
        }
      }
      for (var i = 0; i < projeto.libs.length; i++) {
        for (var j = 0; j < this.libs.length; j++) {
          if (projeto.libs[i] == this.libs[j]) {
            // console.log(projeto.nome);
            return true;
          }
        }
      }
      return false;
    }
  }
}
</script>

<style lang="css">
.n-project{
  margin-bottom: 0 !important;
}

.notification{
  padding: 1.25rem 1.5rem 1.25rem 1.5rem !important;
}

/* .drops{
  position: sticky !important;
  top: 50px !important;
} */
</style>
