<template>
    <v-footer>
        <v-row>
            <v-col cols="6">
                <div>
                    <span class="blue-grey--text text--lighten-2">ساخته شده با</span>
                    <v-icon class="red--text">mdi-heart-outline</v-icon>
                    <span class="blue-grey--text text--lighten-2">&nbsp;توسط&nbsp;</span>
                    <a href="" class="blue-grey--text text-decoration-none">&nbsp;حسین بهارلو</a>
                </div>
            </v-col>
            <v-col cols="6">
                <p class="text-left blue-grey--text text--lighten-2">
                    {{new Date().getFullYear() }}&copy; <strong>مازار</strong>
                </p>
            </v-col>
        </v-row>
    </v-footer>
</template>