<!-- eslint-disable vue/no-dupe-keys -->
<template>
<div class="container"  v-for="(item, key) in items" :key="key">
    <h2 class="title mb-20">Sortable</h2>
    <!-- <div class="droppable-wrapper">
        <div class="droppable card" v-for="(drop, key) in item.droppable" :key="key">
            {{drop.textDrop}}
        </div>
    </div> -->
    <draggable class="draggable-wrapper" v-model="draggableItems" group="tasks" @start="drag=true" @end="drag=false" item-key="id" :move="checkMove">
        <template #item="{element}" >
            <div class="draggable card">{{ element.textDrag }}</div>
        </template>
    </draggable>


</div>
</template>

<script>
import Draggable from 'vuedraggable';
import items from '@/data/draganddrop.js';

export default {
components: { 
    Draggable,
},   
data: function () {
    return {
        items: items,
        draggableItems: items[0].draggable,
        droppableItems: items[0].droppable,
        arrDropp: [],
        dragPosition: false,
        drag: false,
        btnAccept: false,
        correct: false,
    }
},    
computed: {
    sortArray: function () {
        return this.shuffle(this.draggableItems)
    }
},
methods: {
    shuffle(data) {
        data.sort(() => Math.random() - 0.5);
    },

},
}
</script>

<style lang="scss">

</style>
