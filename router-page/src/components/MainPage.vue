<template>
    <div>
        <nav>
            <ul class="nav-list">
  
              <router-link to="/home">
                  <li @click="selectedItem(1)" :class="{'active' : selectedItemNumber === 1}">
                    <a href="#" class="list-item">Home</a>
                  </li>
              </router-link>
  
              <router-link to="/about">
  
                <li @click="selectedItem(2)" :class="{'active' : selectedItemNumber === 2}">
                  <a href="#" class="list-item">About</a>
              </li>
              </router-link>
  
              <router-link to="/blog">
                <li @click="selectedItem(3)" :class="{'active' : selectedItemNumber === 3}">
                  <a href="#" class="list-item">Blog</a>
              </li>
              </router-link>
               
              
               
                
            </ul>
        </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            selectedItemNumber: 1
        }
    },
    methods: {
        selectedItem(itemNumber) {
            this.selectedItemNumber = itemNumber;
            
        }
    }
  }
  </script>
  
  <style >
  </style>
  