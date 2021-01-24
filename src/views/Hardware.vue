<template>
  <div class="products">
    <PlaceCard
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :place="product"
      
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PlaceCard from "@/components/PlaceCard.vue";
import ProductService from "@/services/ProductService.js";

export default {
  name: "products",
  components: {
    PlaceCard
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
      document.getElementById(productId).classList.toggle("place-card-click");
      var x = document.getElementById("p" + productId);

      console.log(x);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      document.getElementById(productId).classList.toggle("place-card");
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
