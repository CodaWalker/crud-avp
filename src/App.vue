<template>
    <v-app>
        <v-navigation-drawer app temporary v-model="drawer">
            <v-list>
                <v-list-tile
                        v-for="link in links"
                        :key="link.title"
                        :to="link.url"
                        @click=""
                >
                    <v-list-tile-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title v-text="link.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app dark color="primary">

            <v-toolbar-side-icon
                    @click="drawer = !drawer"
                    class="hidden-md-and-up"
            ></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" class="pointer">Crud Mysql Apache Vue(Vuex) Php </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn  v-for="link in links"
                        :key="link.title"
                        :to="link.url"
                        flat
                >  <v-icon left>{{link.icon}}</v-icon>{{link.title}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>


        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>

    export default {
        data () {
            return {
                drawer: false,
                links: [
                    { title: 'Админ', icon: 'supervisor_account', url:'/admin' },
                ]
            }
        }
    }
</script>
<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
