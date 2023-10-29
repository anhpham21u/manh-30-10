<template>
    <div class="container mx-auto p-4">
        <div class="relative flex items-center justify-center h-screen">
            <div class="absolute inset-0 w-[90%] h-full ml-auto mr-auto overflow-hidden">
                <img src="../img/banner1.jpg" alt="sign in"
                    class="w-full h-full object-cover transform -translate-x-1/10 translate-x-1/10">
            </div>
            <form action="email"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg rounded-xl w-[40%]">
                <p class="text-center italic text-[30px] text-[#776c79] px-16 py-14 font-medium font-san">Sign Up</p>
                <div class="px-5">
                    <input type="text" id="text" name="full nema"
                        class="w-full p-6 border border-gray-300 outline-none focus:ring-0" placeholder="Full Name">
                </div>
                <div class="px-5">
                    <input type="email" id="email" name="email"
                        class="w-full p-6 border border-gray-300 outline-none focus:ring-0" placeholder="Email">
                </div>

                <div class="px-5">
                    <input type="text" id="text" name="password"
                        class="w-full p-6 border border-gray-300 outline-none focus:ring-0" placeholder="Password">
                </div>
                <div class="mb-6 px-5">
                    <input type="Phone" id="Phone" name="Phone"
                        class="w-full p-6 border border-gray-300 outline-none focus:ring-0" placeholder="Phone">
                </div>
                <div class="text-center mb-5 px-5">
                    <button type="submit" class="bg-[#494949] text-white p-4 hover:bg-[#494949da] w-full">SIGN UP</button>
                </div>
                <p class="text-center italic text-[#49494999] py-5">
                    Login?
                    <a href="#" class="text-[#0000ff8b]">
                        Click
                    </a>
                </p>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>