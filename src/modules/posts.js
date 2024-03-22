export default {
    actions: {
        async fetchPosts({commit, getters, dispatch}, limit = 3) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit='+limit);
            const posts = await res.json();
            
            
            dispatch('saiHellow')
            commit('addPosts', posts);
            console.log('Кол-во постов'+ getters.counterPosts)

        },
        saiHellow() {
            console.log('Вызов action saiHellow()')
        }
    },
    mutations: {
        addPosts(state, posts) {
            state.posts = posts; // Используем оператор расширения для добавления новых постов
        },
        addNewPost(state, newPost){
            state.posts.unshift(newPost)
        }

    },
    state: {
        posts: []
    },
    getters: {
        validatePost(state) {
            return state.posts.filter(item => item.title && item.body)
        },
        getPosts(state) {
            return state.posts
        },
        counterPosts(state, getters) {
            return getters.validatePost.length
        }
    },
}