<template>
    <v-app>
        <v-container>
            <v-row>
                <!-- profile statistics -->
                <v-col md="8" cols="12" class="mt-5">
                    <ProfileStatistics />
                </v-col>
                <!--  -->
                <v-col md="8" cols="12">
                    <v-row>
                        <!-- statistics -->
                        <v-col cols="12" class="mt-5">
                            <Statistics />
                        </v-col>
                        <!-- profile visit -->
                        <v-col cols="12" class="mt-5">
                            <ProfileVisit />
                            <BarChart />
                        </v-col>
                        <!-- area chart -->
                        <v-col cols="12">
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
                                <!-- LatestComment -->
                                <v-col md="8" cols="12">
                                    <LatestComment />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>                
                <v-col md="4" cols="12" class="mt-10">
                    <!-- profile  -->
                    <div class="text-center">
                        <profile Title="حسین بهارلو" Subtitle='@hossinbaharlou' icon='icon/2.jpg' size='60' class="justify-center"/>
                    </div>
                    <!-- Recent Messages desktop -->
                    <div class="mt-16 py-10 py-xl-5">
                        <RecentMessages class="" />
                        <div class="text-center mt-5 py-4">
                            <v-btn x-large depressed text block>شروع گفتگو</v-btn>
                        </div>
                    </div>
                    <!-- donut chart -->
                    <div class="mt-5">
                        <VisitorsProfile />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import ProfileStatistics from '../components/dashboard/profile_statistics.vue'
import Statistics from '../components/dashboard/statistics.vue'
import profile from '../components/dashboard/profile.vue'
import ProfileVisit from '../components/dashboard/visit_profile.vue'
import BarChart from '../components/chart/bar.vue'
import AreaChart from '../components/chart/area.vue'
import CustomTitle from '../components/dashboard/custom_title.vue'
import LatestComment from '../components/dashboard/LatestComment.vue'
import RecentMessages from '../components/dashboard/RecentMessages.vue'
import VisitorsProfile from '../components/dashboard/VisitorsProfile.vue'
export default ({
    name:'Dashboard',
    components:{
        ProfileStatistics,
        Statistics,
        profile,
        ProfileVisit,
        AreaChart,
        BarChart,
        CustomTitle,
        LatestComment,
        RecentMessages,
        VisitorsProfile
    },

})
</script>
