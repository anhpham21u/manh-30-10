<script setup lang="ts">
 import { useRouter } from 'vue-router';
  
  const navigate = useRouter();

  const shopPage = () => {
    navigate.push('/shop');
  };
</script>

<template>
    <div class="relative container mx-auto px-4">
        <img src="../img/banner1.jpg" class="w-full h-full" alt="banner">
        <div class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded text-black text-center">
            <p class="text-2xl font-semibold text-[#ddd4d2] flex flex-start italic mb-4">NEW INSRIRATION 2020</p>
            <h1 class="text-[40px] flex flex-start italic font-medium mb-4">20% OFF ON NEW SEASON</h1>
            <button class="bg-[#383838] text-[#fff] flex flex-start p-5 italic px-10" @click="shopPage">Browse collectins</button>
        </div>
    </div>
</template>