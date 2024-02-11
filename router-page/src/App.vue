<template>
  <div>
    <div>
    <main-page></main-page>
     <router-view></router-view>
    </div>


  </div>
</template>

<script>
import mainPage from './components/MainPage.vue' 




  export default {

    

    components : {
        MainPage : mainPage
    },

    
  }
</script>

<style >

</style>