<template>
    <div class="d-flex justify-center">
        <v-avatar size="60">
            <img :src="icon" :alt="Title" class="rounded-circle">
        </v-avatar>
        <div>
            <h5 class="deep-purple--text text--darken-5 title">{{Title}}</h5>
            <h6 class="deep-purple--text text--lighten-2 subtitle">{{Subtitle}}</h6>
        </div>
    </div>
</template>
<script>
export default ({
    props:['icon','size','Title','Subtitle']
})
</script>
