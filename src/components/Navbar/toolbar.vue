<template>
  <div>
    <v-app-bar light elevation="0" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-show="drawer == false"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer class="danger" app right overlay-opacity="0" text stateless v-model="drawer" :mini-variant.sync="mini" mini-variant-width="125">
      <div class="my-10 mx-4 d-flex justify-space-between">
        <v-btn depressed @click.stop="mini = !mini">
          <span><img src="logo.png" alt="" height="19px" width="88px"></span>
        </v-btn>
        <v-icon @click="drawer = false">mdi-close</v-icon>
      </div>
      <Vlist :links='links'/>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Vlist from './Vlist.vue'
export default ({
    data() {
        return{
          drawer:true,
          mini: true,
          links:[
            {'icon':'mdi-view-dashboard','title':'پنل مدیریت','router':'/'}
          ]
        }
    },
    components:{
      Vlist
    }
})
</script>
<style scoped>
  .v-navigation-drawer{
    z-index: 9999 !important;
  }
</style>