<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col md="8" cols="12" class="mt-5">
                    <ProfileStatistics />
                </v-col>
                <v-col md="8" cols="12" class="mt-5">
                    <ProfileVisit />
                    <BarChart />
                </v-col>
                <v-col md="8" cols="12">
                    <v-row>
                        <v-col md="4" cols="12">
                            <ProfileVisit />
                            <CustomTitle ColorFill='#5350e9' :title="['اروپا','862']" class="mt-5"/>
                            <AreaChart colorline="#5350e9" fillchart="#5350e9" height="80"/>
                            <CustomTitle ColorFill='#008b75' :title="['آمریکا','375']" class="mt-5"/>           
                            <AreaChart colorline="#008b75" fillchart="#008b75" height="80"/>
                            <CustomTitle ColorFill='#dc3545' :title="['اندونزی','1025']" class="mt-5"/>
                            <AreaChart colorline="#dc3545" fillchart="#dc3545" height="80"/>
                        </v-col>
                        <v-col md="8" cols="12">
                            <LatestComment />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import ProfileStatistics from '../components/dashboard/profile_statistics.vue'
import ProfileVisit from '../components/dashboard/visit_profile.vue'
import BarChart from '../components/chart/bar.vue'
import AreaChart from '../components/chart/area.vue'
import CustomTitle from '../components/dashboard/custom_title.vue'
import LatestComment from '../components/dashboard/LatestComment.vue'
export default ({
    name:'Dashboard',
    components:{
        ProfileStatistics,
        ProfileVisit,
        AreaChart,
        BarChart,
        CustomTitle,
        LatestComment
    },

})
</script>
