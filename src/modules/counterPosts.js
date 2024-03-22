export default {
    state: {
        count: 1,
        task:[],
        historyTask: [],
    },
    actions: {
        
    },
    mutations: {
        addToCardNumber(state, payload){
            state.count = payload
        },
        addTask(state, payload){
            state.task = payload
        },
        removeTask(state, payload){
            state.history = payload
        }
    },
    getters: {},
}