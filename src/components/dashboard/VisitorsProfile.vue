<template>
    <div class="text-md-center text-right">
        <h4 class="blue-grey--text text-darken-4 title">مشخصات بازدید کنندگان</h4>
        <div class="d-flex justify-center">
            <DonutChart />
        </div>
    </div>
</template>
<script>
import DonutChart from '../chart/donut.vue'
export default ({
    setup() {
        
    },
    components:{
        DonutChart
    }
})
</script>
