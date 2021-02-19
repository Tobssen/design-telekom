<template >
  <div class="product-list">

  <table class="tg">
    <thead>
      <tr>
        <th class="entry">{{ product.name }}</th>
        <th class="entry">{{ product.download }}</th>
        <th class="entry">{{ product.upload }}</th>
        <th class="entry">{{ product.price }}</th>
        <th class="entry">{{product.image}}</th>
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
  cursor: pointer;
  position: relative;
}
table {
   border-collapse: collapse; 
}
.product-list:hover {
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
.product-list-click:hover {
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
.entry{  
  border: 1px solid #c0c0c0;
  text-align: center;
  width: 220px;
  border-left: 1px solid #c0c0c0;
}
.product-img {
  width: 50px;
  height: 50px;
}
</style>
