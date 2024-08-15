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
            <router-link class="breadcrumb-item text-decoration-none"
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
              <label for="unit" class="form-label">Email address</label>
              <input type="text" class="form-control" id="unit" />
            </div>
            <div class="mb-3">
              <label for="ruang">Ruang Meeting</label>
              <input type="text" class="form-control" id="ruang" />
            </div>
          </div>
          <div class="mb-3">
            <label for="kapasitas">Kapasitas</label>
            <input
              class="form-control"
              type="text"
              value="Readonly input here..."
              aria-label="readonly input example"
              readonly
            />
          </div>
        </div>
        <div class="mb-4 pb-4 border-bottom">
          <h4 class="fs-5">Informasi Rapat</h4>
          <div class="d-flex gap-4">
            <div class="mb-3">
              <label for="tanggal">Tanggal Rapat</label>
              <input type="text" class="form-control" id="tanggal" />
            </div>
            <div class="mb-3">
              <label for="wmulai" class="fw-normal">Waktu Mulai</label>
              <input type="text" class="form-control reado" id="mulai" />
            </div>
            <div class="mb-3">
              <label for="welesai">Waktu Selesai</label>
              <input type="text" class="form-control" id="selesai" />
            </div>
          </div>
          <div class="mb-3">
            <label for="peserta">Jumlah Peserta</label>
            <input type="text" class="form-control" id="peserta" />
          </div>
          <div class="mb-3">
            <label for="konsumsi">Konsumsi Rapat</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="konsumsi"
              />
              <label class="form-check-label" for="flexCheckDefault"
                >Default checkbox</label
              >
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="konsumsi"
              />
              <label class="form-check-label" for="flexCheckDefault"
                >Default checkbox</label
              >
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="konsumsi"
              />
              <label class="form-check-label" for="flexCheckDefault"
                >Default checkbox</label
              >
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

.form-control {
  width: 250px;
  margin-top: 5px;
}

.save,
.cancel {
  font-weight: 500;
}
</style>