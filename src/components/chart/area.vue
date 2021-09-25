<template>
    <div>
        <apexchart class="mt-5" type="area" :options="options" :height="height" :series="series" fill='#435ebe'></apexchart>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'area',
    props:{
        height:String,
        colorline:String,
        fillchart:String,
    },
    data(){
        return{
            options: {
                chart: {
                    stacked: true,
                    type:"area",
                    toolbar:{
                        show:false
                    },
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: 'none',
                        },
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    type: 'datetime',
                    categories: [55],
                    labels: {
                        show: false,
                    },    
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
                yaxis:{
                    labels: {
                        show: false
                    }
                },
                fill:{
                    colors:[this.fillchart]
                },
                colors:[this.colorline],
                stroke: {
                    show: true,
                    width: 2,
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                grid:{
                    show:false
                }
            },
            series: [{
                name:'ردیف',
                data: []
            }],       
        }
    },
    computed:{
        ...mapState(['AreaChart'])
    },
    created:function(){
        this.series[0].data = this.AreaChart[0].data
        this.options.xaxis.categories = this.AreaChart[0].categories
    }
}
</script>