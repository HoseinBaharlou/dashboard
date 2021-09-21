<template>
    <div>
        <h4 class="blue-grey--text darken-4">پیام های اخیر</h4>
        <div class="mt-8" v-for="Data in DataObj" :key="Data.Title">
            <profile size='48' :icon='Data.icon' :Title='Data.Title' :Subtitle='Data.Subtitle'/>
        </div>
    </div>
</template>
<script>
import profile from '../dashboard/profile.vue'
export default ({
    name:'RecentMessages',
    data() {
        return{
            DataObj:[
                {'icon':'icon/1.jpg','Title':'رضا میرزایی','Subtitle':'@reza'},
                {'icon':'icon/2.jpg','Title':'سریا قمبر پور','Subtitle':'@ghambarnezad'},
                {'icon':'icon/5.jpg','Title':'حسین بت شکن','Subtitle':'@hosein'}
            ]
        }
    },
    components:{
        profile
    }
})
</script>
