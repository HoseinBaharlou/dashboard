<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import toolbar from './components/Navbar/toolbar.vue'
import NavigationDrawer from './components/Navbar/NavigationDrawer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    toolbar,
    NavigationDrawer
  }
};
</script>
