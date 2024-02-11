<template>
    <div>
         <div>
             <h1>Blog Page</h1>
 
         </div>
         <div>
             <div class="btn-group">
                 <button class="btn" id="about-btn" @click="this.$router.push('/about')">About Page</button>
                 <button class="btn" id="blog-btn" @click="this.$router.push('/blog')" >Blog Page</button>
                 <button class="btn" id="home-btn" @click="this.$router.push('/home')">Home Page</button>
                 
             </div>
         </div>
    </div>
 </template>
 
 <script>
     export default {
         
     }
 </script>
 
 <style lang="scss" scoped>
 
 </style>