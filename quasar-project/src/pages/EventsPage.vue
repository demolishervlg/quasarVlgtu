<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-accent text-white">
      <q-card-section>
        <div class="text-h6">Хакатон в Волгограде</div>
        <div class="text-subtitle2">Артур Белых</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Изменить</q-btn>
        <q-btn flat>Удалить</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Речная прогулка с прохождением шлюзов Волжской ГЭС</div>
        <div class="text-subtitle2">Артур Белых</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Изменить</q-btn>
        <q-btn flat>Удалить</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card bg-amber text-white">
      <q-card-section>
        <div class="text-h6">Гастроли столичных театров в Волгограде</div>
        <div class="text-subtitle2">Артур Белых</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Изменить</q-btn>
        <q-btn flat>Удалить</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card bg-amber text-white">
      <q-card-section>
        <div class="text-h6">СК "Ротор" vs ФК "Кубань-Холдинг"</div>
        <div class="text-subtitle2">Артур Белых</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Изменить</q-btn>
        <q-btn flat>Удалить</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card bg-blue text-white">
      <q-card-section>
        <div class="text-h6">Фестиваль Ультра 100 Беговые дистанции</div>
        <div class="text-subtitle2">Артур Белых</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Изменить</q-btn>
        <q-btn flat>Удалить</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card bg-blue text-white">
      <q-card-section>
        <div class="text-h6">ГОНЧАРНОЕ РЕМЕСЛО, КАК ДРЕВНЕЙШЕЕ ИСКУССТВО. МАСТЕР-КЛАСС</div>
        <div class="text-subtitle2">Артур Белых</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Изменить</q-btn>
        <q-btn flat>Удалить</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Ансамбль песни и танца Калмыкии «Тюльпан»</div>
        <div class="text-subtitle2">Артур Белых</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Изменить</q-btn>
        <q-btn flat>Удалить</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="add" href="/#/events-add" color="pink-6" />
  </q-page-sticky>
</template>

<script setup lang="ts">

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
