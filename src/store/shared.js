import root from '../main'
export default {
    state: {
        loading: false,
    },
    mutations:{
        setLoading(state,payload) {
            state.loading = payload;
        },
    },
    actions: {
    },
    getters:{
        getLoading:(state) => state.loading,
    }
}