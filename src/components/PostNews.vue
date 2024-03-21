<template>
<div class="parent">
    <div  :data-atr="key" :class="['card card_news', {'card_grid' : item.firstPost}]" v-for="(item, key) in cards" :key="key">
        <img :src="item.image" :alt="item.title">
        <h3 class="title-search">{{item.title}}</h3>
        <p class="text-search">{{item.text}}</p> 

    </div>
</div>

</template>

<script>
export default {
  name: 'PostNews',
  props: ['cards'],
  methods: {
  },
}
</script>

<style lang="scss">
  .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card_news{
    margin: 0 !important;
    margin-bottom: 24px !important;
    @media screen and (max-width: 768px) {
      flex-basis: content;
    }
  }
  .card_grid{
    flex-basis: content;
  }
</style>

