<template>
  <v-app>
    <v-main>
      <Header />
      <v-row class="my-0">
        <v-col cols="12">
          <router-view></router-view>
        </v-col>
      </v-row>
      <Footer class="mt-10"/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'
export default {
  name: 'App',

  data: () => ({}),
  components:{
    Header,
    Footer
  }
};
</script>
<style>
  *{
    font-family: 'Shabnam',cursive ;
  }
</style>