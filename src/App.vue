<template>
    
<div id="mySidenav" class="sidenav">
  
  <a href="#"><router-link to="/">Dashboard</router-link></a>
  <a v-bind:style="{ cursor: context-menu }"><router-link to="/">MarketingVariants</router-link></a>
  <a href="#"><router-link to="/tarife">Tarife</router-link></a>
  <a href="#"><router-link to="/hardware">Hardware</router-link></a>
</div>

<div id="main">
    
  <div class="header">   
    <span id="burger" class="navtext" v-on:click="toggleNav">&#9776;   </span>
    <span class="navtext"> &nbsp; &nbsp; &nbsp; {{ currentRouteName }} </span>
  </div>


  <div id="content">
    <div id="text">
       <router-view />
    </div>  
  </div> 


</div> 



</template>
<script>

export default {
    methods:{
        openNav:function() {
            document.getElementById("mySidenav").style.width = "320px";
            document.getElementById("main").style.marginLeft = "320px";
            document.getElementById("burger").style.marginLeft = "320px";
            document.getElementById("mySidenav").classList.toggle('sidenavhover');
        },
        closeNav:function() {  
            //document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";  
            document.getElementById("burger").style.marginLeft= "0";   
            document.getElementById("mySidenav").classList.toggle('sidenavhover');   
        },
        toggleNav:function() {
            if(this.navExpanded){
                this.closeNav();
                this.navExpanded = false; 
            }
            else{
                this.navExpanded = true;
                this.openNav();}
        }
    },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
    data(){
        return{
        navExpanded: false
    }
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navtext {
    transition: margin-left .4s;
    font-size:26px;
    cursor:pointer;
    color:white;
    text-align: left;
}

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

.sidenav {
  text-align: left;
  position: fixed;
  z-index: 5;
  width: 320px;
  left: -322px;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255);
  padding: 15px 0;
  border-right: 2px solid #ea0a8e;
  transition: left 0.4s;
}

.sidenavhover {
  left: 0px;
  background-color: rgba(255, 255, 255);
  border-right: 2px solid #ea0a8e;
  transition: left .4s;
}


.sidenav a {
  top:0px;
  float: left;
  padding: 10px 80px 25px 32px;
  text-decoration: none;
  font-size: 18px;
  color: #3d0b36;
  font-weight: bold;
  display: block;
  transition: 0.4s;
}

#main {
  left:0px;
  top:0px;
  text-align: left;
  transition: margin-left .4s;
  padding: 16px;
}

#content {
  left: 0px;
  text-align: left;
}

#text{
  top:0px;
  left: 0px;
  margin-top: 100px;
}

#mySidenav{
  text-align: left;
}

</style>
