<template>
  <v-app>
    <toolbar class="d-lg-none d-block" />
    <v-row>
      <v-col class="d-lg-flex d-none" cols="3">
        <NavigationDesktop/>
      </v-col>
      <v-col lg="8" md="10">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import toolbar from './components/Navbar/toolbar.vue'
import NavigationDesktop from './components/Navbar/navigation_desktop.vue'
export default {
  name: 'App',

  data: () => ({}),
  components:{
    toolbar,
    NavigationDesktop
  }
};
</script>
