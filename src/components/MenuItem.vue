<template>
    <div class="menu-item">
        <img class="menu-item__image" :src="image.src" :alt="image.alt">
        <div>
            <h3>{{ name }}</h3>
            <p>Prix : {{ price }}</p>
            <p v-if="inStock">En Stock</p>
            <p v-else>En rupture de stock</p>
            <div>
                <label for="add-item-quantity">Quantité : {{ quantity }}</label>
                <input id="add-item-quantity" type="number" v-model.number="quantity">
                <button @click="addToShoppingCart(quantity)">Ajouter au panier</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: ['image','name', 'inStock', 'quantityInitial', 'priceInitial', 'addToShoppingCart'],
    data() {
        return {
            quantity: this.quantityInitial,
            price: this.priceInitial,
        }
    },
    beforeMount() {
        const dateOfTheDay = new Date().getDate();
        if (!dateOfTheDay % 2) {
            this.price = (this.price * 0.9).toFixed(2); 
        }
    }
}
</script>

<style lang="scss">
.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;

  &__image {
  max-width: 300px;
}
}


</style>