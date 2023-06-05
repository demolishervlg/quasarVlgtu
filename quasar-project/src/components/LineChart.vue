<template>
  <div>
    <LineWithLineChart class="LineWithLineChart" :data="lineChartData" :options="lineChartOptions" />
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import LineWithLineChart from 'components/LineWithLineChart.ts'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40, 10, 40, 39, 80, 40]
    },
    {
      label: 'Data two',
      backgroundColor: '#1139e0',
      data: [33, 23, 35, 15, 32, 43, 12, 43, 12, 53, 12, 53]
    }
  ]
}

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    intersect: false
  }
}
</script>

<style scoped>
.LineWithLineChart{
  height: 400px;
}
</style>
