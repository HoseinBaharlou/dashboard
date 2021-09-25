<template>
  <div>
    <v-app-bar light elevation="0" app>
      <v-app-bar-nav-icon @click.stop="(drawer = !drawer) && (mini = !mini)" v-show="drawer == false"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer class="danger" app right overlay-opacity="0" text stateless v-model="drawer" :mini-variant.sync="mini">
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
          drawer:false,
          mini: false,
          links:[
            {'icon':'mdi-view-dashboard','title':'پنل مدیریت','router':'/'}
          ]
        }
    },
    created:function(){
      if(this.$vuetify.breakpoint.name == "md" || this.$vuetify.breakpoint.name == "lg" || this.$vuetify.breakpoint.name == "xl"){
        this.drawer = true
        this.mini = true
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