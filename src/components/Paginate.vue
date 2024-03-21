<template>
<div class="container container-paginate">
    <div class="paginate">
        <button class="paginate__btn paginate__btn-arrow-prev"
        @click.prevent="paginatePrev(page)"></button>
        <button :class="['paginate__btn paginate__btn-number', {'active' : pageNum == page}]"
        v-for="(pageNum, key) in pages"
        :key="key"
        @click="paginate(pageNum)">
        {{pageNum}}
        </button>
        <button class="paginate__btn paginate__btn-arrow-next"
        @click.prevent="paginateNext(page)"></button>
    </div>
</div>
</template>

<script>
export default {
name: 'myPaginate',
model: {
    prop: 'page',
    event: 'paginate',
},
props: ['page', 'count', 'perPage'],
computed: {
    pages() {
        return Math.ceil(this.count / this.perPage);
    },  
},
methods: {
    paginate(page) {
        this.$emit('paginate', page);
    },
    paginatePrev(page) {
        if (page > 1) {
        this.$emit('paginate', page - 1);
        }
    },
    paginateNext(page) {
        if (page < this.pages) {
        this.$emit('paginate', page + 1);
        }
    },
},
}
</script>

<style lang="scss">


</style>
