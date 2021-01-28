<template >
  <div v-if="product.type==='tarif'" class="product-list"  @click="toggleDivClass(product.id)">

  <table class="tg">
    <thead>
      <tr>
        <th class="tg-0lax"><router-link :to="{name: 'Details', params: { id: product.id } }">
                              <a>{{ product.name }}</a>
                            </router-link></th>
        <th class="tg-0lax">{{ product.download }}</th>
        <th class="tg-0lax">{{ product.upload }}</th>
        <th class="tg-0lax">{{ product.price }}</th>
        <th class="tg-0lax"> <img class="product-img" :src="product.image"/></th>
        <th class="tg-0lax"><p :id="'p' + product.id" v-show="display == 'inline-block: false'">
      {{ product.description }}
    </p> </th>
      </tr>
    </thead>
  </table>



    
    
    

    
   
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
  border-bottom: 1px solid #c0c0c0;
  margin-bottom: 18px;
  position: relative;
}

.product-list:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
.product-list-click {
  background: #fd8bce;
  padding: 20px;
  width:  90%;
  cursor: pointer;
  border-bottom: 1px solid #c0c0c0;
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
