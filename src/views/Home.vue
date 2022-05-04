<template>
  <div id="app" class="app">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
      notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
      matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
      est difficile de s'arrêter.
    <h2>Menu</h2>

    <section class="menu">
      <MenuItem v-for="item in simpleMenu" :key="item.name" :name="item.name" :inStock="item.inStock"
                :quantity="item.quantity" :image="item.image" :price="item.price"/>
    </section>
    <aside class="shopping-cart">
      <h2>Panier d'achat: {{ shoppingCart }} articles</h2>
    </aside>
    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuItem from '../components/MenuItem.vue'
import {mapGetters, mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
    MenuItem
  },
  computed: {
    ...mapState({
      restaurantName: 'restaurantName',
      shoppingCart: 'shoppingCart',
      simpleMenu: 'simpleMenu'
    }),
    ...mapGetters(['copyright'])
  }
}
</script>
<style scoped>
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  font-style: italic;
  text-align: center;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
</style>