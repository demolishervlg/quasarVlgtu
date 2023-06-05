<template>
  <q-card-section>
    <q-list>
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; padding: 10px; gap: 20px;">
        <q-item
          clickable
          v-ripple
          v-for="index in 20"
          :key="index"
          style="max-width: 350px"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Подлегаева Анастасия</q-item-label>
            <q-item-label caption lines="2">
              Студент
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-card-section>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="add" color="pink-6" />
  </q-page-sticky>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>
