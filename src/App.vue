<template>
  <div id="app" class="app">
			<h1>{{ restaurantName }}</h1>
			<p class="description">
				Bienvenue dans notre café {{ restaurantName }} ! Nous sommes réputés pour notre
				pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le matin
				ou avec un goûter réconfortant. Mais attention, vous verrez qu'il est
				difficile de s'arrêter.
			</p>

            <section class="menu">
				<h2>Menu</h2>
				<!-- <div class="menu-item" v-for="item in simpleMenu">
					<img
						class="menu-item__image"
						:src="item.image.source"
						:alt="item.image.alt"
					/>
					<div>
						<h3>{{ item.name }}</h3>
						<p v-if="item.inStock">En stock</p>
						<p v-else>En rupture de stock</p>
						<div>
							<label for="add-item-quantity">Quantité : {{ item.quantity }}</label>
							<input id="add-item-quantity" type="number" v-model="item.quantity" />
							<button @click="addToShoppingCart(item.quantity)">Ajouter au panier d'achat</button>
						</div>
					</div>
				</div> -->
			</section>

			<aside class="shopping-cart">
				<h2>Panier d'achat: {{ itemsInCart }} articles</h2>
			</aside>

            <h2>Contactez nous</h2>
			<p>Adresse : {{ address }}</p>
			<p>Téléphone : {{ phone }}</p>
			<p>Email : {{ email }}</p>
			<p>Horaires :</p>
			<ul>
				<li>L-V: 06:00 à 16:00</li>
				<li>Samedi: 07:00 à 14:00</li>
				<li>Dimanche: 07:00 à 12:00</li>
			</ul>

			<footer class="footer">
				<p>Copyright {{ restaurantName }} {{ getCurrentYear }}</p>
			</footer>
		</div>
</template>

<script>
// import NavLink from './components/NavLink.vue'

export default {
  name: 'App',
  // components: {
  
  // },
  data() {
    return {
      restaurantName: "Café avec Vue",
      address: "18 avenue du Beurre, Paris, France",
      phone: "01 88 88 88 88",
      email: "hello@cafewithavue.bakery",
      itemsInCart:0,
      simpleMenu: [
        {
        name: "Croissant",
        image: {
          source: "img/croissant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        quantity: 10
        },
        {
        name: "Baguette de pain",
        image: {
          source: "img/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        quantity: 9
        },
        {
        name: "Éclair",
        image: {
          source: "img/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        quantity: 8
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
