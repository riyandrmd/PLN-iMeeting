<template>
  <main class="container-fluid">
    <div class="d-flex m-3">
      <RouterLink
        class="btn d-flex align-items-center justify-content-center"
        to="/ruangmeeting"
      >
        <i class="bi bi-chevron-left"></i>
      </RouterLink>
      <div class="ms-2">
        <h1 class="fs-2">Ruang Meeting</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Ruang Meeting</li>
            <li class="breadcrumb-item active" aria-current="page">
              Pesan Ruangan
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div>
      <div>
        <h3>Informasi Ruang Meeting</h3>
        <label for="unit">
          Unit
          <input type="text" name="unit" id="unit" />
        </label>
        <label for="ruangan">
          Ruang Meeting
          <input type="text" name="ruangan" id="ruangan" />
        </label>
        <label for="kapasitas">
          kapasitas
          <input type="number" name="kapasitas" id="kapasitas" />
        </label>
      </div>
      <div>
        <h3>Informasi Rapat</h3>
        <label for="tanggal">
          Unit
          <input type="date" name="tanggal" id="tanggal" />
        </label>
        <label for="ruangan">
          Waktu Mulai
          <input type="time" name="ruangan" id="ruangan" />
        </label>
        <label for="kapasitas">
          Waktu Selesai
          <input type="time" name="kapasitas" id="kapasitas" />
        </label>
      </div>
      <div>
        <h3>Jumlah Peserta</h3>
        <label for="peserta">
          <input type="number" name="tanggal" id="tanggal" />
        </label>
      </div>
      <div>
        <h3>Jenis Komsumsi</h3>
      </div>
      <div>
        <h3>JNominal Konsumsi</h3>
      </div>
    </div>
  </main>
</template>
<style scoped>
.btn {
  background-color: #4a8394;
  color: white;
  font-size: 12px;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
}
</style>