<template>
  <div class="home">
      <h1>{{ restaurantName }}</h1>
			<p class="description">
				Bienvenue dans notre café {{ restaurantName }} ! Nous sommes réputés pour notre
				pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le matin
				ou avec un goûter réconfortant. Mais attention, vous verrez qu'il est
				difficile de s'arrêter.
			</p>

      <section class="menu" >
        <h2>Menu</h2>
        <MenuItem 
          v-for="item in simpleMenu"
          :key="item.name"
          :name="item.name"
          :image="item.image"
          :quantityInitial="item.quantity"
          :priceInitial="item.price"
          :inStock="item.inStock"
        />
			</section>

			<aside class="shopping-cart">
				<h2>Panier d'achat: {{ itemsInCart }} articles</h2>
			</aside>

			<footer class="footer">
				<p>Copyright {{ restaurantName }} {{ getCurrentYear }}</p>
			</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuItem from '@/components/MenuItem'
import { mapState, mapGetters } from 'vuex'


export default {
  name: 'Home',
  components: {
    MenuItem
  },
  computed: {
    ...mapState({
        restaurantName: 'restaurantName',
        simpleMenu: 'simpleMenu',
        itemsInCart: 'itemsInCart'
    }),
    ...mapGetters(['getCurrentYear'])
  },
}
</script>

<style lang="scss">
.home {
  position:relative;
  padding-top:5rem;
}
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-style: italic;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shopping-cart {
    position:absolute;
    right:20px;
    top:20px;
}
</style>
