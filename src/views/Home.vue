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
          :quantityInStock="item.quantity"
          :inStock="item.inStock"
          :addToShoppingCart="addToShoppingCart"
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

export default {
  name: 'Home',
  components: {
    MenuItem
  },
  data() {
    return {
      restaurantName: "Café avec Vue",
      itemsInCart:0,
      simpleMenu: [
        {
          name: "Croissant",
          image: {
            src: "img/croissant.jpg",
            alt: "Un croissant"
          },
          inStock: true,
          quantity: 1
        },
        {
          name: "Baguette de pain",
          image: {
            src: "img/french-baguette.jpeg",
            alt: "Quatre baguettes de pain"
          },
          inStock: true,
          quantity: 1
        },
        {
          name: "Éclair",
          image: {
            src: "img/eclair.jpg",
            alt: "Éclair au chocolat"
          },
          inStock: false,
          quantity: 1
        }
      ],
    }
  },
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    addToShoppingCart(number) {
      this.itemsInCart += number;
    },
  },
}
</script>

<style lang="scss">
.home {
  position:relative;
  padding-top:5rem;
}
.shopping-cart {
    position:absolute;
    right:20px;
    top:20px;
}
</style>
