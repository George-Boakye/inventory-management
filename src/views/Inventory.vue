<template>
  <the-layout>
    <template v-slot:side-nav><SideNav /></template>
    <template v-slot:top-nav><TopNav /></template>
    <template v-slot:main>
      <h1>In-Stock</h1>
      <div class="container">
        <div class="top-layer">
          <div>
            <input type="text" placeholder="Search product by name" />
          </div>
          <div>
            <button @click="addProduct()">Add Product</button>
          </div>
        </div>
        <div style="overflow-x: auto">
          <table>
            <tr class="headers">
              <th><div class="box"></div></th>
              <th class="name">
                <input type="text" placeholder="Name" v-model="product.name" />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Quantity"
                  v-model="product.quantity"
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Unit Price"
                  v-model="product.price"
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Status"
                  v-model="product.status"
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Category"
                  v-model="product.category"
                />
              </th>
            </tr>
            <tr v-for="product in allProducts" :key="product._id">
              <td><div class="box"></div></td>
              <td>{{ product.name }}</td>
              <td>{{ product.quantiity }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.status }}</td>
              <td>{{ product.category }}</td>
            </tr>
            <!-- <tr>
              <td><div class="box"></div></td>
              <td>Milo sachet</td>
              <td>36</td>
              <td>2</td>
              <td>In-stock</td>
              <td>Beverage</td>
            </tr>
            <tr>
              <td><div class="box"></div></td>
              <td>Kleesoft Washing Powder</td>
              <td>36</td>
              <td>2</td>
              <td>In-stock</td>
              <td>Detergents</td>
            </tr> -->
          </table>
        </div>
        <div class="bottom-layer">
          <div>
            <button>
              <img src="../assets/ph_caret-double-up-bold.svg" alt="" />
            </button>
            <button>
              <img src="../assets/ph_caret-up-bold.svg" alt="" /> Prev
            </button>
            <input type="text" />
            <button>
              <img src="../assets/ph_caret-up-bold-foward.svg" alt="" />
              <span>Next</span>
            </button>
            <button>
              <img src="../assets/ph_caret-double-up-bold-forward.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </template>
  </the-layout>
</template>

<script>
import axios from "axios";
import SideNav from "@/components/SideNav.vue";
import TopNav from "@/components/TopNav.vue";
import TheLayout from "@/components/TheLayout.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    SideNav,
    TopNav,
    TheLayout,
  },
  async created() {
    await getProducts();
  },
  async updated() {
    await getProducts();
  },
  data() {
    return {
      product: {
        name: "",
        price: "",
        quantiity: "",
        status: "",
        category: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      allProducts: "getAllProducts",
    }),
  },
  methods: {
    ...mapActions({
      getProducts: "getProducts",
    }),
    addProduct() {
      // const userId = localStorage.getItem("id");
      axios
        .post(`http://localhost:3000/api/products`, this.product)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.product.name = "";
      this.product.price = "";
      this.product.quantiity = "";
      this.product.category = "";
      this.product.status = "";
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: -0.04em;
  color: #1d2128;
}
.container {
  margin-top: 16px;
  background: #fff;
  height: calc(100vh - 296px);
  padding: 32px;
}
.top-layer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  input {
    width: 274px;
    height: 43px;
    background: #f4f4f4;
    border-radius: 8px;
    padding: 8px 20px;
    outline: none;
    border: none;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #a7aebb;
  }

  button {
    width: 147px;
    height: 43px;
    border-radius: 8px;
    border: none;
    outline: none;
    background: #2656d1;
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    cursor: pointer;
  }
}

table {
  margin-top: 7px;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  tr {
    height: 56px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
  }
  .headers {
    height: 56px;
    background: #f9f9f9;

    input {
      border: none;
      outline: none;
      width: 120px;
      font-weight: 700;
      font-size: 18px;
      line-height: 120%;
      color: #000;
      background: #f9f9f9;

      &::placeholder {
        color: #000;
      }
    }
  }
  th {
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    padding: 16px 24px;
  }
  td {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    padding: 16px 24px;
  }
  .box {
    width: 22px;
    height: 24px;
    background: #f1f1f1;
  }
}

.bottom-layer {
  padding: 16px 0px 0px;

  div {
    width: max-content;
    float: right;
    display: grid;
    grid-template-columns: repeat(5, max-content);
    gap: 0 10px;
  }
  input {
    width: 44px;
    height: 32px;
    border: 1px solid #9599a0;
    border-radius: 8px;
  }
  button {
    padding: 0 16px;
    height: 32px;
    background: #f1f1f1;
    border-radius: 8px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
