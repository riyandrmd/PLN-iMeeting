<script setup>
import { useRouter, RouterView } from "vue-router";
const router = useRouter();
</script>
<template>
  <main class="container-fluid">
    <div class="d-flex justify-content-between align-items-center m-3">
      <div>
        <h1 class="fs-2">Ruang Meeting</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Ruang Meeting
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <button
          class="btn btn-primary d-flex align-items-center"
          type="button"
          @click="router.push({ name: 'pesanRuang' })"
        >
          <i class="bi bi-plus me-2 fs-4"></i>
          Pesan Ruangan
        </button>
      </div>
    </div>
    <RouterView />
  </main>
</template>