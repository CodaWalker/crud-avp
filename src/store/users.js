import root from '../main'

class User{
    constructor(id){
        this.id = id
    }
}
export default {
    state: {
        users:[],
        user: {
            nickName: 'user',
            email: '',
            password: '',
            confirmPassword:'',
            statusOnline: '1',
            },
        error:null,
        formData:{},
    },
    mutations:{
        setUser(state,user){
            state.user = user;
        },
        setUsers(state,users){
            state.users = users;
        },
        setError(state,payload){
            state.error = payload;
        },
        clearError(state){
            state.error = null;
        },
        setToFormDataUser(state,val){

            let form_data = new FormData();
            for (   let key in val ) {
                form_data.append(key, val[key]);
                //console.log(form_data.getAll('userName'));
            }
            //console.log(form_data);S
            state.formData = form_data;
        },
    },
    actions:{

        getUsers({ commit },time) {
            setTimeout(()=>{
                //commit('setLoadingComb', true);
                root.axios.get("http://storm/api.php?action=read&obj=users")
                    .then(response => {
                        if (response.data.error) {
                            this.errorMessage = response.data.message;
                            console.log('err-users');
                        } else {
                            console.log('ok-users');
                            const users = response.data.users;
                            commit('setUsers',users);
                        }
                    });
            },time);
            //setTimeout(() => {commit('setLoadingComb', false);}, 1);
        }
    },
    getters:{
        getToFormDataUser:(state) => state.formData,

        getUser:(state) => state.user,

        allUsers(state){
            // this.dispatch('getUsers',20000);
            return state.users
        },
        userById(state){
            return userId => {
                return state.users.find(
                    user => user.id === userId)
            }
         },
    }
}
