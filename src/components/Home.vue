
<template>
    <v-container>
        <v-layout row justify-space-between >
            <v-flex  xs4>
                <h1 class="text--secondary mb-3">Все пользователи</h1>
                <v-card
                        class="elevation-10 mb-2"
                        v-for="user in allUsers"
                        :key="user.id"
                        v-if="user"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    :src="user.imgSrc"
                                    height="160px"
                            ></v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primry">{{user.nickName}}</h2>
                                <p>{{user.email}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="info"
                                :to="'/userPage/' + user.id"
                                >Профиль</v-btn>
                            </v-card-actions>
                        </v-flex>

                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import root from '../main'
    export default {
        created(){
            this.$store.dispatch('getUsers');
        },
        computed:{
            allUsers(){
                return this.$store.getters.allUsers
            }

        }
    }
</script>

<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>
