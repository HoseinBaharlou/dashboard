<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-right grey--text">نام</th>
                    <th class="text-right grey--text">کامنت</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in DataObj" :key="data.title">
                    <td class="pa-5">
                        <v-row align="center">
                            <v-col md="6" cols="12">
                                <v-avatar>
                                    <img :src="data.image" :alt="data.name" height="32" width="32" class="rounded-circle">
                                </v-avatar>
                            </v-col>
                            <v-col md="6" cols="12" class="text-center">
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
