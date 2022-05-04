import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restaurantName: "Le beau restaurant",
        shoppingCart: 0,
        simpleMenu: [
            {
                name: "Croissant",
                image: {
                    source: "/images/croissant.jpg",
                    alt: "Un croissant"
                },
                inStock: true,
                quantity: 1,
                price: 0.99
            },
            {
                name: "Baguette de pain",
                image: {
                    source: "/images/french-baguette.jpeg",
                    alt: "Quatre baguettes de pain"
                },
                inStock: true,
                quantity: 1,
                price: 1.99
            },
            {
                name: "Éclair",
                image: {
                    source: "/images/eclair.jpg",
                    alt: "Éclair au chocolat"
                },
                inStock: false,
                quantity: 1,
                price: 5.99
            }
        ],
        address: "32 impasse du Beurre, Lyon, France",
        email: "contact@mycafe.com",
        phone: "04 88 77 88 99"
    },
    getters: {
        copyright: state => {
            const year = (new Date).getFullYear();
            return `@ ${state.restaurantName} ${year}`;
        }
    },
    mutations: {
        UPDATE_SHOPPINGCART(state, quantity = 1) {
            state.shoppingCart += quantity;
        }
    },
    actions: {
        updateShoppingCart({commit}, quantity) {
            commit('UPDATE_SHOPPINGCART', quantity)
        }
    },
    modules: {}
})
