<template>
  <v-app>
    <toolbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import toolbar from './components/Navbar/toolbar.vue'
export default {
  name: 'App',

  data: () => ({}),
  components:{
    toolbar
  }
};
</script>
