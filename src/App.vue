<script setup lang="ts">
const productId = '123';
</script>

<template>
  <router-view />
  <router-link to="/">Home</router-link>
  <br>
  <router-link to="/shop">Shop</router-link>
  <br>
  <router-link :to="'/detail/' + productId">Detail</router-link>
  <br>
  <router-link to="/cart">Cart</router-link>
  <br>
  <router-link to="/checkout">Checkout</router-link>
  <br>
  <router-link to="/login">Login</router-link>
  <br>
  <router-link to="/register">Register</router-link>
</template>

<style scoped></style>
