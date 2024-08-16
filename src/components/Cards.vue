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
    console.log(summaryByPeriod)
  }
});

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
    <div class="wrapper">
      <div class="card-wrapper">
        <h6>Unit Kantor</h6>
        <div class="card" style="width: 14rem">
          <div class="card-body">
            <p>Ruang Prambanan</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>