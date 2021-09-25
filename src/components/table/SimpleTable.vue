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
                    <td class="pa-5">
                        <v-row align="center">
                            <v-col cols="6">
                                <v-avatar>
                                    <img :src="data.image" :alt="data.name" height="32" width="32" class="rounded-circle">
                                </v-avatar>
                            </v-col>
                            <v-col cols="6">
                                <span class="grey--text">{{data.name}}</span>
                            </v-col>
                        </v-row>
                    </td>
                    <td class="grey--text pa-5">
                        {{data.content}}
                    </td>
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
