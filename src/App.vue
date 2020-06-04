<template>
  <div id="app">
    <Navigation 
      :companyEmail=companyEmail
      :companyPhoneNumber=companyPhoneNumber
      :categories=categories
      :shops=shops
    />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data(){
    return{
      companyEmail:'hello@bagitall.com',
      companyPhoneNumber:'+2348145678112',
      categories:["Men's", "Womens's", "Kid's"],
      shops:['School Bags', 'Ladies Bags', 'Laptop Bags', 'One Hands', 'Purse']
    }
  }
}
</script>

<style>
html{
  scroll-behavior: smooth;
}
body{
  padding:0;
  margin:0;
  font-family: 'Oswald', sans-serif;
}
*{
  box-sizing: border-box;
  transition: all 0.5s;
}

.webNavigation > div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  padding:0 20px;
}

.webNavigation > div > ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  list-style-type: none;
  padding:0;
}

.navigationContact{
  background: rgb(235, 235, 235);
}
.navigationLinks{
  background-color: white;
  position: sticky;
  width:100%;
  top:0
}

.navigationContact a, .navigationLinks a{
  display: block;
  padding: 0 10px;
  margin: 0 10px;
  color:grey;
  text-decoration: none;
  font-weight: lighter;
}
.navigationContact a:hover,  .navigationLinks a:hover{
  color:orangered;
}

.navigationContact select{
  border:none;
  outline:none;
  background: rgb(235, 235, 235);
  cursor:pointer;
  color:grey;
  font-weight: lighter;
}

.navigationContact select option{
  border:none;
  outline:none;
  background: rgb(235, 235, 235);
  cursor:pointer;
  color:grey;
  font-weight: lighter;
}

.logo{
  color:black !important;
}

.navigationLinks h1{
  font-family: cursive;
}

.navigationLinks h1 span{
  font-size: 10px;
  color:orangered;
  cursor: pointer;
}
.dropdown {
  position: relative;
}

.dropdownMenu {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  max-height: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  display: none;
  z-index: 1;
  animation: dropdown 0.2s linear;
}

@keyframes dropdown {
  from{
    opacity: 0;
    transform: translateY(20px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdownMenu > ul{
  list-style-type: none;
  padding:0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.dropdown ul li a{
  margin: 5px 0;
}
.dropdown:hover .dropdownMenu {
  display: block;
}
.shiftLeft{
  right:0;
}
.dropLogin ul{
  display: block !important;
}
.dropLogin ul:first-child  li{
  padding: 10px 0;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.signin{
  width:100%;
  background-color: rgba(255, 68, 0);
  color:white !important;
  text-align: center;
  padding: 5px 0 !important;
  display: block ;
  border-radius: 10px;
  border: 1px solid orangered;
}

.signin:hover{
  background-color: white;
  color:orangered !important;
}

.signup, .savedItems > div .item a{
  width:100%;
  color: orangered !important;
  text-align: center;
  padding: 5px 0 !important;
  display: block ;
  border-radius: 10px;
  border: 1px solid orangered;
}

.signup:hover, .savedItems > div .item a:hover{
  color: white !important;
  background-color: orangered ;
}

.dropLogin ul:last-child li{
  padding: 5px 0;
}

.savedItems > div, .cartItem {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
  align-items: center;
  border-bottom: 1px solid rgb(212, 212, 212);
}

.savedItems > div:last-child {
  border-bottom: none;
}


.img{
  width: 80px;
  height: 80px;
  background-color: orangered;
  color: orangered;
  margin-right: 20px;
}

.savedItems > div .item, .cartItem .item{
  width: 150px;
  position: relative;
  margin-right:20px;
}

.savedItems > div .item > p, .cartItem .item > p{
  margin:0;
  padding:0;
  font-weight: lighter;
  color: black;
}
.savedItems > div .item > div, .cartItem .item > div{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
.savedItems > div .item > div p, .cartItem .item > div p{
  margin:0;
  margin-top: 5px;
  padding:0;
  font-weight: lighter;
}

.red{
  color:red;
}

.green{
  color:green;
}

.savedItems > div .item a{
  margin: 10px 0 !important;
}

.cancel{
  position: absolute;
  top:10px;
  right: 10px;
  cursor: pointer;
}

.seeMore a{
  text-align: center;
  display: block;
  margin-top: 10px;
  width: 100%;
  padding: 5px 0;
}

.seeMore a:hover{
  background-color: rgb(243, 243, 243);
  color:grey;
}


.cartItem {
  padding-bottom: 10px !important;
}

.viewCart{
  position: relative;
  background-color: orangered;
  margin: 10px 0; 
  height: 50px;
}

.viewCart div{
  position: absolute;
  background-color: black;
  overflow: hidden;
  top:0;
  bottom: 0;
  left:0;
  right: 50%;
}

.viewCart div:last-child{
  right:0;
  left: 50%;
}

.viewCart a{
  text-align: center;
  margin:0 !important;
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  color: white !important;
  z-index: 9;
  right: 0;
}

.viewCart:hover div{
  right: 100%;
}
.viewCart:hover div:last-child{
  left: 100%;
}



</style>
