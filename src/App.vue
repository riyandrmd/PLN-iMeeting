<script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-color">
    <Navbar />
    <div class="d-flex">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.bg-color{
  background-color: rgb(240, 240, 240);
}
</style>

