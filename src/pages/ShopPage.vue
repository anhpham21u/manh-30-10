<template>
    <div class="container mx-auto px-4">
        <NavBar />
        <div class="flex justify-between bg-[#f6f9f6]">
            <p class="text-[40px] items-center px-12 italic py-16">SHOP</p>
            <p class="flex justify-end items-center px-12 italic py-16 text-[#cfd3d4]">SHOP</p>
        </div>
        <!-- ProductList -->
        <div class="flex mt-16">
            <div class="w-1/4 flex-none italic mb-16">
                <!-- Nội dung bên trái -->
                <p class="text-[black] p-3 text-[24px] font-medium">CATEGORIES</p>
                <p class="text-[#ffff] bg-black p-3">APPLE</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">All</p>
                <p class="text-[black] p-3 bg-[#f6f9f6]">IPHONE & MAC</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">IPhone</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">IPod</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">Macbook</p>
                <p class="text-[black] p-3 bg-[#f6f9f6]">WIRELESS</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">Airpod</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">Watch</p>
                <p class="text-[black p-3 bg-[#f6f9f6]">OTHER</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">Mouse</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">Keyboard</p>
                <p class="text-[#d6dcdb] p-3 hover:text-[#eecd7d] cursor-pointer ">Other</p>
            </div>
            <div class="w-3/4 ps-10">
                <!-- Nội dung bên phải -->
                <!-- Lọc -->
                <div class="flex justify-between">
                    <div>
                        <input type="text" placeholder="Enter search Here!" class="border border-black p-4">
                    </div>
                    <div>
                        <select class="border border-black p-4">
                            <option value="option1">Default sorting</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
                <!-- api -->
                <div>

                </div>
                <div>
                    <div class="flex items-center justify-end mt-8 text-[#fff]">
                        <nav class="relative z-0 inline-flex shadow-sm rounded-md">
                            <a href="#"
                                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm">
                                <span class="sr-only">Previous</span>
                                <svg class="w-6 h-6 text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>

                            </a>
                            <a href="#"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium bg-black">
                                1
                            </a>
                            
                            <a href="#"
                                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm">
                                <span class="sr-only">Next</span>
                                <svg class="w-6 h-6 text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </nav>

                    </div>
                    <div class="flex justify-end">
                        <p class="text-[20px] italic text-[#d6dcdb]">
                            Showing 1-9 or 9 results
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from './NavBar.vue';
</script>