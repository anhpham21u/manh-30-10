<template>
    <div class="container mx-auto p-4">
        <div class="flex justify-between bg-[#f6f9f6]">
            <p class="text-[40px] items-center px-12 italic py-16">CHECKOUT</p>
            <div class="flex font-medium space-x-5 me-16">
                <button class="flex justify-end items-center italic py-16 text-[black]" @click="homePage">HOME /</button>
                <button class="flex justify-end items-center italic py-16 text-[black]" @click="cartPage">CART /</button>
                <button class="flex justify-end items-center italic py-16 text-[#cfd3d4]"
                    @click="checkoutPage">CHECKOUT</button>
            </div>
        </div>
        <div class="italic">
            <div class="py-10">
                <p class="font-medium text-[30px] italic">BILLING DETAILS</p>
            </div>
            <div class="flex">
                <div class="w-2/3 me-10">
                    <form action="email" class="text-[20px]">
                        <div class="mb-6">
                            <label for="full_name" class="block text-[#494949d7] text-[20px] font-semibold mb-4">FULL NAME:</label>
                            <input type="text" id="full_name" name="full_name"
                                class="w-full p-6 border border-gray-300 outline-none focus:ring-0" placeholder="Enter Your Full Name Here!">
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block text-[#494949d7] text-[20px] font-semibold mb-4">EMAIL:</label>
                            <input type="email" id="email" name="email"
                                class="w-full p-6 border border-gray-300 outline-none focus:ring-0" placeholder="Enter Your Email Here!">
                        </div>
                        <div class="mb-6">
                            <label for="phone" class="block text-[#494949d7] text-[20px] font-semibold mb-4">PHONE NUMBER:</label>
                            <input type="phone" id="phone" name="phone"
                                class="w-full p-6 border border-gray-300 outline-none focus:ring-0" placeholder="Enter Your Phone Number Here!">
                        </div>
                        <div class="mb-6">
                            <label for="phone" class="block text-[#494949d7] text-[20px] font-semibold mb-4">ADDRESS:</label>
                            <input type="text" id="phone" name="phone"
                                class="w-full p-6 border border-gray-300 outline-none focus:ring-0" placeholder="Enter Your Address Here!">
                        </div>
                        <div class="mb-5">
                            <button type="submit" class="bg-[#494949] text-white px-10 py-5 hover:bg-[#494949da] italic text-[20px] font-mono">
                                Place order
                            </button>
                        </div>
                    </form>

                </div>
                <div class="w-1/3 h-1/2 bg-[#f8f9fa] p-16 italic rounded-xl">
                    <p class="font-bold text-[30px] text-start mb-5">YOUR ORDER</p>
                    <p class="mb-5 font-medium">Apple <span class="font-thin ms-3">000 VNĐ x 1</span></p>
                    <hr class="mb-3">
                    <p class="mb-5 font-medium">Apple <span class="font-thin ms-3">000 VNĐ x 1</span></p>
                    <hr class="mb-3">
                    <div class="flex justify-between">
                        <p class="font-medium">TOTAL</p>
                        <p> 000 VNĐ</p>
                    </div>
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


const cartPage = () => {
    navigate.push('/cart');
};

const checkoutPage = () => {
    navigate.push('/checkout');
};
</script>
