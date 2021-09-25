<template>
  <v-app>
    <v-main>
      <Header />
      <v-row>
        <v-col cols="12">
          <router-view></router-view>
          <Footer class="mt-10"/>
        </v-col>
      </v-row>
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
<style scoped>
  body{
    font-family: IRANSans !important;
  }
</style>