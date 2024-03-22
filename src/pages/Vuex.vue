<template>
<div class="container">
    <h1 class="title mb-30 mt-100">Работа с Vuex</h1>
    <PostForm/>
    <h2> Кол-во постов: {{counterPosts}}</h2>
    <div class="card search top" v-for="(item, key) in validatePost" :key="key">
        <h3 class="title-search mt-0 mb-20">{{item.title}}</h3>
        <p class="text-search">{{item.body}}</p> 
    </div>

</div>
</template>

<script>


import { mapGetters, mapActions } from 'vuex'
import PostForm from '@/components/PostForm.vue'

export default {
    name: 'vuex',
    components: { PostForm },
    computed: mapGetters(['validatePost', 'counterPosts']),
    methods: mapActions(['fetchPosts']),
    mounted() {
        this.fetchPosts(15)
    },
}
</script>

<style lang="scss">
.mb-20{
    margin-bottom: 20px;
}
.mb-30{
    margin-bottom: 30px;
}
.mb-40{
    margin-bottom: 40px;
}
.mt-0{
    margin-top: 0!important;
}
.mt-100 {
    margin-top: 100px;
}
</style>
