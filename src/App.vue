<template>
  <div id="app">
    <Navigation 
      :companyEmail=companyEmail
      :companyPhoneNumber=companyPhoneNumber
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
      companyPhoneNumber:'+2348145678112'
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

.navigationContact a{
  display: block;
  padding: 0 10px;
  margin: 0 10px;
  color:grey;
  font-weight: lighter;
}
.navigationContact a:hover{
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

</style>
