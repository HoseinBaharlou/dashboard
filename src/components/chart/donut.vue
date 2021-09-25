<template>
    <div>
        <apexchart type="donut" width="330" :options="chart" :series="series"></apexchart>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default ({
    name:'donutchart',
    data(){
        return{
            chart: 
            {
                width:'100px',
                height: 350,
                type: 'donut',
                labels: [],
                colors: ["#55c6e8", "#435ebe"],
                legend:{
                    position:'bottom'
                },
                plotOptions: {
                    pie: {
                        customScale: 0.8,
                        size: 100,
                        donut: {
                            size: '30%'
                        }
                    }
                },
                dataLabels:{
                    style:{
                        fontSize:'18px'
                    }
                }
            },
            series: [],
        }    
    },
    computed:{
        ...mapState(['donutchart'])
    },
    created:function(){
        this.series = this.donutchart.data
        this.chart.labels = this.donutchart.labels
    }
})
</script>
