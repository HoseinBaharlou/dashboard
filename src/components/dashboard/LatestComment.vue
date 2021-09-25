<template>
    <div>
        <h4 class="blue-grey--text darken-4 title">آخرین کامنت ها</h4>
        <SimpleTable :DataObj='LatestComment' class="mt-5"/>
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

