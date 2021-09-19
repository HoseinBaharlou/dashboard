<template>
      <div>
        <v-app-bar light elevation="0">
          <v-app-bar-nav-icon class="d-lg-none d-block" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer class="danger" app right overlay-opacity="0" text stateless v-model="drawer">
          <div class="my-10 mx-4 d-flex justify-space-between">
            <span><img src="logo.png" alt="" height="19px" width="88px"></span>
            <v-icon @click="drawer = false" class="d-lg-none d-md-block">mdi-close</v-icon>
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
          links:[
            {'icon':'mdi-view-dashboard','title':'پنل مدیریت','router':'/'}
          ]
        }
    },
    components:{
      Vlist
    },
    mounted: function(){
      if(this.$vuetify.breakpoint.name == "lg"){
        this.drawer = true
      }
    }
})
</script>
