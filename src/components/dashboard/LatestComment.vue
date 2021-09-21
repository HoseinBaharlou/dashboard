<template>
    <div>
        <h4 class="blue-grey--text darken-4">آخرین کامنت ها</h4>
        <SimpleTable :DataObj='data' class="mt-5"/>
    </div>
</template>
<script>
import SimpleTable from '../table/SimpleTable.vue'
export default ({
    name:'LatestComments',
    data() {
        return{
            data:[
                {'image':'icon/5.jpg','name':'بی بی','content':'فارغ التحصیلی شما را تبریک می گویم!'},
                {'image':'icon/2.jpg','name':'غلام','content':'عجب طراحی شگفت انگیزی!  آیا می توانید آموزش دیگری برای این طرح تهیه کنید؟'}
            ]
        }
    },
    components:{
        SimpleTable
    }
})
</script>
