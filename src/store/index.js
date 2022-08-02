import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    allProducts:[],
  },
  getters: {
    getAllProducts: (state) => state.allProducts,
  },
  mutations: {
    SET_ALL_PRODUCTS(state, payload){
      state.allProducts = payload
    }
  },
  actions: {
    async fetchProducts({commit}, id){
      try {
        let resp =  await axios.get(`http://localhost:3000/api/user/${id}`)
        console.log(resp.data.data.products)
        commit('SET_ALL_PRODUCTS', resp.data?.data?.products)
        return resp
      } catch (error) {
        console.log (error)
      }
    }
  },
})
