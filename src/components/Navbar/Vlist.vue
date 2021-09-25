<template>
    <v-list dense>
        <v-list-item v-for='link in links' :key="link.title" :to="link.router" class="rounded-lg indigo white--text">
            <v-list-item-icon>
                <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default ({
    name:'Vlist',
    props:['links']
})
</script>
