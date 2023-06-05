<template>
  <div class="q-pa-md">
    <div class="news row justify-center q-gutter-sm">
      <div class="news-name">
        <q-input label="Название"  v-model="name"/>
      </div>
      <div class="news-text">
        <editor-component></editor-component>
      </div>
      <div class="news-picture">
        <q-file filled bottom-slots v-model="picture" label="Нажмите для загрузки" counter>
          <template v-slot:prepend>
            <q-icon name="cloud_upload" @click.stop.prevent />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
          </template>

          <template v-slot:hint>
            Размер файла:
          </template>
        </q-file>
      </div>
      <div class="buttons">
        <q-btn color="secondary" label="Сохранить" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RadarCharts from 'components/RadarCharts.vue'
import { ref } from "vue"
import EditorComponent from 'components/EditorComponent.vue'

const name = ref()
const picture = ref()
</script>

<style scoped lang="scss">
.news{
  display: flex;
  flex-direction: column;
  width: 100%;

  &-name{
    margin-bottom: 20px;
  }
  &-text{
    width: 100%;
  }
}
.buttons{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
}

</style>
