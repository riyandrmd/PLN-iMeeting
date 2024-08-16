<script setup>
import axios from "axios";
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
    <h2 class="fs-4">Dashboard</h2>
    <select class="form-select form-control mb-3" v-model="periode">
      <option v-for="data in allSummary" :key="data.id" :value="data.period">
        {{ data.period }}
      </option>
    </select>
    <div class="container mt-4 d-flex gap-4 flex-wrap">
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
            <h6>{{ data.officeName }}</h6>
            <div class="card" style="width: 14rem">
              <div class="card-body">
                <p class="card-text">{{ room.roomName }}</p>
                <p class="card-text">
                  persentasi :
                  <span>{{ calculateOccupancyPercentage(room) }}%</span>
                </p>
                <p>
                  Total Konsumsi :
                  <span>Rp. {{ calculateTotalConsumption(room).toLocaleString() }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>