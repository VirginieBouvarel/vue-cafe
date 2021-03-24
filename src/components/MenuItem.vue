<template>
    <div class="menu-item">
        <img class="menu-item__image" :src="image.src" :alt="image.alt">
        <div>
            <h3>{{ name }}</h3>
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
    props: ['image','name', 'inStock', 'quantityInStock', 'addToShoppingCart'],
    data() {
        return {
            quantity: this.quantityInStock,
        }
    }
}
</script>

<style>

</style>