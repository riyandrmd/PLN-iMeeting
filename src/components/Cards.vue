<script setup>
import axios from "axios";
import { watch, computed, onBeforeMount, onMounted, reactive, ref } from "vue";
import CardItem from "@/components/CardsItem.vue";

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
    // console.log(summaryByPeriod);
  }
});

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
      <option value="" disabled selected>Jan-2024</option>
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
      <CardItem :summaryData="summaryByPeriod" />
    </div>
  </main>
</template>