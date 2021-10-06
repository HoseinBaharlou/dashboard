<template>
    <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ attrs, on }">
            <v-btn v-bind="attrs" v-on="on" text x-small fab @click="Menu = !Menu">
              <v-avatar size="50">        
                <v-img  src="icon/2.jpg"></v-img>
              </v-avatar>
              <v-icon v-show="Menu == false">mdi-chevron-down</v-icon>
              <v-icon v-show="Menu == true">mdi-chevron-up</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <v-avatar size="50">
                    <v-img  src="icon/2.jpg"></v-img>
                </v-avatar>
                <p class="mx-2">حسین بهارلو</p>
            </v-card-title>
        </v-card>
        <v-list>
            <v-list-item v-for="information in ProfileMenu" :key="information.title" :to="information.router">
                <v-list-item-icon><v-icon>{{information.icon}}</v-icon></v-list-item-icon>
                <v-list-item-title>{{information.title}}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script>
import {mapState} from 'vuex'
export default ({
    data() {
        return{
            Menu:false
        }
    },
    computed:{
        ...mapState(['ProfileMenu'])
    }

})
</script>
