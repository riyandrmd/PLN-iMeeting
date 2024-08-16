<script setup>
import axios from "axios";
import CircleProgress from "vue3-circle-progress";
import { watch, computed, onBeforeMount, onMounted, reactive, ref } from "vue";

const allSummary = reactive([]);
const summaryByPeriod = reactive({});
const periode = ref("");

const getSummary = async () => {
  try {
    const res = await axios.get(
      "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/summaryBookings"
    );

    allSummary.push(...res.data);
    Object.assign(summaryByPeriod, allSummary[0]);
    console.log(summaryByPeriod);
  } catch (error) {
    console.error("Error fetching summary:", error);
  }
};

watch(periode, (newPeriod) => {
  const selectedSummary = allSummary.find(
    (summary) => summary.period === newPeriod
  );
  if (selectedSummary) {
    Object.assign(summaryByPeriod, selectedSummary);
    console.log(summaryByPeriod);
  }
});

const calculateOccupancyPercentage = (room) => {
  return ((room.averageOccupancyPerMonth / room.capacity) * 100).toFixed(2);
};

const calculateTotalConsumption = (room) => {
  return room.totalConsumption.reduce(
    (sum, item) => sum + parseInt(item.totalPrice),
    0
  );
};

onMounted(() => {
  getSummary();
});
</script>

<template>
  <main class="container-fluid">
    <div class="d-flex justify-content-between align-items-center">
      <h2 class="fs-5 fw-bold mt-3">
        <i class="bi bi-gear me-2"></i>DASHBOARD
      </h2>
      <i class="bi bi-chevron-right"></i>
    </div>
    <p class="fs mb-0">Periode</p>
    <select class="form-select form-control fs-6 mb-3" v-model="periode">
      <option class="fs-6" value="" disabled selected>Periode</option>
      <option
        class="fs-6"
        v-for="data in allSummary"
        :key="data.id"
        :value="data.period"
      >
        {{ data.period }}
      </option>
    </select>
    <div class="mt-4 d-flex gap-4 flex-wrap">
      <div
        v-for="(data, index) in summaryByPeriod.data"
        :key="index"
        class="mb-4"
      >
        <div class="d-flex gap-4">
          <div
            class="card-container"
            v-for="(room, index) in data.detailSummary"
            :key="index"
          >
            <h6 class="fw-bold text-secondary">
              <i class="bi bi-lightning-charge"></i>
              {{ data.officeName }}
            </h6>
            <div class="card border-0 bg-body-secondary" style="width: 14rem">
              <div class="card-body">
                <p class="card-text mb-2 fw-bold">
                  {{ room.roomName }}
                </p>
                <div class="d-flex justify-content-between">
                  <div>
                    <p class="card-text fs mb-0">Persentasi Pemakaian</p>
                    <strong class="fs-4"
                      >{{ calculateOccupancyPercentage(room) }}%</strong
                    >
                  </div>
                  <div class="progress-container">
                    <circle-progress
                      :percent="calculateOccupancyPercentage(room)"
                      :size="60"
                      :border-width="12"
                      :border-bg-width="15"
                      fill-color="#19a3bb"
                    />
                  </div>
                </div>
                <p class="card-text fs mb-0">Nominal Konsumsi</p>
                <strong class="fs-4"
                  >Rp.
                  {{ calculateTotalConsumption(room).toLocaleString() }}</strong
                >
                <div
                  class="d-flex align-items-center"
                  v-for="(konsumsi, index) in room.totalConsumption"
                  :key="index"
                >
                  <small class="w-50">{{ konsumsi.name }}</small>
                  <div class="container-fluid">
                    <small class="mb-0 fs">{{ konsumsi.totalPackage }}</small>
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      :aria-valuenow="konsumsi.totalPackage"
                      aria-valuemin="10"
                      aria-valuemax="200"
                    >
                      <div
                        class="progress-bar"
                        :style="{
                          width:
                            (100 * (konsumsi.totalPackage - 1)) / (200 - 10) +
                            '%',
                        }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.fs {
  font-size: 12px;
}

small {
  font-size: 10px;
  font-weight: 600;
}

.progress {
  height: 8px;
}

.progress-bar {
  background-color: #19a3bb;
}

.progress-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}
</style>