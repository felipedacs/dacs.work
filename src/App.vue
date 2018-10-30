<template>
  <div id="app">
    <section class="hero is-primary is-small">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a href="https://www.linkedin.com/in/felipedacs/" target="_blank" class="navbar-item" title="Linkedin Account">
            <i class="icon-linkedin-square"></i>
          </a>
          <a href="https://github.com/felipedacs" target="_blank" class="navbar-item" title="Github Account">
            <i class="icon-github"></i>
          </a>
          <a href="https://gitlab.com/felipedacs" target="_blank" class="navbar-item" title="Gitlab Account">
            <i class="icon-gitlab"></i>
          </a>
          <a href="mailto:felipe.dacs@gmail.com?Subject=contact from dacs-work" target="_blank" title="felipe.dacs@gmail.com" class="navbar-item">
            <i class="icon-envelope"></i>
          </a>
          <a href="https://www.slideshare.net/felipedacs" target="_blank" class="navbar-item" title="SlideShare Account">
            <i class="icon-slideshare"></i>
          </a>
          <!-- <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span> -->
        </div>
        <!-- <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
             <a href="#" class="navbar-item">
              Blog escalímetro
            </a>
          </div>
        </div> -->
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Felipe Silva
      </h1>
      <h2 class="subtitle">
        Desenvolvedor jr
      </h2>
    </div>
  </div>

<Menu></Menu>
</section>

<div class="content about">
<router-view/>
</div>

<footer class="footer">
  <div class="content">
    <div class="columns">
      <div class="column">
        <p>
          Pode entrar em contato comigo através do e-mail <a href="mailto:felipe.dacs@gmail.com?Subject=contact from dacs-work" target="_blank">felipe.dacs@gmail.com</a>, <a href="https://www.linkedin.com/in/felipedacs/" target="_blank">linkedin</a> ou discord (dacs#0822).
        </p>
      </div>
      <div class="column">
        <FormularioEmail></FormularioEmail>
      </div>
    </div>

  </div>
</footer>
  </div>
</template>

<script type="text/javascript">
import Menu from '@/components/Shared/Menu.vue'
import FormularioEmail from '@/components/Shared/FormularioEmail.vue'
export default{
  components: {
    Menu,
    FormularioEmail
  },
  methods: {
    // from bulma.io
    navburger() {
      //do something after creating vue instance
      document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
      });
    }
  },
  created() {
    this.navburger();
  }
}
</script>

<style>
@import '../src/assets/icomoon/style.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.hero.is-primary a.navbar-item:hover{
  background-color: transparent !important;
}

.hero.is-primary{
  background: linear-gradient(to top right, #524ad0 10%, #D099FA) !important;
}

.content p a {
  color: #7957d5 !important;
}

.content a:hover {
  color: #363636 !important;
}

a{
  text-decoration: none !important;
}
</style>
