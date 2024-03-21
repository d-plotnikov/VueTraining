<template>
<div class="container">
    <h2 class="h2 search">Новости</h2>
    <h3>Кол-во новостей: <span class="num-posts">{{ posts.length }}</span></h3>
    <PostNews :cards="cards"/>
    <Paginate :page="page" @paginate="page = $event" :count="countCards" :per-page="cardPerPage"/>
</div>
</template>

<script>
import posts from '@/data/posts';
import Paginate from '@/components/Paginate';
import PostNews from '@/components/PostNews';


export default {
name: 'NewsPost',
components: { Paginate, PostNews },
data() {
    return {
        posts,
        page: 1,
        cardPerPage: 5,
    };
},
computed: {
    cards(){
        const offset = (this.page - 1) * this.cardPerPage
        return this.posts.slice(offset, offset + this.cardPerPage)
    },
    countCards() {
        this.countStateCard(this.posts.length)
        return this.posts.length
    },
},
methods: {
    countStateCard(data){
        this.$store.commit(
            "addToCardNumber",
            data
        )
    },
},
}
</script>

<style lang="scss">

</style>
