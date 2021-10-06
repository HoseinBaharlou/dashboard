<template>
    <v-app>
        <v-container fluid>
            <v-row>
                <v-col md="8" cols="12">
                    <v-row>
                        <!--profile statistics -->
                        <v-col cols="12" class="mt-5">
                            <v-card>
                                <ProfileStatistics />
                                <Statistics />
                            </v-card>
                        </v-col>
                        <!-- profile visit -->
                        <v-col cols="12" class="mt-5">
                            <v-card class="px-5">
                                <ProfileVisit />
                                <BarChart />
                            </v-card>
                        </v-col>
                        <!-- area chart -->
                        <v-col cols="12">
                            <v-row>
                                <v-col md="4" cols="12">
                                    <v-card>
                                        <ProfileVisit />
                                        <CustomTitle ColorFill='#5350e9' :title="['اروپا','862']" class="mt-5"/>
                                        <AreaChart colorline="#5350e9" fillchart="#5350e9" height="80"/>
                                        <CustomTitle ColorFill='#008b75' :title="['آمریکا','375']" class="mt-5"/>           
                                        <AreaChart colorline="#008b75" fillchart="#008b75" height="80"/>
                                        <CustomTitle ColorFill='#dc3545' :title="['اندونزی','1025']" class="mt-5"/>
                                        <AreaChart colorline="#dc3545" fillchart="#dc3545" height="80"/>
                                    </v-card>
                                </v-col>
                                <!-- LatestComment -->
                                <v-col md="8" cols="12">
                                    <v-card>
                                        <LatestComment />
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>                
                <v-col md="4" cols="12" class="mt-10">
                    <!-- profile  -->
                    <v-card class="text-center mt-10 py-5">
                        <profile Title="حسین بهارلو" Subtitle='@hossinbaharlou' icon='icon/2.jpg' size='60' class="justify-center"/>
                    </v-card>
                    <!-- Recent Messages desktop -->
                    <v-card class="mt-15 mt-lg-16">
                        <RecentMessages />
                    </v-card>
                    <!-- start conversation -->
                    <v-card class="text-center mt-5 py-5">
                        <v-btn x-large depressed text block>شروع گفتگو</v-btn>
                    </v-card>
                    <!-- donut chart -->
                    <v-card class="mt-10 py-5">
                        <VisitorsProfile />
                    </v-card>
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
