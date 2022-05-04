<template>
  <div class="menu-item">
    <img
        class="menu-item__image"
        v-bind:src="image.source"
        v-bind:alt="image.alt"
    />
    <div>
      <h3>{{ name }}</h3>
      <p v-if="inStock">En stock</p>
      <p v-else>En rupture de stock</p>
      <div>
        <p>Price: {{ generatedPrice }}
          <span v-if="onSale">Reduction 10%</span>
        </p>
        <label for="add-item-quantity">Quantité : {{ quantity }}</label>
        <input v-model.number="quantityModel" id="add-item-quantity" type="number"/>
        <BaseButton v-on:click="updateShoppingCart(quantityModel)">Ajouter au panier d'achat</BaseButton>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from './BaseButton';
import {mapActions} from 'vuex';

export default {
  name: 'MenuItem',
  components: {BaseButton},
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    inStock: {
      type: Boolean,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    price: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      onSale: false,
      quantityModel: 1
    }
  },
  methods: {
    ...mapActions(['updateShoppingCart'])
  },
  computed: {
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2);
      } else return this.price;

    }
  },
  beforeMount() {
    const today = (new Date).getDate();
    if (today % 2 === 0) {
      this.onSale = true;
    }
  }

}
</script>
<style scoped>
.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}
</style>