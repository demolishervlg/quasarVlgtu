<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar rounded>
            <img src="../assets/appicon.png">
          </q-avatar>
          Events app
        </q-toolbar-title>

        <div class="q-pa-md">
          <q-btn-dropdown
            class=""
            color="transparent"
            label="Аккаунт"
          >
            <div class="row no-wrap q-pa-md justify-center">
              <div class="column items-center">
                <q-avatar size="">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Артур Белых</div>

                <q-btn
                  color="primary"
                  label="Выход"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: rgb(242, 242, 242);  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);"
    >
      <q-list>
        <br>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const mobileData = ref(false)
const bluetooth = ref(false)

const linksList = [
  {
    title: 'События',
    caption: '',
    icon: 'event',
    link: '/#/events'
  },
  {
    title: 'Новости',
    caption: '',
    icon: 'article',
    link: '/#/news'
  },
  {
    title: 'Аналитика',
    caption: '',
    icon: 'trending_up',
    link: '/#/analytics'
  },
  {
    title: 'Пользователи',
    caption: '',
    icon: 'group',
    link: '/#/people'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped lang="scss">
.q-header{
  background-color: #111111;
}
</style>
