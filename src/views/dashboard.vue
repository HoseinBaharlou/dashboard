<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col md="8">
                    <ProfileStatistics />
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import ProfileStatistics from '../components/dashboard/profile_statistics.vue'
export default ({
    setup() {
        
    },
    components:{
        ProfileStatistics
    }
})
</script>
