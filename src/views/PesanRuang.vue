<script setup>
import { computed, onBeforeMount, onMounted, reactive, ref, watch } from "vue";
import axios from "axios";

const ruangMeeting = reactive([]);
const unit = reactive([]);
const konsumsi = reactive([]);
const unitSelected = ref("");
const ruangSelected = ref("");
const waktuMulai = ref("");
const waktuSelesai = ref("");
const tanggalRapat = ref();
const jumlahPeserta = ref(0);

const getJenisKonsumsi = async () => {
  await axios
    .get(
      "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi"
    )
    .then((res) => {
      konsumsi.splice(
        0,
        konsumsi.length,
        ...res.data.map((item) => ({
          id: item.id,
          name: item.name,
          maxPrice: item.maxPrice,
          checked: false,
        }))
      );

      console.log(konsumsi);
    });
};

const setChecked = (name) => {
  const item = konsumsi.find((i) => i.name === name);
  if (item) {
    item.checked = true;
  }
};

const checkedKonsumsi = () => {
  //membuat check otomatis sesuai inputan waktu selesai
  const time = waktuSelesai.value;
  const [hours, minutes] = time.split(":").map(Number);
  konsumsi.forEach((item) => (item.checked = false));

  if (hours < 11) {
    setChecked("Snack Siang");
  } else if (hours > 11 && hours < 14) {
    setChecked("Makan Siang");
    setChecked("Snack Siang");
  } else if (hours > 14) {
    setChecked("Snack Sore");
    setChecked("Makan Siang");
    setChecked("Snack Siang");
  }
};

watch(waktuSelesai, () => {
  checkedKonsumsi();
});

const totalPrice = computed(() => {
  const total = konsumsi
    .filter((item) => item.checked === true)
    .reduce((acc, item) => acc + item.maxPrice, 0);

  return total * jumlahPeserta.value;
});

const validateTanggal = () => {
  const today = new Date().setHours(0, 0, 0, 0);
  const selectedDate = new Date(tanggal.value).setHours(0, 0, 0, 0);
  if (selectedDate < today) {
    alert("Tanggal sudah terlewati.");
    tanggal.value = null;
  }
};

const validateWaktu = () => {
  if (
    waktuSelesai.value &&
    waktuMulai.value &&
    waktuSelesai.value <= waktuMulai.value
  ) {
    alert(
      "Waktu selesai tidak boleh lebih kecil atau sama dengan waktu mulai."
    );
    waktuSelesai.value = "";
    waktuMulai.value = "";
  }
};

const getUnit = async () => {
  await axios
    .get(
      "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterOffice"
    )
    .then((res) => {
      unit.push(...res.data);
    });
};

const getRoomMeeting = async () => {
  await axios
    .get(
      "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterMeetingRooms"
    )
    .then((res) => {
      ruangMeeting.push(...res.data);
    });
};

const capacity = computed(() => {
  // console.log("active");
  const selected = ruangMeeting.find(
    (room) => room.roomName === ruangSelected.value
  );
  return selected ? selected.capacity : 0;
});

onMounted(() => {
  getJenisKonsumsi();
  getUnit();
  getRoomMeeting();
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
              <label for="unit" class="fw-bold mb-3">Unit</label>
              <select
                class="form-select form-control mb-3"
                v-model="unitSelected"
                id="unit"
                required
              >
                <option
                  v-for="data in unit"
                  :key="data.id"
                  :value="data.officeName"
                >
                  {{ data.officeName }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="ruang" class="fw-bold mb-3">Ruang Meeting</label>
              <select
                class="form-select form-control mb-3"
                v-model="ruangSelected"
                id="ruang"
              >
                <option
                  v-for="data in ruangMeeting"
                  :key="data.id"
                  :value="data.roomName"
                >
                  {{ data.roomName }}
                </option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <label for="kapasitas" class="fw-bold mb-3">Kapasitas</label>
            <input
              class="form-control"
              type="text"
              id="kapasitas"
              :value="capacity"
              disabled
            />
          </div>
        </div>
        <div class="mb-4 pb-4 border-bottom">
          <h4 class="fs-5">Informasi Rapat</h4>
          <div class="d-flex gap-4">
            <div class="mb-3">
              <label for="tanggal" class="fw-bold mb-3">Tanggal Rapat</label>
              <input
                type="date"
                class="form-control"
                id="tanggal"
                v-model="tanggalRapat"
                @change="validateTanggal"
                required
              />
            </div>
            <div class="mb-3">
              <label for="wmulai" class="fw-bold mb-3">Waktu Mulai</label>
              <input
                type="time"
                v-model="waktuMulai"
                class="form-control"
                @change="validateWaktu"
                id="wmulai"
                required
              />
            </div>
            <div class="mb-3">
              <label for="wselesai" class="fw-bold mb-3">Waktu Selesai</label>
              <input
                type="time"
                v-model="waktuSelesai"
                class="form-control"
                id="wselesai"
                @change="validateWaktu"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="peserta" class="fw-bold mb-3">Jumlah Peserta</label>
            <input
              type="number"
              class="form-control"
              id="peserta"
              v-model="jumlahPeserta"
              required
            />
          </div>
          <div class="mb-3">
            <label class="fw-bold mb-3">Konsumsi Rapat</label>
            <div v-for="data in konsumsi" :key="data.id" class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :value="data.name"
                :id="data.name"
                v-model="data.checked"
              />
              <label class="form-check-label" :for="data.name">
                {{ data.name }}
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label for="nominal" class="fw-bold mb-3">Nominal Konsumsi</label>
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Rp</span>
              <input
                type="text"
                class="form-control"
                id="nominal"
                :value="totalPrice"
                disabled
              />
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
          <button class="btn btn-primary save" type="submit">Simpan</button>
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