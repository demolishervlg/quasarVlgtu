<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 160"
        :key="index"
        once
        transition="scale"
        class="example-item"
      >
        <router-link
          :to="'/news/'+index"
          class="item"
        >
          <q-card flat bordered class="q-ma-sm">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section>
              <div class="text-h6"> Новость #{{ index }}</div>
              <div class="text-subtitle2">Артур Белых</div>
            </q-card-section>
          </q-card>
        </router-link>
      </q-intersection>
    </div>
  </div>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="add" color="pink-6" />
  </q-page-sticky>
</template>

<script setup lang="ts">
import RadarCharts from 'components/RadarCharts.vue'
</script>

<style scoped lang="scss">
.example-item{
  text-decoration: none;
  height: 300px;
  width: 300px;
  .item{
    text-decoration: none;
  }
}

</style>
