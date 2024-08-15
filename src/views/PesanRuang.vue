<script setup>
import { onBeforeMount, onMounted, reactive } from "vue";
import axios from "axios";

const jenisKonsumsi = reactive([]);
const unit = reactive([]);
const konsumsi = reactive([]);

const getJenisKonsumsi = async () => {
  await axios
    .get(
      "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi"
    )
    .then((res) => {
      konsumsi.push(...res.data);
      console.log(konsumsi);
    });
};

onMounted(() => {
  getJenisKonsumsi();
});
</script>

<template>
  <main class="container-fluid">
    <div class="d-flex m-3">
      <RouterLink
        class="btn-back d-flex align-items-center justify-content-center"
        to="/ruangmeeting"
      >
        <i class="bi bi-chevron-left"></i>
      </RouterLink>
      <div class="ms-2">
        <h1 class="fs-2">Ruang Meeting</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <router-link
              to="/ruangmeeting"
              class="breadcrumb-item text-decoration-none"
              >Ruang Meeting</router-link
            >
            <li class="breadcrumb-item active" aria-current="page">
              Pesan Ruangan
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="bg-light p-4 border rounded-3 m-3">
      <form>
        <div class="mb-4 pb-4 border-bottom">
          <h4 class="fs-5">Informasi Ruang Meeting</h4>
          <div class="d-flex gap-4">
            <div class="mb-3">
              <label for="unit" class="fw-bold mb-3">Email address</label>
              <input type="text" class="form-control" id="unit" />
            </div>
            <div class="mb-3">
              <label for="ruang" class="fw-bold mb-3">Ruang Meeting</label>
              <input type="text" class="form-control" id="ruang" />
            </div>
          </div>
          <div class="mb-3">
            <label for="kapasitas" class="fw-bold mb-3">Kapasitas</label>
            <input
              class="form-control"
              type="text"
              id="kapasitas"
              value="READONLY"
              aria-label="readonly input example"
              readonly
            />
          </div>
        </div>
        <div class="mb-4 pb-4 border-bottom">
          <h4 class="fs-5">Informasi Rapat</h4>
          <div class="d-flex gap-4">
            <div class="mb-3">
              <label for="tanggal" class="fw-bold mb-3">Tanggal Rapat</label>
              <input type="text" class="form-control" id="tanggal" />
            </div>
            <div class="mb-3">
              <label for="wmulai" class="fw-bold mb-3">Waktu Mulai</label>
              <input type="text" class="form-control" id="wmulai" />
            </div>
            <div class="mb-3">
              <label for="wselesai" class="fw-bold mb-3">Waktu Selesai</label>
              <input type="text" class="form-control" id="wselesai" />
            </div>
          </div>
          <div class="mb-3">
            <label for="peserta" class="fw-bold mb-3">Jumlah Peserta</label>
            <input type="text" class="form-control" id="peserta" />
          </div>
          <div class="mb-3">
            <label for="konsumsi1" class="fw-bold mb-3">Konsumsi Rapat</label>
            <div v-for="data in konsumsi" :key="data.id" class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="data.name"
              />
              <label class="form-check-label" for="data.name">
                {{ data.name }}
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label for="nominal" class="fw-bold mb-3">Nominal Konsumsi</label>
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Rp</span>
              <input type="text" class="form-control" id="nominal" />
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            class="btn btn-light text-danger me-md-2 cancel"
            type="button"
          >
            Batal
          </button>
          <button class="btn btn-primary save" type="button">Simpan</button>
        </div>
      </form>
    </div>
  </main>
</template>
<style scoped>
.btn-back {
  background-color: #4a8394;
  color: white;
  font-size: 12px;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
}

.form-control,
.input-group {
  width: 250px;
}

.save,
.cancel {
  font-weight: 500;
}
</style>