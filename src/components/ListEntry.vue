<template >
  <div class="product-list"  @click="toggleDivClass(product.id)">
    <img class="product-img" :src="product.image"/>
    <span>released since {{ product.date }}</span>
    
<a v-bind:href="'/details/'+ product.id"> Details </a>
    <h4>{{ product.name }}</h4>
    
    <p :id="'p' + product.id" v-show="display == 'inline-block: false'">
      {{ product.description }}
    </p>
  </div>
</template>

<script>
export default {
  methods: {
      toggleDivClass(productId) {
      console.log(productId + document.getElementById(productId));
      document.getElementById(productId).classList.toggle("product-list-click");
      var x = document.getElementById("p" + productId);

      console.log(x);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      document.getElementById(productId).classList.toggle("product-list");
    }
  }, 
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.product-list {
  padding: 20px;
  width:  90%;
  cursor: pointer;
  border-bottom: 1px solid #39495c;
  margin-bottom: 18px;
  position: relative;
}

.product-list:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
.product-list-click {
  background:#fd8bce;
  padding: 20px;
  width:  90%;
  cursor: pointer;
  border-bottom: 1px solid #39495c;
  margin-bottom: 18px;
  position: relative;
  transform: scale(1.01);
}
.product-list-click:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}

.product-img {
  width: 50px;
  height: 50px;
}
</style>
