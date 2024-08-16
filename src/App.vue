<script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <Navbar />
    <div class="d-flex height">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.height {
  min-height: 100vh;
}
</style>


