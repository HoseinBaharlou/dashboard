<template>
    <div>
        <apexchart class="mt-5" type="area" :options="options" :height="height" :series="series" fill='#435ebe'></apexchart>
    </div>
</template>
<script>
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
                    categories: ["2018-09-19T00:30:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
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
            },
            series: [{
                name:'ردیف',
                data: [230,804,524,426,167,645,700]
            }],       
        }
    }  
}
</script>