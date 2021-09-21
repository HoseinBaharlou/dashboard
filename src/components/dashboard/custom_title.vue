<template>
    <div>
        <v-row>
            <v-col cols="6 align-center" class="d-flex">
                <svg class="bi text-success" :fill="ColorFill">
                    <circle cx="8" cy="8" r="8"></circle>
                </svg>
                <span class="mx-2">{{title[0]}}</span>
            </v-col>
            <v-col cols="6">
                <span>{{title[1]}}</span>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default ({
    props:{
        ColorFill:String,
        title:Array
    }
})
</script>

<style scoped>
    .v-row{
        flex-wrap: nowrap !important;
    }
    svg{
        width:3vh;
        height:3vh;
    }
</style>