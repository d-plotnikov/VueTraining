<template>
    <div class="card search">
        <form @submit.prevent="submit">
            <input class="input search__input mb-20" placeholder="Заголовок" type="text" v-model="title">
            <input class="input search__input " placeholder="Текст" type="text" v-model="text">
            <button class="btn" type="submit">
                Добавить задачу
            </button>
        </form>

    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'PostForm',
  props: ['cards'],
  data() {
    return {
        title: '',
        text: '',
    };
  },
  methods: {
     ...mapMutations(['addNewPost']),
    submit() {
       this.addNewPost({
        title: this.title,
        body: this.text,
        id: Date.now()
       })
       this.title = ''
       this.text = ''
    }
  },
}
</script>

<style lang="scss">
.card.search{
    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        input{
            width: 98%;
        }

    }
}
</style>

