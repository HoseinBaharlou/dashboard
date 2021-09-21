<template>
    <div>
        <apexchart type="donut" width="330" :options="chart" :series="series"></apexchart>
    </div>
</template>
<script>
export default ({
    name:'donutchart',
    data(){
        return{
            chart: 
            {
                width:'100px',
                height: 350,
                type: 'donut',
                labels: ["مرد", "زن"],
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
            series: [70,30],
        }    
    }
})
</script>
