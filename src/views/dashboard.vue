<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col md="8" cols="12" class="mt-5">
                    <ProfileStatistics />
                </v-col>
                <v-col md="8" cols="12" class="mt-5">
                    <ProfileVisit />
                </v-col>
                <v-col md="8" cols="12">
                    
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import ProfileStatistics from '../components/dashboard/profile_statistics.vue'
import ProfileVisit from '../components/dashboard/visit_profile.vue'
export default ({
    name:'Dashboard',
    components:{
        ProfileStatistics,
        ProfileVisit
    },

})
</script>
