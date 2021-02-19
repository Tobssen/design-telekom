<template>
  <div class="products">

    <TableHead :id="asdf" :key="asdf" :product="headline"/>
    <Table
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :product="product"      
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/v-data-table.vue";
import TableHead from "@/components/v-data-table-head.vue";
import ProductService from "@/services/ProductService.js";

export default {
  name: "tarife",
  components: {
    Table,
    TableHead
  },
  data() {
    return {
      products: [],
      headline:  {
        description: "description", 
        price: "Preis", 
        download: "Download",
        upload: "Upload",
        name: "Vertrag",
        date:"date", 
        type:"tarif",
        image: "Bild"},
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await ProductService.fetchProducts();
      this.products = response.data;
    }
  }
};
</script>

<style scoped>
.products {
  
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
