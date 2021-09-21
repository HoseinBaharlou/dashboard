<template>
    <apexchart class="mt-5" type="bar" :options="options" height="300" :series="series"></apexchart>
</template>
<script>
export default {
    name:'bar',
    data(){
        return{
            options: {
                chart: {
                    type:"bar"
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: 'none',
                        },
                    }
                },
                xaxis: {
                    categories: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
                },
                fill:{
                    colors:['#435ebe']
                }
            },
            series: [{
                name:'حراجی',
                data: [9, 20, 30, 20, 10,20,30,20,10,20,30,20]
            }],
        }
    },
}
</script>