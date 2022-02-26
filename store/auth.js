import qs from 'qs';

export const state = () => ({
    accessToken: null,
    refreshToken: null,
    user: '5f96g65fg65rfg'
})

export const getters = {
    isAuthenticated(state){
        return !!state.accessToken;
    },
    getUser(state){
        return state.user
    }
}

export const mutations = {
    setTokens(state, data) {
        state.accessToken = data.access_token;

        if (data.refresh_token) {
            state.refreshToken = data.refresh_token;
        }
    },

    setUser(state, user){
        state.user = user;
    },

    logout(state) {
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
    }
};

export const actions = {

    async login({ commit, dispatch },  data ) {
        const res = await this.$axios.$post('/listingapi/api/export/login', 
            qs.stringify({username: data.username, password: data.password})
        );

        const tokens = {access_token: res.access_token, refresh_token: res.refresh_token}
        commit('setTokens', tokens);
        await dispatch('getUser');
    },

    async getUser({ commit }) {
        const res = await this.$axios.$get('/listingapi/api/export/api/user');
        console.log(res)
        commit('setUser', res);
    },

    async refresh({ state, commit }) {
        console.log("store\n",state.refreshToken)
        const res = await this.$axios.$get('/listingapi/api/export/api/token/refresh');
        commit('setTokens', res);
    }
};