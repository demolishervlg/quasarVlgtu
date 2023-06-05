<template>
  <div>
    <Radar :data="radarChartData" :options="radarChartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const radarChartData = {
  labels: ["Проведено", "Активно", "Планируется"],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [5, 4, 6]
    }
  ]
}

const radarChartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<style scoped>

</style>
