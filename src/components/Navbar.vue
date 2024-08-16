<template>
  <nav class="navbar navbar-expand-lg text-light py-1 px-3">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-center">
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="@/assets/pln_icon.png"
            height="50"
            alt="pln logo"
            loading="lazy"
          />
        </a>
        <h1 class="fs-6 ms-2 mb-0">iMeeting</h1>
      </div>

      <div class="d-flex align-items-center gap-2">
        <button
          class="btn btn-primary d-flex align-items-center me-3"
          type="button"
        >
          <i class="bi bi-megaphone me-2 fs-5"></i>
          Kontak Aduan
        </button>
        <a class="link-secondary me-3" href="#">
          <i class="bi bi-bell text-light"></i>
        </a>
        <div class="d-flex align-items-center justify-content-center">
          <a class="mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-circle"
              height="40"
              alt="Avatar"
              loading="lazy"
            />
          </a>
          <p class="ms-3 mb-0">Jhon Doe</p>
          <i class="ms-4 bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(45deg, #19a3bb, #296377);
}

.bi-chevron-down {
  font-size: 10px;
}

nav, .btn {
  font-size: 14px;
}

.btn {
  border-radius: 10px;
  padding: 8px 10px;
}
</style>