<template>
    <div class="d-flex">
        <v-avatar size="60">
            <img :src="icon" :alt="Title" class="rounded-circle">
        </v-avatar>
        <div class="mr-3">
            <h5 class="blue-grey--text text--darken-5 title">{{Title}}</h5>
            <h6 class="blue-grey--text text--lighten-2 subtitle">{{Subtitle}}</h6>
        </div>
    </div>
</template>
<script>
export default ({
    props:['icon','size','Title','Subtitle']
})
</script>
