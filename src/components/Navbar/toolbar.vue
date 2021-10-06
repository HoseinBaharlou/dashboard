<template>
  <div>
    <v-app-bar elevation="0" app clipped-right class="px-2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none d-block"></v-app-bar-nav-icon>
      <!-- <v-switch :label="SwitchLabel" :value="SwitchValue" color="primary" v-model="SwitchChangeThem"></v-switch> -->
      <div class="d-md-block d-none">
        <v-app-bar-nav-icon v-show="mini == true" @click="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-nav-icon v-show="mini == false" @click="mini = !mini">
          <v-icon>mdi-chevron-right</v-icon>
        </v-app-bar-nav-icon>
      </div>
      <v-spacer></v-spacer>
      <div class="mx-7 mt-1">
        <ProfileMenu />
      </div>
      <v-switch :label="SwitchLabel" color="primary" v-model="$vuetify.theme.dark" class="mt-5" v-if="$vuetify.theme.dark==true ? SwitchLabel='پس زمینه سیاه':SwitchLabel='پس زمینه سفید'"></v-switch>
    </v-app-bar>
    <v-navigation-drawer class="danger" app right overlay-opacity="0" clipped text stateless v-model="drawer" :mini-variant.sync="mini">
      <Vlist :links='links'/>
    </v-navigation-drawer>
  </div>
</template>
<script>
import ProfileMenu from './ProfileMenu.vue'
import Vlist from './Vlist.vue'
import {mapState} from 'vuex'
export default ({
    data() {
        return{
          drawer:false,
          mini: false,
          value_mini_varient:false,
          SwitchChangeThem:false,
          SwitchLabel:'پس زمینه سفید'
        }
    },
    created:function (){
      if(this.$vuetify.breakpoint.name == "md" || this.$vuetify.breakpoint.name == "lg" || this.$vuetify.breakpoint.name == "xl"){
        this.drawer = true
        this.mini = true
        this.value_mini_varient == true
      }
    },
    components:{
      Vlist,
      ProfileMenu
    },
    computed:{
      ...mapState(['links']),
      SwitchThem(){
        if(this.SwitchChangeThem){
          this.SwitchLabel = 'پس زمینه سیاه'
        }else{
          this.SwitchLabel = 'پس زمینه سفید'
        }
      }
    },
})
</script>
<style scoped>
  .v-navigation-drawer{
    z-index: 9999 !important;
  }
</style>