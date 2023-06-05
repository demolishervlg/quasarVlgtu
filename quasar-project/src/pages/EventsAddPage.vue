<template>
  <div class="q-pa-md">
    <div class="news row justify-center q-gutter-sm">
      <div class="news-name">
        <q-input label="Название" id="name" v-model="name"/>
        <div class="q-pa-md row no-wrap items-center justify-around">
          <q-btn :dense="$q.screen.xs" no-caps label="Цвет карточки" icon-right="colorize" v-bind:style="{ background: colorFace }">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="colorFace" />
            </q-popup-proxy>
          </q-btn>
        </div>
      </div>
      <div class="news-text">
        <editor-component v-model="text"></editor-component>
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
      <q-stepper
        v-model="step"
        header-nav
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Артур Белых"
          icon="add_comment"
          :done="done1"
        >
         Рассказывает о Frontend-разработке, vue js, typescript

          <q-stepper-navigation>
            <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Далее" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Подлегаева Анастасия"
          icon="add_comment"
          :done="done2"
        >
          Обучает людей разминке во время работы

          <q-stepper-navigation>
            <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Вперед" />
            <q-btn flat @click="step = 1" color="primary" label="Назад" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Андреев Андрей Евгеньевич"
          icon="add_comment"
          :done="done3"
        >
          Обучает людей

          <q-stepper-navigation>
            <q-btn flat @click="step = 2" color="primary" label="Назад" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
      <div class="row">
        <div class="people">
          <q-list bordered class="rounded-borders">
            <q-item-label header class="text-center">Участники ивента</q-item-label>
            <q-separator />
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
            <div class="q-pa-md q-gutter-sm">
              <q-btn label="Добавить" color="primary" @click="dialog = true" />

              <q-dialog
                v-model="dialog"
                persistent
                :maximized="maximizedToggle"
                transition-show="slide-up"
                transition-hide="slide-down"
              >
                <q-card class="bg-white text-white">
                  <q-bar>
                    <q-space />

                    <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                      <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
                    </q-btn>
                    <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                      <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
                    </q-btn>
                    <q-btn dense flat icon="close" v-close-popup>
                      <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                  </q-bar>
                  <q-card-section>
                    <q-list>
                      <q-item-label header class="text-center">Добавить участника</q-item-label>
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
                            <q-item-label lines="1">Brunch this weekend?</q-item-label>
                            <q-item-label caption lines="2">
                              <span class="text-weight-bold">Janet</span>
                              -- I'll be in your neighborhood doing errands this
                              weekend. Do you want to grab brunch?
                            </q-item-label>
                          </q-item-section>

                          <q-item-section side top>
                            1 min ago
                          </q-item-section>
                        </q-item>
                      </div>
                    </q-list>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
        </div>
      </div>
      <div class="buttons">
        <q-btn color="secondary" label="Сохранить" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RadarCharts from 'components/RadarCharts.vue'
import { computed, ref } from "vue"
import EditorComponent from 'components/EditorComponent.vue'

const colorFace = ref('#B33636')
const dialog = ref(false)
const maximizedToggle = ref(true)

const step = ref(1)
const done1 = ref(false)
const done2 = ref(false)
const done3 = ref(false)

const name = ref()
const text = ref("Текст")
const picture = ref()
</script>

<style scoped lang="scss">
.news{
  display: flex;
  flex-direction: column;
  width: 100%;

  &-name{
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 250px;

    @media (max-width: 600px){
      grid-template-columns: 1fr;
    }
   input{
     width: 100%;
   }
  }
  &-text{
    width: 100%;
  }
}
.my-picker{
  max-width: 250px;
}

.buttons{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
}

</style>
