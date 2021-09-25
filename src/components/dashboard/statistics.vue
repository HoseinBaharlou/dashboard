<template>
    <div>
        <v-row class="statistics mt-5">
            <v-col md="3" cols="6" class="d-flex" v-for="statistic in statistics" :key="statistic.title">
                <v-row>
                    <v-col md="6" cols="12" class="text-center">
                        <v-chip  class="rounded-lg pa-5" :class="statistic.color">
                            <v-icon class="white--text" size="25">{{statistic.icon}}</v-icon>
                        </v-chip>
                    </v-col>
                    <v-col md="6" cols="12">
                        <span class="text-center">
                            <h4 class="grey--text">{{statistic.title}}</h4>
                            <p class="caption">{{statistic.subtitle}}</p>
                        </span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'statistics',
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(['statistics'])
    }
}
</script>