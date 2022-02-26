export default function({
    store,
    app: { $axios },
    redirect
}) {
    $axios.onRequest((config) => {
        // check if the user is authenticated
        if (store.state.auth.accessToken) {
            // set the Authorization header using the access token
            config.headers.Authorization = 'Bearer ' + store.state.auth.accessToken;
        }

        return config;
    });


    $axios.onError(async (error) => {
        const statusCode = error.response ? error.response.status : -1;

        if (statusCode === 403) {
            store.commit('auth/logout');
            return redirect('/login');
          }

        return Promise.reject(error);
    });


    // is Authenticated
    if (!store.getters['auth/isAuthenticated']){
        redirect('/login')
    }
    
}