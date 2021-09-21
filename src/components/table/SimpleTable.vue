<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <v-row>
                        <v-col cols="5">
                            <th class="text-right grey--text">نام</th>
                        </v-col>
                        <v-col cols="7">
                            <th class="text-right grey--text">کامنت</th>
                        </v-col>
                    </v-row>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in DataObj" :key="data.title">
                    <v-row class="ma-3">
                        <v-col cols="5">
                            <td>
                                <v-avatar>
                                    <img :src="data.image" height="32" width="32" class="rounded-circle">
                                </v-avatar>
                                <span class="mx-2 grey--text">{{data.name}}</span>
                            </td>
                        </v-col>
                        <v-col cols="7">
                            <td class="grey--text">
                                {{data.content}}
                            </td>
                        </v-col>
                    </v-row>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>
<script>
export default ({
    name:'SimpleTable',
    props:[
        'DataObj'
    ],
})
</script>
