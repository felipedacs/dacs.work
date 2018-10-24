<template lang="html">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title projeto-nome">
        {{projeto.nome}}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <b-taglist>
          <b-tag type="is-primary" v-for="lang in projeto.langs" :key="lang.key">{{lang}}</b-tag>
          <b-tag type="is-info" v-for="framework in projeto.frameworks" :key="framework.key">{{framework}}</b-tag>
          <b-tag type="is-warning" v-for="lib in projeto.libs" :key="lib.key">{{lib}}</b-tag>
        </b-taglist>
      </div>
      <progress class="progress is-primary is-small" :value="projeto.percentConcluido" max="100">15%</progress>
    </div>
    <footer class="card-footer">
      <a :href="projeto.linkRepo" class="card-footer-item" target="_blank"><span class="icon-bookmark"></span></a>
      <a :href="projeto.linkDeploy" class="card-footer-item" target="_blank"><span class="icon-forward"></span></a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['projeto'],
  data(){
    return{
    }
  }
}
</script>

<style lang="css">
.projeto-nome{
  margin-bottom: 0 !important;
}

.card-footer-item-disabled{
  color: #F5F5F5 !important;
}

.card-footer-item:hover{
  background-color: #F5F5F5;
}
</style>
