<template>
  <div id="app">
    <nav>
      <NavLink url="/" text ="Accueil" /> 
      <NavLink url="/about" text ="A propos" />
      <NavLink url="/contact" text ="Contact" />
    </nav>
  </div>
</template>

<script>
import NavLink from './components/NavLink.vue'

export default {
  name: 'App',
  components: {
    NavLink
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
    list-style-type: none;
    padding-left:0;
}
h1 {
    margin-top:6rem;
}
.shopping-cart {
    position:absolute;
    right:30px;
    top:0;
}
</style>
