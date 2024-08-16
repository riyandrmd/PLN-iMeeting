<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <main class="container-fluid">
    <div class="d-flex justify-content-between align-items-center m-3">
      <div>
        <h1 class="fs-2 fw-bolder">Ruang Meeting</h1>
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
  </main>
</template>

<style scoped>
.container-fluid {
  height: 90vh;
}

.btn{
  border-radius: 10px;
}
</style>