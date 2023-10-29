<template>
    <div class="container mx-auto px-4 my-7">
      <div class="flex justify-between">
        <div class="flex space-x-3">
          <button class="text-[#eecd7d] italic font-bold text-[20px]" @click="homePage">Home</button>
          <button class="italic text-[20px]" @click="shopPage">Shop</button>
        </div>
        <div class="flex justify-center">
          <button class="text-[30px] italic font-bold">BOUTIQUE</button>
        </div>
        <div class="flex space-x-3">
          <div class="flex space-x-1 justify-center items-center">
            <svg class="h-8 w-6 text-[#aaaaaa]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="9" cy="19" r="2"/>
              <circle cx="17" cy="19" r="2"/>
              <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
            </svg>
            <button class="italic text-[20px] flex justify-center items-center" @click="cartPage">Cart</button>
          </div>
          <div class="flex space-x-1 justify-center items-center">
            <svg class="h-8 w-6 text-[#aaaaaa]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <button class="italic text-[20px] flex justify-center items-center" @click="loginPage">Login</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const navigate = useRouter();
  
  const homePage = () => {
    navigate.push('/');
  };
  
  const shopPage = () => {
    navigate.push('/shop');
  };
  
  const cartPage = () => {
    navigate.push('/cart');
  };
  
  const loginPage = () => {
    navigate.push('/login');
  };
  </script>
  