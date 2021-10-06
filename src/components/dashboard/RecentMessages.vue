<template>
    <div>
        <h4 class="blue-grey--text darken-4 title text-center pt-2">پیام های اخیر</h4>
        <div class="mt-8 pb-3" v-for="Data in RecentMessages" :key="Data.Title">
            <profile size='48' :icon='Data.icon' :Title='Data.Title' :Subtitle='Data.Subtitle' class="pr-3"/>
        </div>
    </div>
</template>
<script>
import profile from '../dashboard/profile.vue'
import {mapState} from 'vuex'
export default ({
    name:'RecentMessages',
    computed: {
        ...mapState(['RecentMessages'])
    },
    components:{
        profile
    }
})
</script>
