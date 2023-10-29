<template>
    <div class="container mx-auto p-4">
        <!-- Sản Phẩm -->
        <div class="flex space-x-5">
            <div class="w-1/2">
                <img src="../img/product_1.png" alt="test" class="w-full">
            </div>
            <div class="w-1/2 p-4 italic">
                <p class="text-[24px] font-bold">Apple</p>
                <p class="text-[#b7c8dd] mt-5">00000 VNĐ</p>
                <p class="text-[#b7c8dd] mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquam eligendi,
                    laboriosam tenetur
                    doloremque facilis corporis rerum quo voluptas eius qui architecto? Dignissimos illum eaque a, quos
                    voluptas unde voluptate.</p>
                <P class="mt-5">CATEGORY: <span class="text-[#b7c8dd]">Watchs</span></P>

                <div class="flex mt-3">
                    <div class="border border-[#e5e9ec] flex justify-center ">
                        <input type="text" placeholder="QUANTITY" class="border border-none p-3 outline-none focus:ring-0">
                        <div class="flex items-center justify-end text-[#fff]">
                            <nav class="relative z-0 inline-flex rounded-md">
                                <a href="#"
                                    class="relative inline-flex items-center px-2 py-2 rounded-l-md  bg-white text-sm">
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
                                <a href="#"
                                    class="relative inline-flex items-center px-2 py-2 rounded-r-md bg-white text-sm">
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
                    <button class="bg-black text-[#fff] p-3 italic">Add to cart</button>
                </div>
            </div>
        </div>
        <!-- Chi tiết sản phẩm -->
        <div class="flex mt-16">
            <div class="w-3/5">
                <div class="italic">
                    <button class="bg-[black] text-[#ffff] p-5 italic">DESCRIPTION</button>
                    <p class="font-bold mt-5">PRODUCT DESCRIPTION</p>
                    <p class="text-[#b7c8dd] mt-6">ĐẶC ĐIỂM NỔI BẬT</p>
                    <p class="text-[#b7c8dd] mt4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                        consectetur
                        nihil ea fugiat itaque cum
                        earum
                        modi! Nobis aperiam aut, modi saepe doloribus amet, tempore cum consequuntur explicabo nam quas!
                    </p>
                </div>
                <div class="mt-16">
                    <p class="font-bold italic">RELATED PRODUCTS</p>
                    <img src="../img/product_2.png" alt="test" class="w-1/2 mt-5">
                    <p class="font-bold mt-5 text-center w-1/2 italic">Apple</p>
                    <p class="text-[#b7c8dd] mt-3 text-center w-1/2 italic">0000 VNĐ</p>
                </div>
            </div>
        </div>
    </div>
</template>
