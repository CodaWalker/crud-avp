<template>
  <v-container>
    <v-layout align-start justify-end reverse fill-height>
      <v-flex xs1>
       <template> <!--диалог-->
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn slot="activator" color="green" dark>Настройки профиля</v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Настройки</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Сохранить</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-container fluid grid-list-md >
            <v-layout row wrap justify-center>
              <v-flex>
                <v-card-text >
                  <v-btn color="primary" dark @click="dialog_options_general = true">Основные настройки</v-btn>
                  <v-dialog v-model="dialog_options_general" max-width="500px" persistent>

                      <General @exit-change="onExitChange" :dialog_options_general="dialog_options_general"></General>

                  </v-dialog>
                  <v-btn color="primary" dark @click="dialog_options_contacts = true">Контакты</v-btn>
                  <v-dialog v-model="dialog_options_contacts" max-width="500px" persistent>

                      <Contacts  @exit-change="onExitChange" :dialog_options_contacts="dialog_options_contacts"></Contacts>

                  </v-dialog>
                   <v-btn color="primary" dark @click="dialog_options_occupation = true">Сфера деятельности</v-btn>
                  <v-dialog v-model="dialog_options_occupation" max-width="500px" persistent>

                    <Occupation @exit-change="onExitChange" :dialog_options_occupation="dialog_options_occupation"></Occupation>

                  </v-dialog>
                  <v-btn color="primary" dark @click="dialog_options_education = true">Образование</v-btn>
                  <v-dialog v-model="dialog_options_education" max-width="500px" persistent>

                    <Education @exit-change="onExitChange" :dialog_options_education="dialog_options_education"></Education>

                  </v-dialog>
                  <v-btn color="primary" dark @click="dialog_options_career = true">Карьера</v-btn>
                  <v-dialog v-model="dialog_options_career" max-width="500px" persistent>

                    <Career @exit-change="onExitChange" :dialog_options_career="dialog_options_career"></Career>

                  </v-dialog>

                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>

        </v-list>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
      </v-flex>
    </v-layout>
    <v-layout row justify-space-between>
        <v-flex d-flex xs12 sm6 md5
                v-if="user"
        >
          <v-hover>
            <v-card
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    class="mx-auto"
                    width="344"
            >

              <v-img
                      :aspect-ratio="16/9"
                      :src="user.imgSrc"
              ></v-img>
              <v-card-title>
                <div>
                  <span class="headline">{{user.nickName}}</span>
                  <div class="d-flex">
                    <v-rating
                            :value="value"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                    ></v-rating>
                    <div class="ml-2 grey--text text--darken-2">
                      <span>{{ value }}</span>
                      <span>({{ reviews }})</span>
                    </div>
                  </div>
                </div>
                <v-spacer></v-spacer>
                <v-btn
                        icon
                       class="mr-0">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-title>
            </v-card>
          </v-hover>
        </v-flex>
    </v-layout>





  </v-container>
</template>

<script>
  // b.vue (импортируем шину и отслеживаем в ней события)
  //import { Bus } from '../share/Bus.vue'

  import General from './Options/General.vue'
  import Contacts from './Options/Contacts.vue'
  import Occupation from './Options/Occupation.vue'
  import Education from './Options/Education.vue'
  import Career from './Options/Career.vue'


  //
  export default {
      props:['uid'],
      computed: {
          user() {
              const uid = this.uid;
              //console.log(this.$store.getters.userById(id));
              return this.$store.getters.userById(uid)
          }
      },
      mounted(){
          this.$store.dispatch('getUsers');
      },

    components: {
      General,
      Contacts,
      Occupation,
      Education,
      Career
    },
    methods:{
//      onExitChange(val) {
//        this.dialog_options_general = val;
// Нет необходимости получать от ребенка данные, известно - False
      onExitChange() {
        this.dialog_options_general = this.dialog_options_contacts =
        this.dialog_options_occupation = this.dialog_options_education =
        this.dialog_options_career = false;
      }
   },
    data () {
      return {
          reviews: 413,
          value: 4.5,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        userName:'',
        dialog_options_general: false,
        dialog_options_contacts: false,
        dialog_options_occupation: false,
        dialog_options_education: false,
        dialog_options_career: false,
        valid: false
      }
    }

  }
</script>
