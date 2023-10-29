<script setup lang="ts">
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import Banner from './Banner.vue';
import { useRouter } from 'vue-router';
  
  const navigate = useRouter();
  
  const shopPage = () => {
    navigate.push('/shop');
  };
</script>

<template>
    <NavBar />
    <Banner />
    <div class="container mx-auto px-4">
        <div class="my-10">
            <p class="flex justify-center text-[#dbdddf] text-[20px] italic">CAREFULLY CREATED COLLECTIONS</p>
            <p class="flex justify-center text-[30px] italic">BROWSE OUR CATEGORIES</p>
        </div>
        <div>
            <div class="flex justify-center space-x-7 my-7">
                <img src="../img/product_1.png" alt="product_1" class="w-full hover:opacity-70 transition duration-300" @click="shopPage">
                <img src="../img/product_2.png" alt="product_2" class="w-full hover:opacity-70 transition duration-300" @click="shopPage">
            </div>
            <div class="flex justify-center space-x-7">
                <img src="../img/product_3.png" alt="product_3" class="w-full hover:opacity-70 transition duration-300" @click="shopPage">
                <img src="../img/product_4.png" alt="product_4" class="w-full hover:opacity-70 transition duration-300" @click="shopPage">
                <img src="../img//product_5.png" alt="product_5" class="w-full hover:opacity-70 transition duration-300" @click="shopPage">
            </div>
            <div class="my-10">
                <p class="flex justify-start text-[#dbdddf] text-[20px] italic">MADE THE HARD WAY</p>
                <p class="flex justify-start text-[30px] italic font-normal">TOP TRENDING PRODUCTS</p>
            </div>
            <div>
                <h1>api</h1>
            </div>
            <div class="flex justify-between bg-[#f8f9fa] p-[50px]">
                <div class="text-[30px] italic">
                    <div>
                        <p>FREE SHIPPING</p>
                        <p class="text-[#dbdddf] text-[25px]">Free shipping worlwide</p>
                    </div>

                </div>
                <div class="text-[30px] italic text-center">
                    <div>
                        <p class="flex justify-start">24 X 7 SERVICE</p>
                        <p class="text-[#dbdddf] flex justify-start text-[25px]">Free shipping worlwide</p>
                    </div>

                </div>
                <div class="text-[30px] italic">
                    <div>
                        <p>FESTIVAL OFFER</p>
                        <p class="text-[#dbdddf] text-[25px]">Free shipping worlwide</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between my-12">
                <div class="italic w-1/2">
                    <p class="text-[30px] font-normal">LET'S BE FRIENDS!</p>
                    <p class="text-[20px] text-[#dbdddf]">Nisi nisi tempor consequat laboris nisi.</p>
                </div>
                <div class="w-1/2">
                    <form class="flex justify-end">
                        <div class="w-full">
                            <input type="email" id="email" name="email"
                                class="border border-[#dbdddf] w-full p-6 text-[20px]"
                                placeholder="Enter your email address">
                        </div>
                        <div class="flex justify-center ">
                            <button type="submit" class="bg-[#383838] text-[#ffff] p-3 text-[20px] px-7">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <FooterPage />
</template>
