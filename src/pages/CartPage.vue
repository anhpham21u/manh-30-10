<template>
    <div class="container mx-auto p-4">
        <!-- CART -->
        <div class="flex justify-between bg-[#f6f9f6]">
            <p class="text-[40px] items-center px-12 italic py-16">CART</p>
            <div class="flex font-medium space-x-5 me-16">
                <button class="flex justify-end items-center italic py-16 text-[#00000053]" @click="cartPage">CART</button>
            </div>
        </div>
        <div class="italic">
            <div class="py-10">
                <p class="font-medium text-[30px] italic">SHOPPING CART</p>
            </div>
            <div class="flex">
                <!-- SHOPPING CART -->
                <div class="w-2/3 mx-auto me-10">
                    <div class="flex bg-[#f8f9fa] font-medium py-5">
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>IMAGE</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>PRODUCT</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>PRICE</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>QUANTITY</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>TOTAL</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>REMOVE</p>
                        </div>
                    </div>

                    <div class="flex font-medium py-5">
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <img src="../img/product_1.png" alt="sp">
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>Apple</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>000 VNĐ</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <div class="flex items-center justify-end text-[#fff]">
                                <nav class="relative z-0 inline-flex rounded-md">
                                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md text-sm">
                                        <span class="sr-only">Previous</span>
                                        <svg class="w-3 text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                        </svg>
                                    </a>
                                    <a href="#"
                                        class="relative inline-flex items-center px-4 py-2  text-sm font-medium text-[black] text-[20px]">
                                        1
                                    </a>
                                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md text-sm">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-3 text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>000 VNĐ</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex font-medium py-5">
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <img src="../img/product_1.png" alt="sp">
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>Apple</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>000 VNĐ</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <div class="flex items-center justify-end text-[#fff]">
                                <nav class="relative z-0 inline-flex rounded-md">
                                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md text-sm">
                                        <span class="sr-only">Previous</span>
                                        <svg class="w-3 text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                        </svg>
                                    </a>
                                    <a href="#"
                                        class="relative inline-flex items-center px-4 py-2  text-sm font-medium text-[black] text-[20px]">
                                        1
                                    </a>
                                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md text-sm">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-3 text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <p>000 VNĐ</p>
                        </div>
                        <div class="flex space-x-5 w-1/6 items-center justify-center">
                            <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex justify-between bg-[#f8f9fa] font-medium py-5">
                        <div class="flex space-x-5 w-1/2 items-center justify-start mx-5">
                            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md text-sm">
                                <span class="sr-only">Previous</span>
                                <svg class="w-3 text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                            </a>
                            <p>Continue shopping</p>
                        </div>
                        <div class="flex space-x-5 w-1/3 border border-black mx-5">
                            <input type="text" class="outline-none focus:ring-0 w-full bg-[#f8f9fa] p-3" placeholder="Proceed to checkout">
                            <div class="flex justify-center items-center font-bold">
                                <a href="#" class="px-2">
                                <span class="sr-only">Next</span>
                                <svg class="w-3 text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                            </div>
                            
                        </div>


                    </div>
                </div>
                <!-- CART TOTAL -->
                <div class="w-1/3 h-1/2 bg-[#f8f9fa] p-16 italic rounded-xl">
                    <p class="font-bold text-[30px] text-start mb-5">CART TOTAL</p>
                    <p class="mb-5 font-medium">SUBTOTAL <span class="font-thin ms-3">000 VNĐ x 1</span></p>
                    <hr class="mb-3">
                    <div class="flex justify-between mb-3">
                        <p class="font-medium">TOTAL</p>
                        <p> 000 VNĐ</p>
                    </div>
                    <div class="">
                        <input type="text" id="coupon" name="coupon"
                            class="w-full p-6 border border-gray-300 outline-none focus:ring-0"
                            placeholder="Enter your coupon">
                        <button type="submit"
                            class="bg-[#494949] text-white px-10 py-5 hover:bg-[#494949da] text-[20px] font-mono w-full flex justify-center">
                            <svg class="h-6 w-6 text-white me-5" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 12 20 22 4 22 4 12" />
                                <rect x="2" y="7" width="20" height="5" />
                                <line x1="12" y1="22" x2="12" y2="7" />
                                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                            </svg>
                            Apply coupon
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const navigate = useRouter();

const cartPage = () => {
    navigate.push('/cart');
};
</script>
