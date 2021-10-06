<template>
    <div>
        <h4 class="blue-grey--text darken-4 title text-center pt-2">آخرین کامنت ها</h4>
        <SimpleTable :DataObj='LatestComment' class="mt-3"/>
    </div>
</template>
<script>
import SimpleTable from '../table/SimpleTable.vue'
import {mapState} from 'vuex'
export default ({
    name:'LatestComments',
    components:{
        SimpleTable
    },
    computed:{
        ...mapState(['LatestComment'])
    }
})
</script>

