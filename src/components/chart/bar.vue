<template>
    <apexchart class="mt-5" type="bar" :options="options" height="300" :series="series"></apexchart>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'bar',
    data(){
        return{
            options: {
                chart: {
                    type:"bar",
                },
                dataLabels: {
                    enabled:false,
                    
                },
                xaxis: {
                    categories: [],
                    
                },
                fill:{
                    colors:['#435ebe']
                }
            },
            series: [{
                name:'حراجی',
                data: []
            }],
        }
    },
    computed:{
        ...mapState(['BarChart'])
    },
    created:function(){
        this.series[0].data = this.BarChart.data
        this.options.xaxis.categories = this.BarChart.categories
    }
}
</script>
<style>
.apexcharts-tooltip {
    background: #f3f3f3 !important;
    color: #000000 !important;
}
</style>