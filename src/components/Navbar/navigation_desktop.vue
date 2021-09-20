<template>
    <v-navigation-drawer app right>
        <div class="my-10 mx-4 d-flex justify-space-between">
            <span><img src="logo.png" alt="" height="19px" width="88px"></span>
            <v-icon @click="drawer = false" class="d-lg-none d-md-block">mdi-close</v-icon>
        </div>
        <Vlist :links='links'/>
    </v-navigation-drawer>
</template>
<script>
import Vlist from './Vlist.vue'
export default ({
    data() {
        return{
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