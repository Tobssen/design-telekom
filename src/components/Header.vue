<template>
  <div class="header">   
    <span id="burger" class="navtext" v-on:click="toggleNav">&#9776;   </span>
    <span class="navtext"> &nbsp; &nbsp; &nbsp; {{ currentRouteName }} </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  z-index: 4;
  position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	text-align: left;
	padding: 20px;
	background: #ea0a8e;
	border-bottom: 1px solid #d5d5d5;
}

.navtext {
    transition: margin-left .4s;
    font-size:26px;
    cursor:pointer;
    color:white;
    text-align: left;
}
</style>
