<template>
  <div class="products">
    <ListEntryHardware
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :product="product"
      
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ListEntryHardware from "@/components/ListEntryHardware.vue";
import ProductService from "@/services/ProductService.js";

export default {
  name: "hardware",
  components: {
    ListEntryHardware
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await ProductService.fetchProducts();
      this.products = response.data;
    },
    toggleDivClass(productId) {
      console.log(productId + document.getElementById(productId));
      document.getElementById(productId).classList.toggle("product-card-click");
      var x = document.getElementById("p" + productId);

      console.log(x);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      document.getElementById(productId).classList.toggle("product-card");
    }
  }
};
</script>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>