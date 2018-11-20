import root from '../main'
export default {
    state: {
        nickNameRules: [
            v => !!v || 'Имя обязательно для заполнения',
            v => (v && v.length >= 3) || 'Имя не может быть менее 3 символов'
        ],
        emailRules: [
            v => !!v || 'Требуется E-mail',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
                || 'E-mail должен быть действительным'
        ],
        passwordRules: [
            v => !!v || 'Необходим пароль',
            v => (v && v.length >= 6) || 'Пароль должен быть равен больше 6 символов'
        ],
        statusOnlineRules: [
            v => !!v || 'Необходим статус',
            v => (v && v.length >= 1) || 'Пароль должен быть равен больше 1 символов'
        ],
        valid:false,
        errorMessage:'',
        successMessage:'',
        snack:{
            snackValue: false,
            snackColor: '',
            snackText: '',
            name:''
        },
        snackSave:{
            snackValue: true,
            snackColor: '#4CAF50',
            snackText: 'Сохранен',
        },
        snackDelete:{
            snackValue: true,
            snackColor: '#F44336',
            snackText: 'Удален',
        },
        snackClose:{
            snackValue: true,
            snackColor: '#EF6C00',
            snackText: 'Отмена',
        },
        snackCreate:{
            snackValue: true,
            snackColor: '#0277BD',
            snackText: 'Создан',
        },
        snackError:{
            snackValue: true,
            snackColor: '#B71C1C',
            snackText: 'Ошибка',
        },
        headers: [
            {
                text: 'ID',
                align: 'left',
                sortable: true,
                value: 'id'
            },
            { text: 'Ник', value: 'nickName' },
            { text: 'Емайл', value: 'email' },
            { text: 'Пароль', value: 'password' },
            { text: 'Онлайн', value: 'statusOnline' },
            { text: 'Действия', value: 'id', sortable: false }
        ],
        search: "",
        users: [],
        pages: 1,
        dialog: false,
        editedIndex: -1,
        selected: [],
        editedItem: {
            nickName: '',
            email: '',
            password: '',
            statusOnline: '',
        },
        validateItem: {
            nickName: '',
            email: '',
            password: '',
            statusOnline: '',
        },
        defaultItem: {
            nickName: '',
            email: '',
            password: '',
            statusOnline: '',
        },
        pagination: {
            rowsPerPage: 8,
            sortBy: 'id',
            totalItems: 0,
        },
        rowsPerPageItems: [4, 8, 12,
                 {"text": "$vuetify.dataIterator.rowsPerPageAll", "value": -1}
            ],
        formData:{}
    },
    mutations: {
        setToFormData(state,val){
            console.log(val);

            let form_data = new FormData();
            for (   let key in val ) {
                form_data.append(key, val[key]);
                //console.log(form_data.getAll('userName'));
            }
            //console.log(form_data);S
            state.formData = form_data;
        },
        setAllUsers(state, users) {
            state.users = users
        },
        setUserTransfer(state) {
            state.users[state.editedIndex] = state.editedItem;
        },
        setDialog(state, val) {
            //console.log(val);
            state.dialog = val;
        },
        setEditedItem(state, item) {
            state.editedIndex = state.users.indexOf(item);
            state.editedItem = Object.assign({}, item);
            state.validateItem = Object.assign({}, item);
            state.dialog = !state.dialog;
            state.validateItem = Object.assign({}, item);
        },
        setEditedIndex(state, index) {
            //console.log(index);
            state.editedIndex = index;
        },
        setClearEditedItem(state) {
            state.editedItem = Object.assign({}, state.defaultItem);
        },
        setClearSelected(state) {
            state.selected = [];
        },
        setSelected(state, val) {
            state.selected = val;
        },
        setPaginationTotalItems(state, users) {
            state.pagination.totalItems = users;
        },
        setPagination(state, val) {
            state.pagination = val;
        },
        setPages(state) {
            if (state.pagination.rowsPerPage === null ||
                state.pagination.totalItems === null
            ) {
                state.pages = 1;
            }
            state.pages = Math.ceil(state.pagination.totalItems / state.pagination.rowsPerPage)
        },
        setSearch(state, val) {
            state.search = val;
        },
        setSnack(state,val){
            //state.snack.name = state.editedItem.nickName;
            if(val === 'save'){
                state.snack = Object.assign(state.snack, state.snackSave);
            }
            else if(val === 'delete'){
                state.snack = Object.assign(state.snack, state.snackDelete);
            }
            else if(val === 'close'){
                if(state.snackClose.name !== 'undefined'){
                    state.snack = Object.assign(state.snack, state.snackClose);
                }
                else{
                    state.snackClose.name = '';
                    state.snack = Object.assign(state.snack, state.snackClose);
                }
            }
            else if(val === 'create'){
                state.snack = Object.assign(state.snack, state.snackCreate);
            }
            else if(val === 'error'){
                state.snack = Object.assign(state.snack, state.snackError);
            }
            else {
                state.snackError.name = 'неизвестная';
                state.snack = Object.assign(state.snack, state.snackError);
            }

        },
        setSnackName(state){
            state.snack.name = state.editedItem.nickName;},
        setSnackNameOtherVal(state,val){
            if(val === 'обновления'){
              return  state.snack.name = val +' '+ state.snack.name;}
            if(val === 'создания'){
                return  state.snack.name = val +' '+ state.snack.name;}
            if(val === 'удаления'){
                return  state.snack.name = val +' '+ state.snack.name;}
            state.snack.name = val;},

            setValid(state,val) {
                state.valid = val;
                },
            setNickNameRules(state,val){
            state.nickNameRules = val
            },
            setEmailRules(state,val){
                state.emailRules = val
            },
            setPasswordRules(state,val){
                state.passwordRules = val
            },
            setStatusOnlineRules(state,val){
                state.statusOnlineRules = val
            },

    },
    actions: {
        getAllUsers({commit}) {
            commit('setLoading', true);
            root.axios.get("http://crud-php/api.php?action=read&obj=users")
                .then(response => {
                    console.log(response);
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                    } else {
                        let users = response.data.users;
                        let totalItems = users.length;
                        commit('setAllUsers', users);
                        commit('setPaginationTotalItems', totalItems);

                    }
                });
            setTimeout(() => {commit('setLoading', false);}, 1000);
        },

        getUpdateUser({commit}, obj) {
            commit('setLoading', true);
            root.axios.post("http://crud-php/api.php?action=update&obj=users", obj)
                .then(response => {
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                        console.log(this.errorMessage);
                        commit('setSnackNameOtherVal','обновления');
                        commit('setSnack','error');
                    } else {
                        this.successMessage = response.data.message;
                        this.dispatch('getAllUsers');
                    }
                });
            setTimeout(() => {commit('setLoading', false);}, 1000);
        },
        getSearchEmailUnic({commit}, obj) {
            commit('setLoading', true);
            root.axios.post("http://crud-php/api.php?action=search&obj=users", obj)
                .then(response => {
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                        console.log(this.errorMessage);
                        commit('setSnackNameOtherVal','поиска');
                        commit('setSnack','error');
                    } else {
                        this.successMessage = response.data.message;
                        console.log(response.data.message);
                    }
                });
            setTimeout(() => {commit('setLoading', false);}, 1000);
        },
        getSaveUser({commit}, obj) {
            commit('setLoading', true);
            // let formData = commit('toFormData',this.editedItem);
            root.axios.post("http://crud-php/api.php?action=create&obj=users", obj)
                .then(response => {
                    console.log(response);
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                        console.log(this.errorMessage);
                        commit('setSnackNameOtherVal','создания');
                        commit('setSnack','error');
                    } else {
                        this.successMessage = response.data.message;
                        this.dispatch('getAllUsers');
                    }
                });
            setTimeout(() => {commit('setLoading', false);}, 1000);
        },

        deleteUser({commit}, formData) {
            commit('setLoading', true);
            root.axios.post("http://crud-php/api.php?action=delete&obj=users", formData)
                .then(response => {
                    console.log(response);
                    commit('setClearSelected');
                    if (response.data.error) {
                        this.errorMessage = response.data.message;
                        console.log(this.errorMessage);
                        commit('setSnackNameOtherVal','удаления');
                        commit('setSnack','error');
                    } else {
                        this.successMessage = response.data.message;
                        this.dispatch('getAllUsers');
                    }
                });
            setTimeout(() => {commit('setLoading', false);}, 1000);
        },
    },
    getters: {
        getPagination:(state) => state.pagination,

        getAllUsers:(state) => state.users,

        getDialog:(state) => state.dialog,

        getEditedIndex:(state) => state.editedIndex,

        getEditedItem:(state) => state.editedItem,

        getValidateItem:(state) => state.validateItem,

        getSelected:(state) => state.selected,

        getPages:(state) => state.pages,

        getRowsPerPageItems:(state) => state.rowsPerPageItems,

        getSearch:(state) => state.search,

        getHeaders:(state) => state.headers,

        getSnack:(state) => state.snack,

        getToFormData:(state) => state.formData,

        getValid:(state) => state.valid,

        getNickNameRules:(state) => state.nickNameRules,

        getEmailRules:(state) => state.emailRules,

        getPasswordRules:(state) => state.passwordRules,

        getStatusOnlineRules:(state) => state.statusOnlineRules,
    }
}

