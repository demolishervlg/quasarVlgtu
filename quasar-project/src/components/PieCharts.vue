<template>
  <div>
    <Pie
      id="my-chart-id"
      :options="pieChartOptions"
      :data="pieChartData"
    />
  </div>
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const pieChartData = {
  labels: ["Проведено", "Активно", "Планируется"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
      data: [5, 4, 6]
    }
  ]
}
const pieChartOptions = {
  responsive: true
}
</script>

<style scoped>

</style>
