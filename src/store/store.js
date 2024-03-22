import { createStore } from 'vuex'
import posts from '@/modules/posts'
import counterPosts from '@/modules/counterPosts'

const store = createStore({
  modules: {
    posts,
    counterPosts,
    
  }
})

export default store