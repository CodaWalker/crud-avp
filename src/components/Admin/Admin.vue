<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1>AdminPage</h1>
                <AdminUsers></AdminUsers>
                <!--<ApiORIG></ApiORIG>-->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import AdminUsers from './AdminUsers.vue'
    //import ApiORIG from '../share/ApiORIG.vue'
    export default {
        components:{AdminUsers},
        data () {
            return {}
        }
    }
</script>
