import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userBioData: []
    },
    mutations: {
        SAVE_USER_BIO_DATA(state, userBioData){
            state.userBioData = userBioData;
        }
    },
    getters: {
        userData: state => state.userBioData
    },
    actions: {
        loadUserBioData({commit}){
          window.console.log('load data!!!');
            fetch('https://jesem-88f42.firebaseio.com/user-data.json')
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    let userDataKey = [];
                    for(let key in data){
                        if(data.hasOwnProperty(key)) {
                            userDataKey.push(data[key]);
                        }
                    }

                    window.console.log(userDataKey);
                    commit('SAVE_USER_BIO_DATA', userDataKey)

                }).catch((error) => {
                window.console.log(error)
            })
        }
    }
})