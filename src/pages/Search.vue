<template>
<div class="container">
    <h2 class="h2 search">Реализация поиска, пагинации, API, передача в store кол-ва постов</h2>
    <h3>Кол-во постов: <span class="num-posts">{{ $store.state.count }}</span></h3>
      <div class="container title">
        <div class="card search">
        <input class="input search__input" name="display_name" placeholder="Введите данные для поиска" type="text" v-model="search">
    </div>
  </div>
    <BasePost :cards="cards"/>
    <Paginate :page="page" @paginate="page = $event" :count="countCards" :per-page="cardPerPage"/>
</div>
</template>

<script>
import Paginate from '@/components/Paginate.vue';
import BasePost from '@/components/BasePost.vue';


export default {
name: 'searchInput',
components: { Paginate, BasePost },
data() {
    return {
        search: '',
        todos: [],
        page: 1,
        cardPerPage: 10,
    };
},
computed: {
    todosByTitle() {
        return this.todos.filter(item => item.title.lastIndexOf(this.search) > -1)
    },
    cards(){
        const offset = (this.page - 1) * this.cardPerPage
        return this.todosByTitle.slice(offset, offset + this.cardPerPage)
    },
    countCards() {
        this.countStateCard(this.todosByTitle.length)
        return this.todosByTitle.length
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
beforeMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
        this.todos = json;
        })
},
}
</script>

<style lang="scss">

</style>
