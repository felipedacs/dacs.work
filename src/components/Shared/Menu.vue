<template lang="html">
  <div class="">
    <!-- Hero footer: will stick at the bottom -->
    <div class="menu">
      <nav class="tabs is-boxed is-centered">
        <div class="container">
          <ul>
            <li :class="{ 'is-active': ehAbaAtiva('About me') }">
              <router-link to="/">About me</router-link>
            </li>
            <li :class="{ 'is-active': ehAbaAtiva('Devs') }">
              <router-link to="devs">Devs</router-link>
            </li>
            <!-- <li :class="{ 'is-active': ehAbaAtiva('GameDevs'), 'is-disabled': true }">
              <router-link to="gameDevs">GameDevs</router-link>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ehAbaAtiva(nome) {
      if (nome == this.$route.name) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="css">
.is-disable{
pointer-events: none !important;
opacity: .65 !important;
}
</style>
