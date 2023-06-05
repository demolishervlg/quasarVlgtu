<template>
  <q-page class="col items-center justify-center q-pa-md">
    <div class="row items-center justify-center">
      <q-list class="list-base-analytics">
        <q-item>
            Проведено 5
        </q-item>
        <q-item>
            Активно 4
        </q-item>
        <q-item>
            Планируется 6
        </q-item>
      </q-list>
    </div>
    <br>
    <div class="container">
      <list-people-component class="list-people" />
      <q-list class="row items-center justify-center list-charts" bordered>
        <pie-charts />
        <radar-charts />
      </q-list>
      <q-list class="row items-center justify-center list-charts" bordered>
        <pie-charts />
        <radar-charts />
      </q-list>
    </div>
    <br>
    <line-chart />
  </q-page>
</template>

<script setup lang="ts">
import RadarCharts from 'components/RadarCharts.vue'
import PieCharts from 'components/PieCharts.vue'
import LineChart from 'components/LineChart.vue'
import ListPeopleComponent from "components/ListPeopleComponent.vue"
</script>

<style scoped lang="scss">
.container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  justify-content: space-between;
  gap: 20px;
}

.list-base-analytics{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  justify-items: center;
  gap: 20px;

  .q-item{
    border: 1px solid #111111;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
  }
}

.list{
}

</style>
