<template>
    <div>
        <v-row>
            <v-col cols="6 align-center" class="d-flex">
                <svg class="bi text-success" :fill="ColorFill">
                    <circle cx="8" cy="8" r="8"></circle>
                </svg>
                <span class="mx-2 blue-grey--text text-darken-4">{{title[0]}}</span>
            </v-col>
            <v-col cols="6">
                <span class="blue-grey--text text-darken-4">{{title[1]}}</span>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default ({
    name:'customtitle',
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